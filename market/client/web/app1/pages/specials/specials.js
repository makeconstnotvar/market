var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ProductProvider } from "providers";
import { ContractProvider } from "providers";
import { NavbarService } from "services/navbar";
let SpecialsPage = class SpecialsPage {
    constructor(productProvider, contractProvider, navbarService) {
        this.productProvider = productProvider;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
    }
    ngOnInit() {
        this.productProvider.special().subscribe(response => {
            this.products = response;
        });
    }
    postPosition(product) {
        let position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(response => {
            console.log(response);
            this.navbarService.updateCartData(response);
        });
    }
};
SpecialsPage = __decorate([
    Component({
        selector: 'specials',
        templateUrl: 'specials.html'
    }),
    __metadata("design:paramtypes", [ProductProvider,
        ContractProvider,
        NavbarService])
], SpecialsPage);
export { SpecialsPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVjaWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU85QyxJQUFhLFlBQVksR0FBekI7SUFJSSxZQUNvQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsYUFBNEI7UUFGNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQztJQUVELFFBQVE7UUFFSixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDcEMsUUFBUTtZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUN6QixJQUFJLFFBQVEsR0FBdUI7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ3BCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSztTQUVyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2xELFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztDQUVKLENBQUE7QUFwQ1ksWUFBWTtJQUp4QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDO3FDQU11QyxlQUFlO1FBQ2QsZ0JBQWdCO1FBQ25CLGFBQWE7R0FQdkMsWUFBWSxDQW9DeEI7U0FwQ1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tIFwibW9kZWxzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7Q29udHJhY3RQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge1Bvc2l0aW9ufSBmcm9tIFwibW9kZWxzL3Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL25hdmJhclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcGVjaWFscycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NwZWNpYWxzLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVjaWFsc1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250cmFjdFByb3ZpZGVyOiBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RQcm92aWRlci5zcGVjaWFsKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RQb3NpdGlvbihwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IDxQb3NpdGlvbj57XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QuX2lkLFxyXG4gICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgIHN1bTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgLy8gY29sb3I6IG5ldyBDb2xvcigpIC8v0L/QvtC60LAg0LfQsNGC0YvRh9C60LBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wb3N0UG9zaXRpb24ocG9zaXRpb24pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19