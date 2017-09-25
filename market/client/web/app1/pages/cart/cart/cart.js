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
        });
    }
    submit(contract) {
        this.contract = Object.assign(this.contract, contract);
        this.contractProvider.placeContract(this.contract).subscribe(response => {
            this.pageMode = CartMode.Success;
            this.history.unshift(response);
            this.navbarService.updateCartData({ sum: 0, count: 0 });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFNOUMsSUFBYSxRQUFRLEdBQXJCO0lBUUksWUFBb0IsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBRDVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFSaEQsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLGFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQztRQUNsQyxhQUFRLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBSXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FB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ckMsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBa0IsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFTO1FBQ2QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ1YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUN0QixHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0NBQ0osQ0FBQTtBQTFFWSxRQUFRO0lBSHBCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxXQUFXO0tBQzNCLENBQUM7cUNBU3dDLGdCQUFnQjtRQUNuQixhQUFhO0dBVHZDLFFBQVEsQ0EwRXBCO1NBMUVZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb250cmFjdH0gZnJvbSBcIm1vZGVscy9jb250cmFjdFwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcclxuaW1wb3J0IHtDYXJ0TW9kZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kZVwiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9uYXZiYXJcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwibW9kZWxzL3Byb2R1Y3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdjYXJ0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2Uge1xyXG4gICAgaGlzdG9yeTogYW55W10gPSBbXTtcclxuICAgIGNhcnRNb2RlID0gQ2FydE1vZGU7XHJcbiAgICBjb250cmFjdDogQ29udHJhY3QgPSBuZXcgQ29udHJhY3Q7XHJcbiAgICBwYWdlTW9kZTogQ2FydE1vZGUgPSBDYXJ0TW9kZS5FbXB0eTtcclxuICAgIHNob3dIaXN0b3J5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93RXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIuZ2V0Q2FydCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3QgPSByZXNwb25zZS5jdXJyZW50O1xyXG4gICAgICAgICAgICB0aGlzLmhpc3RvcnkgPSByZXNwb25zZS5oaXN0b3J5O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dIaXN0b3J5ID0gdGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3QuZmluYWwgPSB0aGlzLmdldEZpbmFsKHRoaXMuY29udHJhY3QucG9zaXRpb25zKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucG9zaXRpb25zICYmIHRoaXMuY29udHJhY3QucG9zaXRpb25zLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VNb2RlID0gQ2FydE1vZGUuRm9ybTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdChjb250cmFjdCkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QgPSBPYmplY3QuYXNzaWduKHRoaXMuY29udHJhY3QsIGNvbnRyYWN0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wbGFjZUNvbnRyYWN0KHRoaXMuY29udHJhY3QpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VNb2RlID0gQ2FydE1vZGUuU3VjY2VzcztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeS51bnNoaWZ0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YSh7c3VtOiAwLCBjb3VudDogMH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkZWwoaWR4KSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5wb3NpdGlvbnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJhY3QucG9zaXRpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU1vZGUgPSBDYXJ0TW9kZS5FbXB0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5maW5hbCA9IHRoaXMuZ2V0RmluYWwodGhpcy5jb250cmFjdC5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51cyhpZHgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250cmFjdC5wb3NpdGlvbnNbaWR4XS5jb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdC5wb3NpdGlvbnNbaWR4XS5jb3VudC0tO1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0ucHJvZHVjdCBhcyBQcm9kdWN0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LnBvc2l0aW9uc1tpZHhdLnN1bSA9IHByb2R1Y3QucHJpY2UgKiB0aGlzLmNvbnRyYWN0LnBvc2l0aW9uc1tpZHhdLmNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0LmZpbmFsID0gdGhpcy5nZXRGaW5hbCh0aGlzLmNvbnRyYWN0LnBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbHVzKGlkeCkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uY291bnQrKztcclxuICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0ucHJvZHVjdCBhcyBQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uc3VtID0gcHJvZHVjdC5wcmljZSAqIHRoaXMuY29udHJhY3QucG9zaXRpb25zW2lkeF0uY291bnQ7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdC5maW5hbCA9IHRoaXMuZ2V0RmluYWwodGhpcy5jb250cmFjdC5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RQcm92aWRlci5wdXQodGhpcy5jb250cmFjdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLnVwZGF0ZUNhcnREYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaW5hbChwb3NpdGlvbnMpIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBpZiAocG9zaXRpb25zKVxyXG4gICAgICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gcG9zaXRpb24uc3VtO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==