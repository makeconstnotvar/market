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
import { NavbarService } from "services/navbar";
let NavbarComponent = class NavbarComponent {
    constructor(navbarService) {
        this.navbarService = navbarService;
        this.settings = {
            brand: {
                icon: 'fa-shopping-bag',
                name: 'GetYourBag.ru',
                label: 'Москва',
                link: '/'
            },
            delivery: {
                icon: 'fa-truck',
                name: 'Доставка',
                label: 'бесплатно',
                link: '/delivery'
            },
            stocks: {
                icon: 'fa-tag',
                name: 'Акции',
                label: 'полный список',
                link: '/stocks'
            },
            cart: {
                icon: 'fa-shopping-cart',
                name: 'Корзина',
                label: 'пока что пустая',
                link: '/cart'
            },
            phone: {
                icon: 'fa-phone-square',
                name: '+7(925)477-5001',
                label: '09:00-21:00',
                link: '/contacts'
            },
        };
        this.cartData = { sum: 0, count: 0 };
        navbarService.observable.subscribe(cartData => {
            this.cartData = cartData;
        });
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'market-navbar',
        host: { 'class': 'navbar' },
        templateUrl: 'navbar.html'
    }),
    __metadata("design:paramtypes", [NavbarService])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTTlDLElBQWEsZUFBZSxHQUE1QjtJQW9DSSxZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQW5DeEMsYUFBUSxHQUFhO1lBQ3pCLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsZUFBZTtnQkFDckIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLEdBQUc7YUFDWjtZQUNELFFBQVEsRUFBRTtnQkFDTixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLFNBQVM7YUFDbEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLE9BQU87YUFDaEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2FBQ3BCO1NBQ0osQ0FBQztRQUtFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUNoQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUVKLENBQUE7QUEzQ1ksZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFDO1FBQ3pCLFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7cUNBcUNxQyxhQUFhO0dBcEN2QyxlQUFlLENBMkMzQjtTQTNDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U2V0dGluZ3N9IGZyb20gXCJlbnRpdGllcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0NhcnREYXRhfSBmcm9tIFwiZW50aXRpZXMvY2FydFwiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9uYXZiYXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hcmtldC1uYXZiYXInLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICduYXZiYXInfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgYnJhbmQ6IHtcclxuICAgICAgICAgICAgaWNvbjogJ2ZhLXNob3BwaW5nLWJhZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZXRZb3VyQmFnLnJ1JyxcclxuICAgICAgICAgICAgbGFiZWw6ICfQnNC+0YHQutCy0LAnLFxyXG4gICAgICAgICAgICBsaW5rOiAnLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGl2ZXJ5OiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYS10cnVjaycsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQlNC+0YHRgtCw0LLQutCwJyxcclxuICAgICAgICAgICAgbGFiZWw6ICfQsdC10YHQv9C70LDRgtC90L4nLFxyXG4gICAgICAgICAgICBsaW5rOiAnL2RlbGl2ZXJ5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvY2tzOiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYS10YWcnLFxyXG4gICAgICAgICAgICBuYW1lOiAn0JDQutGG0LjQuCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAn0L/QvtC70L3Ri9C5INGB0L/QuNGB0L7QuicsXHJcbiAgICAgICAgICAgIGxpbms6ICcvc3RvY2tzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgICBpY29uOiAnZmEtc2hvcHBpbmctY2FydCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQmtC+0YDQt9C40L3QsCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAn0L/QvtC60LAg0YfRgtC+INC/0YPRgdGC0LDRjycsXHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBob25lOiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYS1waG9uZS1zcXVhcmUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnKzcoOTI1KTQ3Ny01MDAxJyxcclxuICAgICAgICAgICAgbGFiZWw6ICcwOTowMC0yMTowMCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvY29udGFjdHMnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IHtzdW06MCxjb3VudDowfTtcclxuICAgICAgICBuYXZiYXJTZXJ2aWNlLm9ic2VydmFibGUuc3Vic2NyaWJlKGNhcnREYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IGNhcnREYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19