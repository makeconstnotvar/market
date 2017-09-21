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
        templateUrl: 'delivery.html',
    }),
    __param(0, Inject('Window')),
    __metadata("design:paramtypes", [Object])
], DeliveryPage);
export { DeliveryPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWxpdmVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU1oRCxJQUFhLFlBQVksR0FBekI7SUFHSSxZQUE4QixNQUFNO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBRUosQ0FBQTtBQVhZLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1AsV0FBVyxFQUFFLGVBQWU7S0FFL0IsQ0FBQztJQUllLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztHQUhwQixZQUFZLENBV3hCO1NBWFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnZGVsaXZlcnkuaHRtbCcsXG5cbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlQYWdlIHtcbiAgICB3aW5kb3c7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdXaW5kb3cnKSB3aW5kb3cpIHtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgdG9TZGVrTGlzdCgpIHtcbiAgICAgICAgdGhpcy53aW5kb3cub3BlbignaHR0cDovL3d3dy5lZG9zdGF2a2EucnUvY29udGFjdHMvY2l0eS1saXN0Lmh0bWwnKTtcbiAgICB9XG5cbn0iXX0=