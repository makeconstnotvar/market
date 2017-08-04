var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
let ProductProvider = class ProductProvider {
    constructor(http) {
        this.http = http;
    }
    list(filter) {
        return this.http.post('/api/product/list', { filter: filter })
            .map((r) => {
            return r.json();
        });
    }
    view(id) {
        return this.http.post('/api/product/view', { id: id })
            .map((r) => {
            return r.json();
        });
    }
    special() {
        return this.http.post('/api/product/special', {})
            .map((r) => {
            return r.json();
        });
    }
};
ProductProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ProductProvider);
export { ProductProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBSzdDLElBQWEsZUFBZSxHQUE1QjtJQUNJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFHRCxJQUFJLENBQUMsTUFBTTtRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQzthQUN2RCxHQUFHLENBQUMsQ0FBQyxDQUFXO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBVTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQzthQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFXO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQWEsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQzthQUM1QyxHQUFHLENBQUMsQ0FBQyxDQUFXO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQWUsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDSixDQUFBO0FBMUJZLGVBQWU7SUFEM0IsVUFBVSxFQUFFO3FDQUVpQixJQUFJO0dBRHJCLGVBQWUsQ0EwQjNCO1NBMUJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxpc3QoZmlsdGVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvcHJvZHVjdC9saXN0Jywge2ZpbHRlcjogZmlsdGVyfSlcclxuICAgICAgICAgICAgLm1hcCgocjogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvcHJvZHVjdC92aWV3Jywge2lkOiBpZH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgUHJvZHVjdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3Qvc3BlY2lhbCcsIHt9KVxyXG4gICAgICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpIGFzIFByb2R1Y3RbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==