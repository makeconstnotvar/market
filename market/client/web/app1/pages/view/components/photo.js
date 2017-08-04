var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
let ComponentViewPhoto = class ComponentViewPhoto {
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewPhoto.prototype, "productId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewPhoto.prototype, "image", void 0);
ComponentViewPhoto = __decorate([
    Component({
        selector: 'v-photo',
        host: { 'class': 'me-image' },
        template: `
<img *ngIf="image" class="img-responsive" src="{{'/photos/'+productId+ '/l_'+ image}}">
`
    })
], ComponentViewPhoto);
export { ComponentViewPhoto };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaG90by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVMvQyxJQUFhLGtCQUFrQixHQUEvQjtDQU9DLENBQUE7QUFKRztJQURDLEtBQUssRUFBRTs7cURBQ1U7QUFHbEI7SUFEQyxLQUFLLEVBQUU7O2lEQUNNO0FBTkwsa0JBQWtCO0lBUjlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBRW5CLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUM7UUFDekIsUUFBUSxFQUFFOztDQUViO0tBQ0EsQ0FBQztHQUNXLGtCQUFrQixDQU85QjtTQVBZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3YtcGhvdG8nLFxyXG5cclxuICAgIGhvc3Q6eydjbGFzcyc6J21lLWltYWdlJ30sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48aW1nICpuZ0lmPVwiaW1hZ2VcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3snL3Bob3Rvcy8nK3Byb2R1Y3RJZCsgJy9sXycrIGltYWdlfX1cIj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Vmlld1Bob3RvIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbn0iXX0=