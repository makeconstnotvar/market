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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3JFLElBQWEsY0FBYyxHQUEzQjtJQTBCSTtRQXpCQSxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFNdEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHcEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdsQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDM0IsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JELENBQUM7SUFFTCxDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUVqRSxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0NBR0osQ0FBQTtBQXBFRztJQURDLEtBQUssRUFBRTs7Z0RBQ2M7QUFHdEI7SUFEQyxLQUFLLEVBQUU7OzhDQUNZO0FBR3BCO0lBREMsS0FBSyxFQUFFOzs0Q0FDVTtBQUdsQjtJQURDLEtBQUssRUFBRTs7b0RBQ2lCO0FBR3pCO0lBREMsTUFBTSxFQUFFOztvREFDaUM7QUF4QmpDLGNBQWM7SUFKMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQzs7R0FDVyxjQUFjLENBZ0YxQjtTQWhGWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhZ2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IHtcclxuICAgIHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBzdGFydFBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBnYXA6IG51bWJlcjtcclxuICAgIG1heFBhZ2U6IG51bWJlcjtcclxuICAgIGVuZFBhZ2U6IG51bWJlcjtcclxuXHJcblxyXG4gICAgdG90YWxJdGVtczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2F0ZWdvcnk6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYXJhbXM6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzaXplOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25QYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhZ2VDaGFuZ2UoJGV2ZW50LCBwYWdlKSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcclxuICAgICAgICB0aGlzLmdldFBhZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdGFydFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5nYXAgPSBNYXRoLmZsb29yKHRoaXMuc2l6ZSAvIDIpO1xyXG4gICAgICAgIGlmICh0aGlzLm1heFBhZ2UgPiB0aGlzLnNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF4UGFnZSAtIHRoaXMuY3VycmVudFBhZ2UgPCB0aGlzLmdhcClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQYWdlID0gdGhpcy5tYXhQYWdlIC0gdGhpcy5zaXplICsgMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50UGFnZSAtIHRoaXMuZ2FwID4gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSAtIHRoaXMuZ2FwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFbmRQYWdlKCkge1xyXG4gICAgICAgIGxldCBwb3NzaWJsZSA9IHRoaXMuc3RhcnRQYWdlICsgdGhpcy5zaXplIC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmRQYWdlID0gKHRoaXMubWF4UGFnZSA8IHRoaXMuc2l6ZSkgPyAodGhpcy5tYXhQYWdlKSA6IChwb3NzaWJsZSA8IHRoaXMubWF4UGFnZSA/IHBvc3NpYmxlIDogdGhpcy5tYXhQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1heFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5tYXhQYWdlID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYWdlcygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRNYXhQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdGFydFBhZ2UoKTtcclxuICAgICAgICB0aGlzLmdldEVuZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhcnRQYWdlOyBpIDw9IHRoaXMuZW5kUGFnZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAodG90YWwsIGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlIHx8IDE7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gdG90YWx8fDA7XHJcbiAgICAgICAgdGhpcy5nZXRQYWdlcygpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59Il19