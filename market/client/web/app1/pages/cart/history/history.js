var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Contract } from "entities/contract";
import { ContractProvider } from "providers/contract";
import { ActivatedRoute } from "@angular/router";
let PageHistory = class PageHistory {
    constructor(contractProvider, activatedRoute) {
        this.contractProvider = contractProvider;
        this.activatedRoute = activatedRoute;
        this.contract = new Contract;
        this.activatedRoute.params.subscribe((params) => {
            this.contractProvider.getById(params['productId']).subscribe(response => {
                this.contract = response;
            });
        });
    }
};
PageHistory = __decorate([
    Component({
        templateUrl: 'history.html'
    }),
    __metadata("design:paramtypes", [ContractProvider,
        ActivatedRoute])
], PageHistory);
export { PageHistory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGNBQWMsRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBTXZELElBQWEsV0FBVyxHQUF4QjtJQUdJLFlBQW9CLGdCQUFpQyxFQUNqQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUhsRCxhQUFRLEdBQWEsSUFBSSxRQUFRLENBQUM7UUFNOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYztZQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUNKLENBQUE7QUFkWSxXQUFXO0lBSHZCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBSXVDLGdCQUFnQjtRQUNqQixjQUFjO0dBSnpDLFdBQVcsQ0FjdkI7U0FkWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJhY3R9IGZyb20gXCJlbnRpdGllcy9jb250cmFjdFwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hpc3RvcnkuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIaXN0b3J5IHtcclxuICAgIGNvbnRyYWN0OiBDb250cmFjdCA9IG5ldyBDb250cmFjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6Q29udHJhY3RQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLmdldEJ5SWQocGFyYW1zWydwcm9kdWN0SWQnXSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJhY3QgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufSJdfQ==