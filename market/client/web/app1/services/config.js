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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekMsSUFBYSxhQUFhLEdBQTFCO0lBSUksSUFBVyxNQUFNLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFXLE1BQU07UUFDYixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFBQSxDQUFDO0NBU0wsQ0FBQTtBQW5CWSxhQUFhO0lBRHpCLFVBQVUsRUFBRTtHQUNBLGFBQWEsQ0FtQnpCO1NBbkJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwibW9kZWxzL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBDb25maWc7XHJcblxyXG4gICAgcHVibGljIHNldCBjb25maWcobmV3Q29uZmlnOiBDb25maWcpIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBuZXdDb25maWc7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IENvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZylcclxuICAgIH07XHJcblxyXG4gICAgLyogcHJpdmF0ZSBjb25maWdPYnNlcnZlciA9IG5ldyBTdWJqZWN0PENvbmZpZz4oKTtcclxuXHJcbiAgICAgcHVibGljIG9ic2VydmFibGUgPSB0aGlzLmNvbmZpZ09ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICBwdWJsaWMgdXBkYXRlKGNvbmZpZzogQ29uZmlnKSB7XHJcbiAgICAgdGhpcy5jb25maWdPYnNlcnZlci5uZXh0KGNvbmZpZyk7XHJcbiAgICAgfSovXHJcbn0iXX0=