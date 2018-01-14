import { Component, EventEmitter, Input, Output } from "@angular/core";
var PagerControl = (function () {
    function PagerControl() {
        this.pages = [];
        this.currentPage = 1;
        this.startPage = 1;
        this.totalItems = 0;
        this.category = '';
        this.size = 10;
        this.itemsPerPage = 5;
        this.onPageChange = new EventEmitter();
        for (var i = 1; i <= Math.ceil(this.totalItems / this.itemsPerPage); i++) {
            this.pages.push(i);
        }
    }
    PagerControl.prototype.pageChange = function ($event, page) {
        $event.preventDefault();
        this.currentPage = page;
        this.onPageChange.emit(page);
        this.getPages();
    };
    PagerControl.prototype.getStartPage = function () {
        this.gap = Math.floor(this.size / 2);
        if (this.maxPage > this.size) {
            if (this.maxPage - this.currentPage < this.gap)
                this.startPage = this.maxPage - this.size + 1;
            else if (this.currentPage - this.gap > 0)
                this.startPage = this.currentPage - this.gap;
        }
    };
    PagerControl.prototype.getEndPage = function () {
        var possible = this.startPage + this.size - 1;
        this.endPage = (this.maxPage < this.size) ? (this.maxPage) : (possible < this.maxPage ? possible : this.maxPage);
    };
    PagerControl.prototype.getMaxPage = function () {
        this.maxPage = Math.ceil(this.totalItems / this.itemsPerPage);
    };
    PagerControl.prototype.getPages = function () {
        this.pages = [];
        this.getMaxPage();
        this.getStartPage();
        this.getEndPage();
        for (var i = this.startPage; i <= this.endPage; i++) {
            this.pages.push(i);
        }
    };
    PagerControl.prototype.setup = function (total, currentPage) {
        this.currentPage = currentPage || 1;
        this.totalItems = total || 0;
        this.getPages();
    };
    PagerControl.decorators = [
        { type: Component, args: [{
                    selector: 'pager',
                    templateUrl: 'pager.html'
                },] },
    ];
    PagerControl.ctorParameters = function () { return []; };
    PagerControl.propDecorators = {
        "category": [{ type: Input },],
        "size": [{ type: Input },],
        "itemsPerPage": [{ type: Input },],
        "onPageChange": [{ type: Output },],
    };
    return PagerControl;
}());
export { PagerControl };
