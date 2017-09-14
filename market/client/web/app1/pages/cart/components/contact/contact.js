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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBTXBDLElBQWEsb0JBQW9CLEdBQWpDO0lBUUk7UUFQQSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBRzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FFSixDQUFBO0FBWEc7SUFEQyxNQUFNLEVBQUU7O3NEQUMrQjtBQU4vQixvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFDO1FBQ2xDLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7O0dBQ1csb0JBQW9CLENBaUJoQztTQWpCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJhY3R9IGZyb20gXCJtb2RlbHMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtEZWxpdmVyeU1vZGV9IGZyb20gXCJtb2RlbHNcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhcnQtY29udGFjdCcsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ2Zvcm0taG9yaXpvbnRhbCd9LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjb250YWN0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDYXJ0Q29udGFjdCB7XHJcbiAgICBzaG93RXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnRyYWN0OiBDb250cmFjdCA9IG5ldyBDb250cmFjdCgpO1xyXG4gICAgZGVsaXZlcnlNb2RlID0gRGVsaXZlcnlNb2RlO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbnRyYWN0PigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QuZGVsaXZlcnkgPSBEZWxpdmVyeU1vZGUuQXV0bztcclxuICAgICAgICB0aGlzLmNvbnRyYWN0LnNlbmRTbXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLm9uU3VibWl0LmVtaXQodGhpcy5jb250cmFjdCk7XHJcbiAgICB9XHJcblxyXG59Il19