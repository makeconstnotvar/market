import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
    selector: 'pager',
    templateUrl: 'pager.html'
})
export class PagerComponent {
    pages: number[] = [];
    currentPage: number = 1;
    startPage: number = 1;
    gap: number;
    maxPage: number;
    endPage: number;


    totalItems: number = 0;

    @Input()
    category: string = '';
    @Input()
    params: string = '';

    @Input()
    size: number = 10;

    @Input()
    itemsPerPage: number = 5;

    @Output()
    onPageChange = new EventEmitter<number>();

    constructor() {
        for (let i = 1; i <= Math.ceil(this.totalItems / this.itemsPerPage); i++) {
            this.pages.push(i)
        }
    }

    private pageChange($event, page) {
        $event.preventDefault();
        this.currentPage = page;
        this.onPageChange.emit(page);
        this.getPages();
    }

    private getStartPage() {
        this.gap = Math.floor(this.size / 2);
        if (this.maxPage > this.size) {
            if (this.maxPage - this.currentPage < this.gap)
                this.startPage = this.maxPage - this.size + 1;
            else if (this.currentPage - this.gap > 0)
                this.startPage = this.currentPage - this.gap;
        }

    }

    private getEndPage() {
        let possible = this.startPage + this.size - 1;

        this.endPage = (this.maxPage < this.size) ? (this.maxPage) : (possible < this.maxPage ? possible : this.maxPage);
    }

    private getMaxPage() {
        this.maxPage = Math.ceil(this.totalItems / this.itemsPerPage)

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
        this.totalItems = total||0;
        this.getPages();

    }


}