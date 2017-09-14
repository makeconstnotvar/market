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
let CategoryProvider = class CategoryProvider {
    constructor(http) {
        this.http = http;
    }
    getTree() {
        return this.http
            .post('/api/category/list', {})
            .map((r) => {
            return r.json();
        });
    }
};
CategoryProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CategoryProvider);
export { CategoryProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFLN0MsSUFBYSxnQkFBZ0IsR0FBN0I7SUFDSSxZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUM7YUFDOUIsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFnQixDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNKLENBQUE7QUFaWSxnQkFBZ0I7SUFENUIsVUFBVSxFQUFFO3FDQUVpQixJQUFJO0dBRHJCLGdCQUFnQixDQVk1QjtTQVpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tIFwibW9kZWxzL2NhdGVnb3J5XCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJlZSgpOiBPYnNlcnZhYmxlPENhdGVnb3J5W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCcvYXBpL2NhdGVnb3J5L2xpc3QnLCB7fSlcclxuICAgICAgICAgICAgLm1hcCgocjogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKSBhcyBDYXRlZ29yeVtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19