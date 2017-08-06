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
let ParameterProvider = class ParameterProvider {
    constructor(http) {
        this.http = http;
    }
    getList(catUrl) {
        return this.http
            .post('/api/parameters/list', { catUrl: catUrl })
            .map(r => r.json());
    }
    getActive(query) {
        return this.http
            .post('/api/parameters/active', query)
            .map(r => r.json());
    }
};
ParameterProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ParameterProvider);
export { ParameterProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUluQyxJQUFhLGlCQUFpQixHQUE5QjtJQUNJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQUs7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDO2FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFNUIsQ0FBQztDQUVKLENBQUE7QUFsQlksaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTtxQ0FFaUIsSUFBSTtHQURyQixpQkFBaUIsQ0FrQjdCO1NBbEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuXG4gICAgfVxuXG4gICAgZ2V0TGlzdChjYXRVcmw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCgnL2FwaS9wYXJhbWV0ZXJzL2xpc3QnLCB7Y2F0VXJsOiBjYXRVcmx9KVxuICAgICAgICAgICAgLm1hcChyID0+IHIuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRBY3RpdmUocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3QoJy9hcGkvcGFyYW1ldGVycy9hY3RpdmUnLCBxdWVyeSlcbiAgICAgICAgICAgIC5tYXAociA9PiByLmpzb24oKSk7XG5cbiAgICB9XG5cbn0iXX0=