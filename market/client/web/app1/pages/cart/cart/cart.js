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
import { CartMode } from "../components/mode";
import { NavbarService } from "services/navbar";
let PageCart = class PageCart {
    constructor(contractProvider, navbarService) {
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.history = [];
        this.cartMode = CartMode;
        this.contract = new Contract;
        this.pageMode = CartMode.Empty;
        this.showHistory = false;
        this.showError = false;
        this.contractProvider.getCart().subscribe(response => {
            this.contract = response.current;
            this.history = response.history;
            this.showHistory = this.history.length > 0;
            this.contract.final = this.getFinal(this.contract.positions);
            if (this.contract.positions && this.contract.positions.length > 0)
                this.pageMode = CartMode.Form;
            console.log(this.showHistory);
        });
    }
    submit(contract) {
        this.contract = Object.assign(this.contract, contract);
        if (this.contract.phone) {
            this.contractProvider.placeContract(this.contract).subscribe(response => {
                this.pageMode = CartMode.Success;
                this.history.unshift(response);
                this.navbarService.updateCartData({ sum: 0, count: 0 });
            });
        }
        else {
            this.showError = true;
        }
    }
    del(idx) {
        this.contract.positions.splice(idx, 1);
        if (this.contract.positions.length == 0) {
            this.pageMode = CartMode.Empty;
        }
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(response => {
            this.navbarService.updateCartData(response);
        });
    }
    minus(idx) {
        if (this.contract.positions[idx].count > 1) {
            this.contract.positions[idx].count--;
            let product = this.contract.positions[idx].product;
            this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
            this.contract.final = this.getFinal(this.contract.positions);
            this.contractProvider.put(this.contract).subscribe(response => {
                this.navbarService.updateCartData(response);
            });
        }
    }
    plus(idx) {
        this.contract.positions[idx].count++;
        let product = this.contract.positions[idx].product;
        this.contract.positions[idx].sum = product.price * this.contract.positions[idx].count;
        this.contract.final = this.getFinal(this.contract.positions);
        this.contractProvider.put(this.contract).subscribe(response => {
            this.navbarService.updateCartData(response);
        });
    }
    getFinal(positions) {
        let sum = 0;
        if (positions)
            positions.forEach(position => {
                sum += position.sum;
            });
        return sum;
    }
};
PageCart = __decorate([
    Component({
        templateUrl: 'cart.html',
    }),
    __metadata("design:paramtypes", [ContractProvider,
        NavbarService])
], PageCart);
export { PageCart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUs5QyxJQUFhLFFBQVEsR0FBckI7SUFRSSxZQUFvQixnQkFBa0MsRUFDbEMsYUFBNEI7UUFENUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVJoRCxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsYUFBUSxHQUFhLElBQUksUUFBUSxDQUFDO1FBQ2xDLGFBQVEsR0FBYSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3BDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFJdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBRztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQUc7UUFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFrQixDQUFDO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVE7Z0JBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRztRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQWtCLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFRCxRQUFRLENBQUMsU0FBUztRQUNkLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNWLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTtnQkFDdEIsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKLENBQUE7QUE3RVksUUFBUTtJQUhwQixTQUFTLENBQUM7UUFDUCxXQUFXLEVBQUUsV0FBVztLQUMzQixDQUFDO3FDQVN3QyxnQkFBZ0I7UUFDbkIsYUFBYTtHQVR2QyxRQUFRLENBNkVwQjtTQTdFWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJhY3R9IGZyb20gXCJlbnRpdGllcy9jb250cmFjdFwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtDYXJ0TW9kZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kZVwiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9uYXZiYXJcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnY2FydC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VDYXJ0IHtcclxuICAgIGhpc3Rvcnk6IGFueVtdID0gW107XHJcbiAgICBjYXJ0TW9kZSA9IENhcnRNb2RlO1xyXG4gICAgY29udHJhY3Q6IENvbnRyYWN0ID0gbmV3IENvbnRyYWN0O1xyXG4gICAgcGFnZU1vZGU6IENhcnRNb2RlID0gQ2FydE1vZGUuRW1wdHk7XHJcbiAgICBzaG93SGlzdG9yeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cmFjdFByb3ZpZGVyOiBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLmdldENhcnQoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0ID0gcmVzcG9uc2UuY3VycmVudDtcclxuICAgICAgICAgICAgdGhpcy5oaXN0b3J5ID0gcmVzcG9uc2UuaGlzdG9yeTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGlzdG9yeSA9IHRoaXMuaGlzdG9yeS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LmZpbmFsID0gdGhpcy5nZXRGaW5hbCh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyAmJiB0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTW9kZSA9IENhcnRNb2RlLkZvcm07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0hpc3RvcnkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoY29udHJhY3QpIHtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0ID0gT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRyYWN0LCBjb250cmFjdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucGhvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLnBsYWNlQ29udHJhY3QodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU1vZGUgPSBDYXJ0TW9kZS5TdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5LnVuc2hpZnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHtzdW06IDAsIGNvdW50OiAwfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWwoaWR4KSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5wb3NpdGlvbnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucG9zaXRpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU1vZGUgPSBDYXJ0TW9kZS5FbXB0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5maW5hbCA9IHRoaXMuZ2V0RmluYWwodGhpcy5jb250cmFjdC5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51cyhpZHgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250cmFjdC5wb3NpdGlvbnNbaWR4XS5jb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdC5wb3NpdGlvbnNbaWR4XS5jb3VudC0tO1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0ucHJvZHVjdCBhcyBQcm9kdWN0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LnBvc2l0aW9uc1tpZHhdLnN1bSA9IHByb2R1Y3QucHJpY2UgKiB0aGlzLmNvbnRyYWN0LnBvc2l0aW9uc1tpZHhdLmNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LmZpbmFsID0gdGhpcy5nZXRGaW5hbCh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbHVzKGlkeCkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uY291bnQrKztcclxuICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0ucHJvZHVjdCBhcyBQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uc3VtID0gcHJvZHVjdC5wcmljZSAqIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uY291bnQ7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5maW5hbCA9IHRoaXMuZ2V0RmluYWwodGhpcy5jb250cmFjdC5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaW5hbChwb3NpdGlvbnMpIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBpZiAocG9zaXRpb25zKVxyXG4gICAgICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gcG9zaXRpb24uc3VtO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==