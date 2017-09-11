var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from "@angular/core";
import { Contract } from "models/contract";
import { DeliveryMode } from "models/delivery";
let ComponentCartContact = class ComponentCartContact {
    constructor() {
        this.showError = false;
        this.contract = new Contract();
        this.deliveryMode = DeliveryMode;
        this.onSubmit = new EventEmitter();
        this.contract.delivery = DeliveryMode.Auto;
        this.contract.sendSms = true;
    }
    submit() {
        this.onSubmit.emit(this.contract);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCartContact.prototype, "onSubmit", void 0);
ComponentCartContact = __decorate([
    Component({
        selector: 'cart-contact',
        host: { 'class': 'form-horizontal' },
        templateUrl: 'contact.html'
    }),
    __metadata("design:paramtypes", [])
], ComponentCartContact);
export { ComponentCartContact };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFNN0MsSUFBYSxvQkFBb0IsR0FBakM7SUFRSTtRQVBBLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDcEMsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFHNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFHcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUVKLENBQUE7QUFYRztJQURDLE1BQU0sRUFBRTs7c0RBQytCO0FBTi9CLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUM7UUFDbEMsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQzs7R0FDVyxvQkFBb0IsQ0FpQmhDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb250cmFjdH0gZnJvbSBcIm1vZGVscy9jb250cmFjdFwiO1xyXG5pbXBvcnQge0RlbGl2ZXJ5TW9kZX0gZnJvbSBcIm1vZGVscy9kZWxpdmVyeVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FydC1jb250YWN0JyxcclxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnZm9ybS1ob3Jpem9udGFsJ30sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENhcnRDb250YWN0IHtcclxuICAgIHNob3dFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29udHJhY3Q6IENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KCk7XHJcbiAgICBkZWxpdmVyeU1vZGUgPSBEZWxpdmVyeU1vZGU7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29udHJhY3Q+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5kZWxpdmVyeSA9IERlbGl2ZXJ5TW9kZS5BdXRvO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3Quc2VuZFNtcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMub25TdWJtaXQuZW1pdCh0aGlzLmNvbnRyYWN0KTtcclxuICAgIH1cclxuXHJcbn0iXX0=