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
import { Contract } from "models/contract";
import { ContractProvider } from "providers";
import { ActivatedRoute } from "@angular/router";
let HistoryPage = class HistoryPage {
    constructor(contractProvider, activatedRoute) {
        this.contractProvider = contractProvider;
        this.activatedRoute = activatedRoute;
        this.contract = new Contract;
        this.activatedRoute.params.subscribe((params) => {
            this.contractProvider.getById(params['contract']).subscribe(response => {
                this.contract = response;
            });
        });
    }
};
HistoryPage = __decorate([
    Component({
        selector: 'cart-history',
        templateUrl: 'history.html'
    }),
    __metadata("design:paramtypes", [ContractProvider,
        ActivatedRoute])
], HistoryPage);
export { HistoryPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQU92RCxJQUFhLFdBQVcsR0FBeEI7SUFHSSxZQUFvQixnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIbEQsYUFBUSxHQUFhLElBQUksUUFBUSxDQUFDO1FBTTlCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWM7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FDSixDQUFBO0FBZFksV0FBVztJQUp2QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQUl3QyxnQkFBZ0I7UUFDbEIsY0FBYztHQUp6QyxXQUFXLENBY3ZCO1NBZFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb250cmFjdH0gZnJvbSBcIm1vZGVscy9jb250cmFjdFwiO1xuaW1wb3J0IHtDb250cmFjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NhcnQtaGlzdG9yeScsXG4gICAgdGVtcGxhdGVVcmw6ICdoaXN0b3J5Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlQYWdlIHtcbiAgICBjb250cmFjdDogQ29udHJhY3QgPSBuZXcgQ29udHJhY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5nZXRCeUlkKHBhcmFtc1snY29udHJhY3QnXSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyYWN0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxufSJdfQ==