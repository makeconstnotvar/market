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
let ComponentCatalogAlert = class ComponentCatalogAlert {
    constructor() {
        this.onClearFilter = new EventEmitter();
    }
    clearFilter() {
        this.onClearFilter.emit();
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentCatalogAlert.prototype, "onClearFilter", void 0);
ComponentCatalogAlert = __decorate([
    Component({
        selector: 'cat-alert',
        host: { 'class': 'alert alert-info' },
        templateUrl: 'alert.html'
    })
], ComponentCatalogAlert);
export { ComponentCatalogAlert };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNOUQsSUFBYSxxQkFBcUIsR0FBbEM7SUFMQTtRQU9JLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU12QyxDQUFDO0lBSkcsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsQ0FBQztDQUVKLENBQUE7QUFORztJQURDLE1BQU0sRUFBRTs7NERBQzBCO0FBRjFCLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUM7UUFDbkMsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQztHQUNXLHFCQUFxQixDQVFqQztTQVJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhdC1hbGVydCcsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ2FsZXJ0IGFsZXJ0LWluZm8nfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYWxlcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENhdGFsb2dBbGVydCB7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uQ2xlYXJGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY2xlYXJGaWx0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5vbkNsZWFyRmlsdGVyLmVtaXQoKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=