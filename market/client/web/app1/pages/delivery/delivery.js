var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from "@angular/core";
let DeliveryPage = class DeliveryPage {
    constructor(window) {
        this.window = window;
    }
    toSdekList() {
        this.window.open('http://www.edostavka.ru/contacts/city-list.html');
    }
};
DeliveryPage = __decorate([
    Component({
        selector: 'delivery',
        templateUrl: 'delivery.html',
    }),
    __param(0, Inject('Window')),
    __metadata("design:paramtypes", [Object])
], DeliveryPage);
export { DeliveryPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWxpdmVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU9oRCxJQUFhLFlBQVksR0FBekI7SUFHSSxZQUE4QixNQUFNO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBRUosQ0FBQTtBQVhZLFlBQVk7SUFMeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGVBQWU7S0FFL0IsQ0FBQztJQUllLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztHQUhwQixZQUFZLENBV3hCO1NBWFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsaXZlcnknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZWxpdmVyeS5odG1sJyxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeVBhZ2Uge1xyXG4gICAgd2luZG93O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1dpbmRvdycpIHdpbmRvdykge1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIHRvU2Rla0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy53aW5kb3cub3BlbignaHR0cDovL3d3dy5lZG9zdGF2a2EucnUvY29udGFjdHMvY2l0eS1saXN0Lmh0bWwnKTtcclxuICAgIH1cclxuXHJcbn0iXX0=