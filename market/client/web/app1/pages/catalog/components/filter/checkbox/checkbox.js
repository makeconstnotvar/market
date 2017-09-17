var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Parameter } from "models/parameter";
let ComponentFilterCheckbox = class ComponentFilterCheckbox {
    constructor() {
        this.parameter = new Parameter();
        this.onChangeFilter = new EventEmitter();
    }
    changeFilter() {
        this.onChangeFilter.emit(this.parameter);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Parameter)
], ComponentFilterCheckbox.prototype, "parameter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ComponentFilterCheckbox.prototype, "onChangeFilter", void 0);
ComponentFilterCheckbox = __decorate([
    Component({
        selector: 'filter-checkbox',
        host: { 'class': 'checkbox d-block' },
        templateUrl: 'checkbox.html'
    })
], ComponentFilterCheckbox);
export { ComponentFilterCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxTQUFTLEVBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQU14RCxJQUFhLHVCQUF1QixHQUFwQztJQUxBO1FBU0ksY0FBUyxHQUFhLElBQUksU0FBUyxFQUFFLENBQUM7UUFHdEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBUW5ELENBQUM7SUFORyxZQUFZO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7Q0FJSixDQUFBO0FBWEc7SUFEQyxLQUFLLEVBQUU7OEJBQ0UsU0FBUzswREFBbUI7QUFHdEM7SUFEQyxNQUFNLEVBQUU7OytEQUNzQztBQVB0Qyx1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUM7UUFDbkMsV0FBVyxFQUFFLGVBQWU7S0FDL0IsQ0FBQztHQUNXLHVCQUF1QixDQWVuQztTQWZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyLCAgUGFyYW1WYWx1ZX0gZnJvbSBcIm1vZGVscy9wYXJhbWV0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbHRlci1jaGVja2JveCcsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ2NoZWNrYm94IGQtYmxvY2snfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZpbHRlckNoZWNrYm94IHtcclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmFtZXRlcjpQYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkNoYW5nZUZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UGFyYW1ldGVyPigpO1xyXG5cclxuICAgIGNoYW5nZUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRmlsdGVyLmVtaXQodGhpcy5wYXJhbWV0ZXIpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19