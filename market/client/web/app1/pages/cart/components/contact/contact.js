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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBTXBDLElBQWEsb0JBQW9CLEdBQWpDO0lBUUk7UUFQQSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBRzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FFSixDQUFBO0FBWEc7SUFEQyxNQUFNLEVBQUU7O3NEQUMrQjtBQU4vQixvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFDO1FBQ2xDLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7O0dBQ1csb0JBQW9CLENBaUJoQztTQWpCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnRyYWN0fSBmcm9tIFwibW9kZWxzL2NvbnRyYWN0XCI7XG5pbXBvcnQge0RlbGl2ZXJ5TW9kZX0gZnJvbSBcIm1vZGVsc1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjYXJ0LWNvbnRhY3QnLFxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnZm9ybS1ob3Jpem9udGFsJ30sXG4gICAgdGVtcGxhdGVVcmw6ICdjb250YWN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENhcnRDb250YWN0IHtcbiAgICBzaG93RXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb250cmFjdDogQ29udHJhY3QgPSBuZXcgQ29udHJhY3QoKTtcbiAgICBkZWxpdmVyeU1vZGUgPSBEZWxpdmVyeU1vZGU7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29udHJhY3Q+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250cmFjdC5kZWxpdmVyeSA9IERlbGl2ZXJ5TW9kZS5BdXRvO1xuICAgICAgICB0aGlzLmNvbnRyYWN0LnNlbmRTbXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KHRoaXMuY29udHJhY3QpO1xuICAgIH1cblxufSJdfQ==