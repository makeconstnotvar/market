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
    list(query) {
        return this.http.post('/api/product/list', query)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBSzdDLElBQWEsZUFBZSxHQUE1QjtJQUNJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFHRCxJQUFJLENBQUMsS0FBSztRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRyxLQUFLLENBQUM7YUFDN0MsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBSSxDQUFDLEVBQVU7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7YUFDL0MsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFhLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUM7YUFDNUMsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFlLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0NBQ0osQ0FBQTtBQTFCWSxlQUFlO0lBRDNCLFVBQVUsRUFBRTtxQ0FFaUIsSUFBSTtHQURyQixlQUFlLENBMEIzQjtTQTFCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbGlzdChxdWVyeSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3QvbGlzdCcsICBxdWVyeSlcclxuICAgICAgICAgICAgLm1hcCgocjogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvcHJvZHVjdC92aWV3Jywge2lkOiBpZH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgUHJvZHVjdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3Qvc3BlY2lhbCcsIHt9KVxyXG4gICAgICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpIGFzIFByb2R1Y3RbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==