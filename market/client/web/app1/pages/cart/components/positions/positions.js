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
import { Contract } from "entities/contract";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBSzNDLElBQWEsc0JBQXNCLEdBQW5DO0lBSkE7UUFTSSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdwQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWExQyxDQUFDO0lBWEcsS0FBSyxDQUFDLEdBQUc7UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUc7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQUc7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQTtBQXRCRztJQURDLEtBQUssRUFBRTs4QkFDRSxRQUFRO3dEQUFDO0FBR25CO0lBREMsTUFBTSxFQUFFOzt1REFDNEI7QUFHckM7SUFEQyxNQUFNLEVBQUU7O3NEQUMyQjtBQUdwQztJQURDLE1BQU0sRUFBRTs7d0RBQzZCO0FBWDdCLHNCQUFzQjtJQUpsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxnQkFBZ0I7S0FDaEMsQ0FBQztHQUNXLHNCQUFzQixDQXdCbEM7U0F4Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb250cmFjdH0gZnJvbSBcImVudGl0aWVzL2NvbnRyYWN0XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJ0LXBvc2l0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc2l0aW9ucy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2FydFBvc2l0aW9ucyB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgY29udHJhY3Q6IENvbnRyYWN0O1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25NaW51cyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25QbHVzID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIG1pbnVzKGlkeCkge1xyXG4gICAgICAgIHRoaXMub25NaW51cy5lbWl0KGlkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGx1cyhpZHgpIHtcclxuICAgICAgICB0aGlzLm9uUGx1cy5lbWl0KGlkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsKGlkeCkge1xyXG4gICAgICAgIHRoaXMub25EZWxldGUuZW1pdChpZHgpO1xyXG4gICAgfVxyXG59Il19