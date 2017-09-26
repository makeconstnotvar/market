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
let PagerControl = class PagerControl {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.startPage = 1;
        this.totalItems = 0;
        this.category = '';
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
], PagerControl.prototype, "category", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PagerControl.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PagerControl.prototype, "itemsPerPage", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PagerControl.prototype, "onPageChange", void 0);
PagerControl = __decorate([
    Component({
        selector: 'pager',
        templateUrl: 'pager.html'
    }),
    __metadata("design:paramtypes", [])
], PagerControl);
export { PagerControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3JFLElBQWEsWUFBWSxHQUF6QjtJQXdCSTtRQXZCQSxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFNdEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBSXRCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFHbEIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFHekIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQzNCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFlBQVk7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyRCxDQUFDO0lBRUwsQ0FBQztJQUVPLFVBQVU7UUFDZCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVPLFVBQVU7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFakUsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxJQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFcEIsQ0FBQztDQUdKLENBQUE7QUFsRUc7SUFEQyxLQUFLLEVBQUU7OzhDQUNjO0FBSXRCO0lBREMsS0FBSyxFQUFFOzswQ0FDVTtBQUdsQjtJQURDLEtBQUssRUFBRTs7a0RBQ2lCO0FBR3pCO0lBREMsTUFBTSxFQUFFOztrREFDaUM7QUF0QmpDLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQzs7R0FDVyxZQUFZLENBOEV4QjtTQTlFWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhZ2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29udHJvbCB7XHJcbiAgICBwYWdlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhcnRQYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgZ2FwOiBudW1iZXI7XHJcbiAgICBtYXhQYWdlOiBudW1iZXI7XHJcbiAgICBlbmRQYWdlOiBudW1iZXI7XHJcblxyXG5cclxuICAgIHRvdGFsSXRlbXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNhdGVnb3J5OiBzdHJpbmcgPSAnJztcclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNpemU6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvblBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFnZUNoYW5nZSgkZXZlbnQsIHBhZ2UpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFnZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0YXJ0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLmdhcCA9IE1hdGguZmxvb3IodGhpcy5zaXplIC8gMik7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4UGFnZSA+IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhQYWdlIC0gdGhpcy5jdXJyZW50UGFnZSA8IHRoaXMuZ2FwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBhZ2UgPSB0aGlzLm1heFBhZ2UgLSB0aGlzLnNpemUgKyAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRQYWdlIC0gdGhpcy5nYXAgPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlIC0gdGhpcy5nYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVuZFBhZ2UoKSB7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlID0gdGhpcy5zdGFydFBhZ2UgKyB0aGlzLnNpemUgLSAxO1xyXG5cclxuICAgICAgICB0aGlzLmVuZFBhZ2UgPSAodGhpcy5tYXhQYWdlIDwgdGhpcy5zaXplKSA/ICh0aGlzLm1heFBhZ2UpIDogKHBvc3NpYmxlIDwgdGhpcy5tYXhQYWdlID8gcG9zc2libGUgOiB0aGlzLm1heFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4UGFnZSgpIHtcclxuICAgICAgICB0aGlzLm1heFBhZ2UgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhZ2VzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmdldE1heFBhZ2UoKTtcclxuICAgICAgICB0aGlzLmdldFN0YXJ0UGFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RW5kUGFnZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydFBhZ2U7IGkgPD0gdGhpcy5lbmRQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCh0b3RhbCwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSB0b3RhbHx8MDtcclxuICAgICAgICB0aGlzLmdldFBhZ2VzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=