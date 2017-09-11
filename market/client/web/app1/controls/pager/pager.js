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
], PagerControl.prototype, "category", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PagerControl.prototype, "params", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3JFLElBQWEsWUFBWSxHQUF6QjtJQTBCSTtRQXpCQSxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFNdEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHcEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdsQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDM0IsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JELENBQUM7SUFFTCxDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUVqRSxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0NBR0osQ0FBQTtBQXBFRztJQURDLEtBQUssRUFBRTs7OENBQ2M7QUFHdEI7SUFEQyxLQUFLLEVBQUU7OzRDQUNZO0FBR3BCO0lBREMsS0FBSyxFQUFFOzswQ0FDVTtBQUdsQjtJQURDLEtBQUssRUFBRTs7a0RBQ2lCO0FBR3pCO0lBREMsTUFBTSxFQUFFOztrREFDaUM7QUF4QmpDLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQzs7R0FDVyxZQUFZLENBZ0Z4QjtTQWhGWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhZ2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29udHJvbCB7XHJcbiAgICBwYWdlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhcnRQYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgZ2FwOiBudW1iZXI7XHJcbiAgICBtYXhQYWdlOiBudW1iZXI7XHJcbiAgICBlbmRQYWdlOiBudW1iZXI7XHJcblxyXG5cclxuICAgIHRvdGFsSXRlbXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNhdGVnb3J5OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFyYW1zOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2l6ZTogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2goaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYWdlQ2hhbmdlKCRldmVudCwgcGFnZSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQocGFnZSk7XHJcbiAgICAgICAgdGhpcy5nZXRQYWdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3RhcnRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FwID0gTWF0aC5mbG9vcih0aGlzLnNpemUgLyAyKTtcclxuICAgICAgICBpZiAodGhpcy5tYXhQYWdlID4gdGhpcy5zaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFBhZ2UgLSB0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy5nYXApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGFnZSA9IHRoaXMubWF4UGFnZSAtIHRoaXMuc2l6ZSArIDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFBhZ2UgLSB0aGlzLmdhcCA+IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgLSB0aGlzLmdhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RW5kUGFnZSgpIHtcclxuICAgICAgICBsZXQgcG9zc2libGUgPSB0aGlzLnN0YXJ0UGFnZSArIHRoaXMuc2l6ZSAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuZW5kUGFnZSA9ICh0aGlzLm1heFBhZ2UgPCB0aGlzLnNpemUpID8gKHRoaXMubWF4UGFnZSkgOiAocG9zc2libGUgPCB0aGlzLm1heFBhZ2UgPyBwb3NzaWJsZSA6IHRoaXMubWF4UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYXhQYWdlKCkge1xyXG4gICAgICAgIHRoaXMubWF4UGFnZSA9IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFnZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0TWF4UGFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RhcnRQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRFbmRQYWdlKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXJ0UGFnZTsgaSA8PSB0aGlzLmVuZFBhZ2U7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKHRvdGFsLCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSB8fCAxO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHRvdGFsfHwwO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFnZXMoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==