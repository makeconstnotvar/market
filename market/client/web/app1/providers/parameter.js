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
    getActive(filter) {
        return this.http
            .post('/api/parameters/active', filter)
            .map(r => r.json());
    }
};
ParameterProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ParameterProvider);
export { ParameterProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUluQyxJQUFhLGlCQUFpQixHQUE5QjtJQUNJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQU07UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDO2FBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFNUIsQ0FBQztDQUVKLENBQUE7QUFsQlksaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTtxQ0FFaUIsSUFBSTtHQURyQixpQkFBaUIsQ0FrQjdCO1NBbEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0KGNhdFVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnL2FwaS9wYXJhbWV0ZXJzL2xpc3QnLCB7Y2F0VXJsOiBjYXRVcmx9KVxyXG4gICAgICAgICAgICAubWFwKHIgPT4gci5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZShmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCcvYXBpL3BhcmFtZXRlcnMvYWN0aXZlJywgZmlsdGVyKVxyXG4gICAgICAgICAgICAubWFwKHIgPT4gci5qc29uKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=