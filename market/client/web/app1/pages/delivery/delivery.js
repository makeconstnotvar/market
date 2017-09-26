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
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
let DeliveryPage = class DeliveryPage {
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    toSdekList() {
        this._window.open('http://www.edostavka.ru/contacts/city-list.html');
    }
};
DeliveryPage = __decorate([
    Component({
        selector: 'delivery',
        templateUrl: 'delivery.html',
    }),
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [Object])
], DeliveryPage);
export { DeliveryPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWxpdmVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPbEQsSUFBYSxZQUFZLEdBQXpCO0lBR0ksWUFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2RCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUVKLENBQUE7QUFiWSxZQUFZO0lBTHhCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxlQUFlO0tBRS9CLENBQUM7SUFJZSxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtxQ0FBcUIsTUFBTTtHQUhsRCxZQUFZLENBYXhCO1NBYlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIFBMQVRGT1JNX0lEfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsaXZlcnknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZWxpdmVyeS5odG1sJyxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeVBhZ2Uge1xyXG4gICAgX3dpbmRvdztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCkge1xyXG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9TZGVrTGlzdCgpIHtcclxuICAgICAgICB0aGlzLl93aW5kb3cub3BlbignaHR0cDovL3d3dy5lZG9zdGF2a2EucnUvY29udGFjdHMvY2l0eS1saXN0Lmh0bWwnKTtcclxuICAgIH1cclxuXHJcbn0iXX0=