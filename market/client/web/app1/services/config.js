var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
let ConfigService = class ConfigService {
    set config(newConfig) {
        this._config = newConfig;
    }
    ;
    get config() {
        return Object.assign({}, this._config);
    }
    ;
};
ConfigService = __decorate([
    Injectable()
], ConfigService);
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekMsSUFBYSxhQUFhLEdBQTFCO0lBSUksSUFBVyxNQUFNLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFXLE1BQU07UUFDYixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFBQSxDQUFDO0NBU0wsQ0FBQTtBQW5CWSxhQUFhO0lBRHpCLFVBQVUsRUFBRTtHQUNBLGFBQWEsQ0FtQnpCO1NBbkJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiZW50aXRpZXMvY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWc6IENvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgc2V0IGNvbmZpZyhuZXdDb25maWc6IENvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IG5ld0NvbmZpZztcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBjb25maWcoKTogQ29uZmlnIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnKVxyXG4gICAgfTtcclxuXHJcbiAgICAvKiBwcml2YXRlIGNvbmZpZ09ic2VydmVyID0gbmV3IFN1YmplY3Q8Q29uZmlnPigpO1xyXG5cclxuICAgICBwdWJsaWMgb2JzZXJ2YWJsZSA9IHRoaXMuY29uZmlnT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgIHB1YmxpYyB1cGRhdGUoY29uZmlnOiBDb25maWcpIHtcclxuICAgICB0aGlzLmNvbmZpZ09ic2VydmVyLm5leHQoY29uZmlnKTtcclxuICAgICB9Ki9cclxufSJdfQ==