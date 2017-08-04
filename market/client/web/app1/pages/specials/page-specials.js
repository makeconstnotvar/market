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
import { CategoryProvider } from "providers/category";
import { ProductProvider } from "providers/product";
import { ContractProvider } from "providers/contract";
import { NavbarService } from "services/navbar";
let PageSpecials = class PageSpecials {
    constructor(categoryProvider, productProvider, contractProvider, navbarService) {
        this.categoryProvider = categoryProvider;
        this.productProvider = productProvider;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
    }
    ngOnInit() {
        this.categoryProvider.getTree().subscribe(response => {
            this.categories = response;
        });
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
PageSpecials = __decorate([
    Component({
        template: `
<jumbotron></jumbotron>
<market-menu [categories]="categories"></market-menu>
<div class="container">
    <div class="row">
        <sp-welcome></sp-welcome>
        <sp-products [products]="products"  (onPostPosition)="postPosition($event)"></sp-products>
        
        <sp-promo></sp-promo>
        <sp-seo></sp-seo>
    </div>
</div>

`
    }),
    __metadata("design:paramtypes", [CategoryProvider,
        ProductProvider,
        ContractProvider,
        NavbarService])
], PageSpecials);
export { PageSpecials };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zcGVjaWFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2Utc3BlY2lhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFHcEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBb0I5QyxJQUFhLFlBQVksR0FBekI7SUFJSSxZQUFvQixnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBSDVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNyQyxRQUFRO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDcEMsUUFBUTtZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUN6QixJQUFJLFFBQVEsR0FBdUI7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ3BCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSztTQUVyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2xELFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztDQUVKLENBQUE7QUF2Q1ksWUFBWTtJQWhCeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0NBYWI7S0FDQSxDQUFDO3FDQUt3QyxnQkFBZ0I7UUFDakIsZUFBZTtRQUNkLGdCQUFnQjtRQUNuQixhQUFhO0dBUHZDLFlBQVksQ0F1Q3hCO1NBdkNZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NhdGVnb3J5UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSBcImVudGl0aWVzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSBcImVudGl0aWVzL2NvbG9yXCI7XHJcbmltcG9ydCB7UG9zaXRpb259IGZyb20gXCJlbnRpdGllcy9wb3NpdGlvblwiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9uYXZiYXJcIjtcclxuaW1wb3J0IHtQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxqdW1ib3Ryb24+PC9qdW1ib3Ryb24+XHJcbjxtYXJrZXQtbWVudSBbY2F0ZWdvcmllc109XCJjYXRlZ29yaWVzXCI+PC9tYXJrZXQtbWVudT5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxzcC13ZWxjb21lPjwvc3Atd2VsY29tZT5cclxuICAgICAgICA8c3AtcHJvZHVjdHMgW3Byb2R1Y3RzXT1cInByb2R1Y3RzXCIgIChvblBvc3RQb3NpdGlvbik9XCJwb3N0UG9zaXRpb24oJGV2ZW50KVwiPjwvc3AtcHJvZHVjdHM+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHNwLXByb21vPjwvc3AtcHJvbW8+XHJcbiAgICAgICAgPHNwLXNlbz48L3NwLXNlbz5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VTcGVjaWFscyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5UHJvdmlkZXI6IENhdGVnb3J5UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250cmFjdFByb3ZpZGVyOiBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlQcm92aWRlci5nZXRUcmVlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXNwb25zZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RQcm92aWRlci5zcGVjaWFsKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RQb3NpdGlvbihwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IDxQb3NpdGlvbj57XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QuX2lkLFxyXG4gICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgIHN1bTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgLy8gY29sb3I6IG5ldyBDb2xvcigpIC8v0L/QvtC60LAg0LfQsNGC0YvRh9C60LBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wb3N0UG9zaXRpb24ocG9zaXRpb24pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19