var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from "@angular/core";
let PagerComponent = class PagerComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.startPage = 1;
        this.totalItems = 0;
        this.category = '';
        this.params = '';
        this.size = 10;
        this.itemsPerPage = 5;
        this.onPageChange = new EventEmitter();
        for (let i = 1; i <= Math.ceil(this.totalItems / this.itemsPerPage); i++) {
            this.pages.push(i);
        }
    }
    pageChange($event, page) {
        $event.preventDefault();
        this.currentPage = page;
        this.onPageChange.emit(page);
        this.getPages();
    }
    getStartPage() {
        this.gap = Math.floor(this.size / 2);
        if (this.maxPage > this.size) {
            if (this.maxPage - this.currentPage < this.gap)
                this.startPage = this.maxPage - this.size + 1;
            else if (this.currentPage - this.gap > 0)
                this.startPage = this.currentPage - this.gap;
        }
    }
    getEndPage() {
        let possible = this.startPage + this.size - 1;
        this.endPage = (this.maxPage < this.size) ? (this.maxPage) : (possible < this.maxPage ? possible : this.maxPage);
    }
    getMaxPage() {
        this.maxPage = Math.ceil(this.totalItems / this.itemsPerPage);
    }
    getPages() {
        this.pages = [];
        this.getMaxPage();
        this.getStartPage();
        this.getEndPage();
        for (let i = this.startPage; i <= this.endPage; i++) {
            this.pages.push(i);
        }
    }
    setup(total, currentPage) {
        this.currentPage = currentPage || 1;
        this.totalItems = total || 0;
        this.getPages();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PagerComponent.prototype, "category", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PagerComponent.prototype, "params", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PagerComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PagerComponent.prototype, "itemsPerPage", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PagerComponent.prototype, "onPageChange", void 0);
PagerComponent = __decorate([
    Component({
        selector: 'pager',
        templateUrl: 'pager.html'
    }),
    __metadata("design:paramtypes", [])
], PagerComponent);
export { PagerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3JFLElBQWEsY0FBYyxHQUEzQjtJQXlCSTtRQXhCQSxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFNdEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHcEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdsQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDM0IsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JELENBQUM7SUFFTCxDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUVqRSxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0NBR0osQ0FBQTtBQW5FRztJQURDLEtBQUssRUFBRTs7Z0RBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7OzhDQUNZO0FBR3BCO0lBREMsS0FBSyxFQUFFOzs0Q0FDVTtBQUdsQjtJQURDLEtBQUssRUFBRTs7b0RBQ2lCO0FBR3pCO0lBREMsTUFBTSxFQUFFOztvREFDaUM7QUF2QmpDLGNBQWM7SUFKMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQzs7R0FDVyxjQUFjLENBK0UxQjtTQS9FWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhZ2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IHtcclxuICAgIHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBzdGFydFBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBnYXA6IG51bWJlcjtcclxuICAgIG1heFBhZ2U6IG51bWJlcjtcclxuICAgIGVuZFBhZ2U6IG51bWJlcjtcclxuXHJcblxyXG4gICAgdG90YWxJdGVtczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2F0ZWdvcnk6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KClcclxuICAgIHBhcmFtczogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNpemU6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFnZUNoYW5nZSgkZXZlbnQsIHBhZ2UpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFnZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0YXJ0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLmdhcCA9IE1hdGguZmxvb3IodGhpcy5zaXplIC8gMik7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4UGFnZSA+IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhQYWdlIC0gdGhpcy5jdXJyZW50UGFnZSA8IHRoaXMuZ2FwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBhZ2UgPSB0aGlzLm1heFBhZ2UgLSB0aGlzLnNpemUgKyAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRQYWdlIC0gdGhpcy5nYXAgPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlIC0gdGhpcy5nYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVuZFBhZ2UoKSB7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlID0gdGhpcy5zdGFydFBhZ2UgKyB0aGlzLnNpemUgLSAxO1xyXG5cclxuICAgICAgICB0aGlzLmVuZFBhZ2UgPSAodGhpcy5tYXhQYWdlIDwgdGhpcy5zaXplKSA/ICh0aGlzLm1heFBhZ2UpIDogKHBvc3NpYmxlIDwgdGhpcy5tYXhQYWdlID8gcG9zc2libGUgOiB0aGlzLm1heFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4UGFnZSgpIHtcclxuICAgICAgICB0aGlzLm1heFBhZ2UgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhZ2VzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmdldE1heFBhZ2UoKTtcclxuICAgICAgICB0aGlzLmdldFN0YXJ0UGFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RW5kUGFnZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydFBhZ2U7IGkgPD0gdGhpcy5lbmRQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCh0b3RhbCwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSB0b3RhbHx8MDtcclxuICAgICAgICB0aGlzLmdldFBhZ2VzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=