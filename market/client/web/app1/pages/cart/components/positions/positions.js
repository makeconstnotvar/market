var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contract } from "models/contract";
let ComponentCartPositions = class ComponentCartPositions {
    constructor() {
        this.onMinus = new EventEmitter();
        this.onPlus = new EventEmitter();
        this.onDelete = new EventEmitter();
    }
    minus(idx) {
        this.onMinus.emit(idx);
    }
    plus(idx) {
        this.onPlus.emit(idx);
    }
    del(idx) {
        this.onDelete.emit(idx);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Contract)
], ComponentCartPositions.prototype, "contract", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCartPositions.prototype, "onMinus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCartPositions.prototype, "onPlus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCartPositions.prototype, "onDelete", void 0);
ComponentCartPositions = __decorate([
    Component({
        selector: 'cart-positions',
        templateUrl: 'positions.html'
    })
], ComponentCartPositions);
export { ComponentCartPositions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBS3pDLElBQWEsc0JBQXNCLEdBQW5DO0lBSkE7UUFTSSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdwQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWExQyxDQUFDO0lBWEcsS0FBSyxDQUFDLEdBQUc7UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUc7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQUc7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQTtBQXRCRztJQURDLEtBQUssRUFBRTs4QkFDRSxRQUFRO3dEQUFDO0FBR25CO0lBREMsTUFBTSxFQUFFOzt1REFDNEI7QUFHckM7SUFEQyxNQUFNLEVBQUU7O3NEQUMyQjtBQUdwQztJQURDLE1BQU0sRUFBRTs7d0RBQzZCO0FBWDdCLHNCQUFzQjtJQUpsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxnQkFBZ0I7S0FDaEMsQ0FBQztHQUNXLHNCQUFzQixDQXdCbEM7U0F4Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb250cmFjdH0gZnJvbSBcIm1vZGVscy9jb250cmFjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FydC1wb3NpdGlvbnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwb3NpdGlvbnMuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENhcnRQb3NpdGlvbnMge1xyXG4gICAgQElucHV0KClcclxuICAgIGNvbnRyYWN0OiBDb250cmFjdDtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uTWludXMgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uUGx1cyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBtaW51cyhpZHgpIHtcclxuICAgICAgICB0aGlzLm9uTWludXMuZW1pdChpZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsdXMoaWR4KSB7XHJcbiAgICAgICAgdGhpcy5vblBsdXMuZW1pdChpZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbChpZHgpIHtcclxuICAgICAgICB0aGlzLm9uRGVsZXRlLmVtaXQoaWR4KTtcclxuICAgIH1cclxufSJdfQ==