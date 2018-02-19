import {Component, ViewChild} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryProvider, ContractProvider, ParameterProvider, ProductProvider} from "../../providers";
import {Category, Parameter, Position, Product} from "../../models";
import {GlobalService, NavbarService, ParametersService, SeoService, ServerResponseService, SortingService} from "../../services";
import {PagerControl} from "../../controls/module";
import {ComponentCatalogFilter} from "./components/module";

@Component({
    selector: 'catalog',
    host: {'class': 'container d-block'},
    templateUrl: 'catalog.html'
})
export class CatalogPage {

    @ViewChild(PagerControl) pagerComponent;
    @ViewChild(ComponentCatalogFilter) catalogFilter;

    products: Product[] = [];
    parameters: Parameter[] = [];
    category: Category = new Category();
    categoryId: string;
    categoryName: string;
    catalogMode: boolean;
    noresults: boolean;
    ready: boolean = false;
    params: any;
    page: number;
    sort: any;
    activeSort: string;
    xs: boolean = false;

    constructor(private serverResponseService: ServerResponseService,
                private productProvider: ProductProvider,
                private parametersService: ParametersService,
                private categoryProvider: CategoryProvider,
                private parameterProvider: ParameterProvider,
                private contractProvider: ContractProvider,
                private sortingService: SortingService,
                private navbarService: NavbarService,
                private route: ActivatedRoute,
                private router: Router,
                private globalService: GlobalService,
                private seoService: SeoService) {
    }

    scrollToMenu() {
        setTimeout(()=>{this.globalService.onScrollToEl.emit('market-menu')});
    }

    xsChange() {
        this.xs = !this.xs;
    }

    changeFilter(parameter) {
        delete this.page;
        this.parametersService.filterToUrl(parameter);
        this.navigate();
        this.fetchProducts();
        this.fetchActive();
    }


    clearFilter() {
        this.xs = false;
        delete this.page;
        this.parametersService.clearFilterData();
        this.navigate();
        this.fetchParameters();
        this.fetchActive();
    }

    applyFilter() {
        this.xs = false;
        this.navigate();
        this.fetchProducts();
        this.fetchActive();
    }

    changeSort(e) {
        this.navigate();
        this.fetchProducts();
    }

    changePage(page) {
        this.page = page;
        this.navigate();
        this.fetchProducts();
        this.scrollToMenu();
    }

    ngOnInit() {
        //console.log('инит каталога');
        this.route.data.subscribe((data: any) => {
            this.catalogMode = data['catalogMode'] || false;
        });
        this.route.paramMap.switchMap((pm: any) => {
            this.categoryName = pm.params.categoryName;
            return this.parameterProvider.getList(pm.params.categoryName)
        }).subscribe((response: any) => {
            //console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectCategory();
            this.selectParameters();
            this.fetchProducts();
            this.fetchActive();

            this.scrollToMenu();

        });

        this.route.queryParamMap.subscribe((qpm: any) => {
            //console.log('qpm');
            this.activeSort = qpm.params.sort;
            this.page = qpm.params.page;

            this.params = this.excludeParams(qpm.params);
            this.sortingService.change(this.activeSort);
        });

    }

    postPosition(product: Product) {
        let position: Position = <Position>{
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
            //color: new Color() //пока затычка
        };
        this.contractProvider.postPosition(position).subscribe(
            response => {
                //console.log(response);
                this.navbarService.updateCartData(response)
            });
    }

    private excludeParams(params) {
        let p: any = Object.assign({}, params);
        delete p.page;
        delete p.sort;
        delete p.categoryName;
        return p;
    }

    private selectParameters() {
        if (this.parameters)
            this.parameters.map(parameter => this.parametersService.urlToParameter(parameter, this.params));
    }

    private selectCategory() {
        this.categoryProvider.list().subscribe((response: Category[]) => {
            this.category = response.find(cat => cat.url == this.categoryName);
            if (!this.category)
                this.serverResponseService.setNotFound();
            else
                this.seoService.setMeta({
                    title: this.category.title,
                    description: `${this.category.description}`,
                    image: `/photos/${this.category._id}/${this.category.cover}`,
                })
        });
    }

    private setActiveParameters(activeParameters) {
        if (this.parameters)
            this.parameters.forEach(parameter => {
                parameter.values.forEach(v => {
                    v.active = activeParameters.includes(v._id)
                })
            })
    }

    private getSelectedParameters() {
        if (this.parameters) {
            let params = this.parameters.map(x => Object.assign({}, x)).filter((p: Parameter) => {
                let selected = p.values.find(v => v.selected);
                return p.to || p.from || !!selected;
            });
            params.forEach((p: Parameter, i, array) => {
                if (p.values)
                    p.values = p.values.filter(v => v.selected && v.nomatter != true);
                if (p.behavior != 'input' && p.values.length == 0)
                    array.splice(i, 1);

            });
            return params;
        }
    }

    private fetchActive() {
        let query = {
            parameters: this.getSelectedParameters(),
            categoryId: this.categoryId
        };
        this.parameterProvider.getActive(query).subscribe((resp: any) => {
            //console.log('получены активные параметры');
            if (resp.notFoundUrl)
                this.serverResponseService.setNotFound();
            else
                this.setActiveParameters(resp);
        })
    }

    private fetchParameters() {
        this.parameterProvider.getList(this.categoryName).subscribe((response: any) => {
            //console.log('получены параметры');
            if (response.notFoundUrl)
                this.serverResponseService.setNotFound();
            else {
                this.categoryId = response.catid;
                this.parameters = response.parameters;
                this.selectParameters();
                this.fetchProducts();
                this.fetchActive();
            }
        });
    }

    private fetchProducts() {
        this.ready = false;
        let query = {
            parameters: this.getSelectedParameters(),
            sort: this.sortingService.getSearch(),
            catalogMode: this.catalogMode,
            categoryId: this.categoryId,
            page: this.page
        };
        this.productProvider.list(query).subscribe(resp => {
            //console.log('получены продукты');
            if (resp.notFoundUrl) {
                this.serverResponseService.setNotFound()
            }
            else {
                this.products = resp.products;
                this.noresults = resp.products.length == 0;
                if (!this.catalogMode)
                    this.pagerComponent.setup(resp.count, this.page);
                this.ready = true;

            }

        })
    }

    private navigate() {
        let queryParams = Object.assign({}, {page: this.page}, this.sortingService.getUrl(), this.parametersService.getFilterData());
        this.router.navigate([this.categoryName], {queryParams});
    }
}


