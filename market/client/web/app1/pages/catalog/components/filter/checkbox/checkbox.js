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
        host: { 'class': 'checkbox' },
        templateUrl: 'checkbox.html'
    })
], ComponentFilterCheckbox);
export { ComponentFilterCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxTQUFTLEVBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQU14RCxJQUFhLHVCQUF1QixHQUFwQztJQUxBO1FBU0ksY0FBUyxHQUFhLElBQUksU0FBUyxFQUFFLENBQUM7UUFHdEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBUW5ELENBQUM7SUFORyxZQUFZO1FBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7Q0FJSixDQUFBO0FBWEc7SUFEQyxLQUFLLEVBQUU7OEJBQ0UsU0FBUzswREFBbUI7QUFHdEM7SUFEQyxNQUFNLEVBQUU7OytEQUNzQztBQVB0Qyx1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDO1FBQzNCLFdBQVcsRUFBRSxlQUFlO0tBQy9CLENBQUM7R0FDVyx1QkFBdUIsQ0FlbkM7U0FmWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhcmFtZXRlciwgIFBhcmFtVmFsdWV9IGZyb20gXCJtb2RlbHMvcGFyYW1ldGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWx0ZXItY2hlY2tib3gnLFxyXG4gICAgaG9zdDogeydjbGFzcyc6ICdjaGVja2JveCd9LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmlsdGVyQ2hlY2tib3gge1xyXG5cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFyYW1ldGVyOlBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uQ2hhbmdlRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYXJhbWV0ZXI+KCk7XHJcblxyXG4gICAgY2hhbmdlRmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGaWx0ZXIuZW1pdCh0aGlzLnBhcmFtZXRlcilcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=