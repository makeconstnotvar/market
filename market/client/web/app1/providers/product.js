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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBSzdDLElBQWEsZUFBZSxHQUE1QjtJQUNJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFHRCxJQUFJLENBQUMsS0FBSztRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRyxLQUFLLENBQUM7YUFDN0MsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBSSxDQUFDLEVBQVU7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7YUFDL0MsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFhLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUM7YUFDNUMsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFlLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0NBQ0osQ0FBQTtBQTFCWSxlQUFlO0lBRDNCLFVBQVUsRUFBRTtxQ0FFaUIsSUFBSTtHQURyQixlQUFlLENBMEIzQjtTQTFCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcImVudGl0aWVzL3Byb2R1Y3RcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcblxuICAgIH1cblxuXG4gICAgbGlzdChxdWVyeSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9wcm9kdWN0L2xpc3QnLCAgcXVlcnkpXG4gICAgICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmlldyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9wcm9kdWN0L3ZpZXcnLCB7aWQ6IGlkfSlcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpIGFzIFByb2R1Y3RcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNwZWNpYWwoKTogT2JzZXJ2YWJsZTxQcm9kdWN0W10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3Qvc3BlY2lhbCcsIHt9KVxuICAgICAgICAgICAgLm1hcCgocjogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgUHJvZHVjdFtdXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19