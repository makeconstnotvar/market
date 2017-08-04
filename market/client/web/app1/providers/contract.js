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
let ContractProvider = class ContractProvider {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.post('/api/contract/select', { id: id })
            .map((r) => {
            return r.json();
        });
    }
    placeContract(item) {
        return this.http.post('/api/contract/place', item)
            .map((r) => {
            return r.json();
        });
    }
    postPosition(position) {
        return this.http.post('/api/contract/position', position)
            .map((r) => {
            return r.json();
        });
    }
    put(item) {
        return this.http.post('/api/contract/update', item)
            .map((r) => {
            return r.json();
        });
    }
    getCartStatus() {
        return this.http.post('/api/contract/status', {})
            .map((r) => {
            return r.json();
        });
    }
    getCart() {
        return this.http.post('/api/contract/cart', {})
            .map((r) => {
            return r.json();
        });
    }
};
ContractProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ContractProvider);
export { ContractProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFNN0MsSUFBYSxnQkFBZ0IsR0FBN0I7SUFDSSxZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQUU7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7YUFDbEQsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFjLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQUk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxDQUFDLENBQVc7WUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBUyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFpQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDO2FBQ3BELEdBQUcsQ0FBQyxDQUFDLENBQVc7WUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBUyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQzthQUM5QyxHQUFHLENBQUMsQ0FBQyxDQUFXO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQWMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxhQUFhO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQzthQUM1QyxHQUFHLENBQUMsQ0FBQyxDQUFXO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQVMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQzthQUMxQyxHQUFHLENBQUMsQ0FBQyxDQUFXO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQVMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDSixDQUFBO0FBOUNZLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7cUNBRWlCLElBQUk7R0FEckIsZ0JBQWdCLENBOEM1QjtTQTlDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtQb3NpdGlvbn0gZnJvbSBcImVudGl0aWVzL3Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7Q2FydERhdGF9IGZyb20gXCJlbnRpdGllcy9jYXJ0XCI7XHJcbmltcG9ydCB7Q29udHJhY3R9IGZyb20gXCJlbnRpdGllcy9jb250cmFjdFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29udHJhY3RQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnlJZChpZCk6IE9ic2VydmFibGU8Q29udHJhY3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvY29udHJhY3Qvc2VsZWN0Jywge2lkOiBpZH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgQ29udHJhY3RcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZUNvbnRyYWN0KGl0ZW0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9jb250cmFjdC9wbGFjZScsIGl0ZW0pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgYW55XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RQb3NpdGlvbihwb3NpdGlvbjpQb3NpdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2NvbnRyYWN0L3Bvc2l0aW9uJywgcG9zaXRpb24pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgYW55XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChpdGVtKTogT2JzZXJ2YWJsZTxDYXJ0RGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9jb250cmFjdC91cGRhdGUnLCBpdGVtKVxyXG4gICAgICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpIGFzIENhcnREYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcnRTdGF0dXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvY29udHJhY3Qvc3RhdHVzJywge30pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5qc29uKCkgYXMgYW55XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvY29udHJhY3QvY2FydCcsIHt9KVxyXG4gICAgICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpIGFzIGFueVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==