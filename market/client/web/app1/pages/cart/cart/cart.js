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
import { CartMode } from "../components/mode";
import { NavbarService } from "services/navbar";
let CartPage = class CartPage {
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
CartPage = __decorate([
    Component({
        templateUrl: 'cart.html',
    }),
    __metadata("design:paramtypes", [ContractProvider,
        NavbarService])
], CartPage);
export { CartPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFLOUMsSUFBYSxRQUFRLEdBQXJCO0lBUUksWUFBb0IsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBRDVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFSaEQsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLGFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQztRQUNsQyxhQUFRLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBSXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVE7Z0JBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQUc7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHO1FBQ0wsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBa0IsQ0FBQztZQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUc7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFrQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQVM7UUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDVixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVE7Z0JBQ3RCLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSixDQUFBO0FBN0VZLFFBQVE7SUFIcEIsU0FBUyxDQUFDO1FBQ1AsV0FBVyxFQUFFLFdBQVc7S0FDM0IsQ0FBQztxQ0FTd0MsZ0JBQWdCO1FBQ25CLGFBQWE7R0FUdkMsUUFBUSxDQTZFcEI7U0E3RVksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyYWN0fSBmcm9tIFwibW9kZWxzL2NvbnRyYWN0XCI7XHJcbmltcG9ydCB7Q29udHJhY3RQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVyc1wiO1xyXG5pbXBvcnQge0NhcnRNb2RlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RlXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL25hdmJhclwiO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCJtb2RlbHMvcHJvZHVjdFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnY2FydC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnRQYWdlIHtcclxuICAgIGhpc3Rvcnk6IGFueVtdID0gW107XHJcbiAgICBjYXJ0TW9kZSA9IENhcnRNb2RlO1xyXG4gICAgY29udHJhY3Q6IENvbnRyYWN0ID0gbmV3IENvbnRyYWN0O1xyXG4gICAgcGFnZU1vZGU6IENhcnRNb2RlID0gQ2FydE1vZGUuRW1wdHk7XHJcbiAgICBzaG93SGlzdG9yeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cmFjdFByb3ZpZGVyOiBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLmdldENhcnQoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0ID0gcmVzcG9uc2UuY3VycmVudDtcclxuICAgICAgICAgICAgdGhpcy5oaXN0b3J5ID0gcmVzcG9uc2UuaGlzdG9yeTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGlzdG9yeSA9IHRoaXMuaGlzdG9yeS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LmZpbmFsID0gdGhpcy5nZXRGaW5hbCh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyAmJiB0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTW9kZSA9IENhcnRNb2RlLkZvcm07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0hpc3RvcnkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoY29udHJhY3QpIHtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0ID0gT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRyYWN0LCBjb250cmFjdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucGhvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLnBsYWNlQ29udHJhY3QodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU1vZGUgPSBDYXJ0TW9kZS5TdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5LnVuc2hpZnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHtzdW06IDAsIGNvdW50OiAwfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWwoaWR4KSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5wb3NpdGlvbnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucG9zaXRpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU1vZGUgPSBDYXJ0TW9kZS5FbXB0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5maW5hbCA9IHRoaXMuZ2V0RmluYWwodGhpcy5jb250cmFjdC5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51cyhpZHgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250cmFjdC5wb3NpdGlvbnNbaWR4XS5jb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdC5wb3NpdGlvbnNbaWR4XS5jb3VudC0tO1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0ucHJvZHVjdCBhcyBQcm9kdWN0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LnBvc2l0aW9uc1tpZHhdLnN1bSA9IHByb2R1Y3QucHJpY2UgKiB0aGlzLmNvbnRyYWN0LnBvc2l0aW9uc1tpZHhdLmNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LmZpbmFsID0gdGhpcy5nZXRGaW5hbCh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbHVzKGlkeCkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uY291bnQrKztcclxuICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0ucHJvZHVjdCBhcyBQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uc3VtID0gcHJvZHVjdC5wcmljZSAqIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uY291bnQ7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5maW5hbCA9IHRoaXMuZ2V0RmluYWwodGhpcy5jb250cmFjdC5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaW5hbChwb3NpdGlvbnMpIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBpZiAocG9zaXRpb25zKVxyXG4gICAgICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gcG9zaXRpb24uc3VtO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==