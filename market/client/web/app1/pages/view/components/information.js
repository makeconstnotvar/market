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
let ComponentViewInformation = class ComponentViewInformation {
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewInformation.prototype, "information", void 0);
ComponentViewInformation = __decorate([
    Component({
        selector: 'v-information',
        host: { 'class': 'me-info col-md-12 col-lg-6' },
        template: `    
<h2>Описание</h2>
<p [innerHTML]="information"></p>
`
    })
], ComponentViewInformation);
export { ComponentViewInformation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVMvQyxJQUFhLHdCQUF3QixHQUFyQztDQUtDLENBQUE7QUFGRztJQURDLEtBQUssRUFBRTs7NkRBQ1k7QUFIWCx3QkFBd0I7SUFScEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFDO1FBQzdDLFFBQVEsRUFBRTs7O0NBR2I7S0FDQSxDQUFDO0dBQ1csd0JBQXdCLENBS3BDO1NBTFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndi1pbmZvcm1hdGlvbicsXHJcbiAgICBob3N0OiB7J2NsYXNzJzogJ21lLWluZm8gY29sLW1kLTEyIGNvbC1sZy02J30sXHJcbiAgICB0ZW1wbGF0ZTogYCAgICBcclxuPGgyPtCe0L/QuNGB0LDQvdC40LU8L2gyPlxyXG48cCBbaW5uZXJIVE1MXT1cImluZm9ybWF0aW9uXCI+PC9wPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRWaWV3SW5mb3JtYXRpb24ge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBpbmZvcm1hdGlvbjogc3RyaW5nO1xyXG5cclxufSJdfQ==