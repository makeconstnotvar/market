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
import { NavbarService } from "services";
let NavbarControl = class NavbarControl {
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
NavbarControl = __decorate([
    Component({
        selector: 'market-navbar',
        host: { 'class': 'navbar' },
        templateUrl: 'navbar.html'
    }),
    __metadata("design:paramtypes", [NavbarService])
], NavbarControl);
export { NavbarControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQU92QyxJQUFhLGFBQWEsR0FBMUI7SUFvQ0ksWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFuQ3hDLGFBQVEsR0FBYTtZQUN6QixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxHQUFHO2FBQ1o7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLFdBQVc7YUFDcEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxTQUFTO2FBQ2xCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLEtBQUssRUFBRSxhQUFhO2dCQUNwQixJQUFJLEVBQUUsV0FBVzthQUNwQjtTQUNKLENBQUM7UUFLRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFDaEMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FFSixDQUFBO0FBM0NZLGFBQWE7SUFMekIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQztRQUN6QixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO3FDQXFDcUMsYUFBYTtHQXBDdkMsYUFBYSxDQTJDekI7U0EzQ1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NldHRpbmdzLENhcnREYXRhfSBmcm9tIFwibW9kZWxzXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcInNlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFya2V0LW5hdmJhcicsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ25hdmJhcid9LFxyXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbnRyb2wge1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgYnJhbmQ6IHtcclxuICAgICAgICAgICAgaWNvbjogJ2ZhLXNob3BwaW5nLWJhZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdHZXRZb3VyQmFnLnJ1JyxcclxuICAgICAgICAgICAgbGFiZWw6ICfQnNC+0YHQutCy0LAnLFxyXG4gICAgICAgICAgICBsaW5rOiAnLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGl2ZXJ5OiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYS10cnVjaycsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQlNC+0YHRgtCw0LLQutCwJyxcclxuICAgICAgICAgICAgbGFiZWw6ICfQsdC10YHQv9C70LDRgtC90L4nLFxyXG4gICAgICAgICAgICBsaW5rOiAnL2RlbGl2ZXJ5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvY2tzOiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYS10YWcnLFxyXG4gICAgICAgICAgICBuYW1lOiAn0JDQutGG0LjQuCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAn0L/QvtC70L3Ri9C5INGB0L/QuNGB0L7QuicsXHJcbiAgICAgICAgICAgIGxpbms6ICcvc3RvY2tzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgICBpY29uOiAnZmEtc2hvcHBpbmctY2FydCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQmtC+0YDQt9C40L3QsCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAn0L/QvtC60LAg0YfRgtC+INC/0YPRgdGC0LDRjycsXHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FydCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBob25lOiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYS1waG9uZS1zcXVhcmUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnKzcoOTI1KTQ3Ny01MDAxJyxcclxuICAgICAgICAgICAgbGFiZWw6ICcwOTowMC0yMTowMCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvY29udGFjdHMnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YTogQ2FydERhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IHtzdW06MCxjb3VudDowfTtcclxuICAgICAgICBuYXZiYXJTZXJ2aWNlLm9ic2VydmFibGUuc3Vic2NyaWJlKGNhcnREYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IGNhcnREYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19