var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from "@angular/core";
import { Contract } from "models/contract";
import { DeliveryMode } from "models";
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
        if (this.contract.phone) {
            this.onSubmit.emit(this.contract);
        }
        else {
            this.showError = true;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3BDLElBQWEsb0JBQW9CLEdBQWpDO0lBUUk7UUFQQSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBRzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUFoQkc7SUFEQyxNQUFNLEVBQUU7O3NEQUMrQjtBQU4vQixvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFDO1FBQ2xDLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7O0dBQ1csb0JBQW9CLENBc0JoQztTQXRCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJhY3R9IGZyb20gXCJtb2RlbHMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtEZWxpdmVyeU1vZGV9IGZyb20gXCJtb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJ0LWNvbnRhY3QnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdmb3JtLWhvcml6b250YWwnfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29udGFjdC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2FydENvbnRhY3Qge1xyXG4gICAgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb250cmFjdDogQ29udHJhY3QgPSBuZXcgQ29udHJhY3QoKTtcclxuICAgIGRlbGl2ZXJ5TW9kZSA9IERlbGl2ZXJ5TW9kZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxDb250cmFjdD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0LmRlbGl2ZXJ5ID0gRGVsaXZlcnlNb2RlLkF1dG87XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5zZW5kU21zID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucGhvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KHRoaXMuY29udHJhY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=