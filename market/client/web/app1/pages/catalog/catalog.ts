import {Component, ViewChild} from "@angular/core";
import {Product} from "models/product";
import {ContractProvider, ParameterProvider, ProductProvider} from "providers";
import {ActivatedRoute, Router} from "@angular/router";
import {Parameter, Position} from "models";
import {NavbarService, ParametersService, SortingService} from "services";
import {PagerControl} from "controls/pager/pager";
import {ComponentCatalogFilter} from "./components/filter/filter";
import 'rxjs/add/operator/switchMap'

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
    categoryId: string;
    categoryName: string;
    params: any;
    page: number;
    sort: any;
    activeSort: string;
    xs: boolean = false;

    constructor(private productProvider: ProductProvider,
                private parametersService: ParametersService,
                private parameterProvider: ParameterProvider,
                private contractProvider: ContractProvider,
                private sortingService: SortingService,
                private navbarService: NavbarService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    xsChange() {
        this.xs = !this.xs;
    }

    changeFilter(parameter) {
        delete this.page;

        this.navigate();
        this.fetchProducts();
    }


    clearFilter() {
        delete this.page;
        this.parametersService.clearFilterData();

        this.navigate();
        this.fetchParameters();
    }

    applyFilter() {
        this.xs = false;
        this.navigate();
        this.fetchProducts();
    }

    changeSort(e) {
        this.navigate();
        this.fetchProducts();
    }

    changePage(page) {
        this.page = page;

        this.navigate();
        this.fetchProducts();
    }

    ngOnInit() {
        this.route.paramMap.switchMap((pm: any) => this.parameterProvider.getList(pm.params.categoryName)).subscribe(response => {
            console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectParameters();
            this.fetchProducts();
            this.fetchActive();
        });


        let qpm = this.route.snapshot.queryParamMap as any;
        this.page = qpm.params.page;
        this.activeSort = qpm.sort;
        this.params = this.excludeParams(qpm.params);
        //this.fetchParameters();

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
                console.log(response);
                this.navbarService.updateCartData(response)
            });
    }

    private excludeParams(params) {
        let p = Object.assign({}, params);
        delete p.page;
        delete p.sort;
        delete p.categoryName;
        return p;
    }

    private selectParameters() {
        this.parameters.map(parameter => this.parametersService.urlToParameter(parameter, this.params));
    }

    private setActiveParameters(activeParameters) {
        this.parameters.forEach(parameter => {
            parameter.values.forEach(v => {
                v.active = activeParameters.includes(v._id)
            })
        })
    }

    private getSelectedParameters() {
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

    private fetchActive() {
        let query = {
            parameters: this.getSelectedParameters(),
            categoryId: this.categoryId
        };
        this.parameterProvider.getActive(query).subscribe(resp => {
            console.log('получены активные параметры');
            this.setActiveParameters(resp);
        })
    }

    private fetchParameters() {
        this.parameterProvider.getList(this.categoryName).subscribe(response => {
            console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectParameters();
            this.fetchProducts();
            this.fetchActive();
        });
    }

    private fetchProducts() {
        let query = {
            parameters: this.getSelectedParameters(),
            sort: this.sortingService.getSearch(),
            categoryId: this.categoryId,
            page: this.page
        };
        this.productProvider.list(query).subscribe(resp => {
            console.log('получены продукты');
            this.products = resp.products;
            this.pagerComponent.setup(resp.count, this.page);
        })
    }

    private navigate() {
        let queryParams = Object.assign({}, {page: this.page}, this.sortingService.getUrl(), this.parametersService.getFilterData());
        this.router.navigate([this.categoryName], {queryParams});
    }
}


