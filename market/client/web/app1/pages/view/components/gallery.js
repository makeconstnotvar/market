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
let ComponentViewGallery = class ComponentViewGallery {
    constructor() {
        this.onImageSelect = new EventEmitter();
    }
    imageSelect(i) {
        this.onImageSelect.emit(this.images[i]);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ComponentViewGallery.prototype, "images", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewGallery.prototype, "productId", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentViewGallery.prototype, "onImageSelect", void 0);
ComponentViewGallery = __decorate([
    Component({
        selector: 'v-gallery',
        host: { 'class': 'me-screens col-xs-12' },
        template: `
<table>
    <tr>
        <td *ngFor="let image of images; let i=index;">
            <a class="me-link" (click)="imageSelect(i)" [ngClass]="{'mm-active':selected==i}">
                <img class="img-responsive" src="{{'/photos/'+productId+ '/m_'+  image}}">
            </a>
        </td>
    </tr>
</table>
`
    })
], ComponentViewGallery);
export { ComponentViewGallery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWlCckUsSUFBYSxvQkFBb0IsR0FBakM7SUFoQkE7UUEyQkksa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBSy9DLENBQUM7SUFIRyxXQUFXLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0osQ0FBQTtBQVhHO0lBREMsS0FBSyxFQUFFOztvREFDUztBQUdqQjtJQURDLEtBQUssRUFBRTs7dURBQ1U7QUFHbEI7SUFEQyxNQUFNLEVBQUU7OzJEQUNrQztBQVhsQyxvQkFBb0I7SUFoQmhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBRXJCLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBQztRQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Q0FVYjtLQUNBLENBQUM7R0FDVyxvQkFBb0IsQ0FnQmhDO1NBaEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2LWdhbGxlcnknLFxyXG5cclxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnbWUtc2NyZWVucyBjb2wteHMtMTInfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjx0YWJsZT5cclxuICAgIDx0cj5cclxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGltYWdlIG9mIGltYWdlczsgbGV0IGk9aW5kZXg7XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibWUtbGlua1wiIChjbGljayk9XCJpbWFnZVNlbGVjdChpKVwiIFtuZ0NsYXNzXT1cInsnbW0tYWN0aXZlJzpzZWxlY3RlZD09aX1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7Jy9waG90b3MvJytwcm9kdWN0SWQrICcvbV8nKyAgaW1hZ2V9fVwiPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbjwvdGFibGU+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFZpZXdHYWxsZXJ5IHtcclxuXHJcbiAgICBzZWxlY3RlZDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBpbWFnZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uSW1hZ2VTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBpbWFnZVNlbGVjdChpKSB7XHJcbiAgICAgICAgdGhpcy5vbkltYWdlU2VsZWN0LmVtaXQodGhpcy5pbWFnZXNbaV0pO1xyXG4gICAgfVxyXG59Il19