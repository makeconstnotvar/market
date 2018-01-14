import * as i0 from "@angular/core";
import * as i1 from "./components/alert/alert.ngfactory";
import * as i2 from "./components/alert/alert";
import * as i3 from "./components/product/product.ngfactory";
import * as i4 from "@angular/common";
import * as i5 from "./components/product/product";
import * as i6 from "./components/filter/filter.ngfactory";
import * as i7 from "./components/filter/filter";
import * as i8 from "./components/sorting/sorting.ngfactory";
import * as i9 from "./components/sorting/sorting";
import * as i10 from "../../services/sort";
import * as i11 from "../../controls/pager/pager.ngfactory";
import * as i12 from "../../controls/pager/pager";
import * as i13 from "./catalog";
import * as i14 from "../../providers/product";
import * as i15 from "../../services/parameters";
import * as i16 from "../../providers/category";
import * as i17 from "../../providers/parameter";
import * as i18 from "../../providers/contract";
import * as i19 from "../../services/navbar";
import * as i20 from "@angular/router";
import * as i21 from "../../services/global";
var styles_CatalogPage = [];
var RenderType_CatalogPage = i0.ɵcrt({ encapsulation: 2, styles: styles_CatalogPage, data: {} });
export { RenderType_CatalogPage as RenderType_CatalogPage };
function View_CatalogPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "cat-alert", [["class", "alert alert-info"]], null, [[null, "onClearFilter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onClearFilter" === en)) {
        var pd_0 = (_co.clearFilter($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_ComponentCatalogAlert_0, i1.RenderType_ComponentCatalogAlert)), i0.ɵdid(1, 49152, null, 0, i2.ComponentCatalogAlert, [], null, { onClearFilter: "onClearFilter" })], null, null); }
function View_CatalogPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "cat-product", [["class", "d-flex"]], null, [[null, "onPostPosition"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostPosition" === en)) {
        var pd_0 = (_co.postPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i3.View_ComponentCatalogProduct_0, i3.RenderType_ComponentCatalogProduct)), i0.ɵdid(1, 278528, null, 0, i4.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "last": 0 }), i0.ɵdid(3, 49152, null, 0, i5.ComponentCatalogProduct, [], { product: [0, "product"], categoryName: [1, "categoryName"] }, { onPostPosition: "onPostPosition" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "d-flex"; var currVal_1 = _ck(_v, 2, 0, _co.last); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit; var currVal_3 = _co.categoryName; _ck(_v, 3, 0, currVal_2, currVal_3); }, null); }
export function View_CatalogPage_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { pagerComponent: 0 }), i0.ɵqud(402653184, 2, { catalogFilter: 0 }), (_l()(), i0.ɵeld(2, 0, null, null, 14, "div", [["class", "d-flex flex-nowrap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(4, 0, null, null, 11, "div", [["class", "c-buttons"]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i4.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(6, { "hidden-md-up": 0, "hidden-md-down": 1 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(8, 0, null, null, 2, "a", [["class", "c-button pointer text-nowrap"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.xsChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, "i", [["class", "fa fa-bars rgap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0424\u0438\u043B\u044C\u0442\u0440\u044B"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(12, 0, null, null, 2, "a", [["class", "c-button pointer text-nowrap"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearFilter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 0, "i", [["class", "fa fa-times rgap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(18, 0, null, null, 23, "div", [["class", "d-flex flex-nowrap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(20, 0, null, null, 3, "cat-filter", [["class", "product-menu"]], null, [[null, "onFilterChange"], [null, "onFilterApply"], [null, "onFilterClear"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onFilterChange" === en)) {
        var pd_0 = (_co.changeFilter($event) !== false);
        ad = (pd_0 && ad);
    } if (("onFilterApply" === en)) {
        var pd_1 = (_co.applyFilter() !== false);
        ad = (pd_1 && ad);
    } if (("onFilterClear" === en)) {
        var pd_2 = (_co.clearFilter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, i6.View_ComponentCatalogFilter_0, i6.RenderType_ComponentCatalogFilter)), i0.ɵdid(21, 278528, null, 0, i4.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(22, { "hidden-sm-down": 0 }), i0.ɵdid(23, 49152, [[2, 4]], 0, i7.ComponentCatalogFilter, [], { parameters: [0, "parameters"] }, { onFilterChange: "onFilterChange", onFilterApply: "onFilterApply", onFilterClear: "onFilterClear" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(25, 0, null, null, 15, "div", [["class", "product-list"]], null, null, null, null, null)), i0.ɵdid(26, 278528, null, 0, i4.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(27, { "hidden-sm-down": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(29, 0, null, null, 1, "cat-sorting", [], null, [[null, "onSort"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSort" === en)) {
        var pd_0 = (_co.changeSort($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_ComponentCatalogSorting_0, i8.RenderType_ComponentCatalogSorting)), i0.ɵdid(30, 638976, null, 0, i9.ComponentCatalogSorting, [i10.SortingService], { activeSort: [0, "activeSort"] }, { onSort: "onSort" }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CatalogPage_1)), i0.ɵdid(33, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CatalogPage_2)), i0.ɵdid(36, 802816, null, 0, i4.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(38, 0, null, null, 1, "pager", [], null, [[null, "onPageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPageChange" === en)) {
        var pd_0 = (_co.changePage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i11.View_PagerControl_0, i11.RenderType_PagerControl)), i0.ɵdid(39, 49152, [[1, 4]], 0, i12.PagerControl, [], { category: [0, "category"] }, { onPageChange: "onPageChange" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(43, 0, null, null, 0, "div", [["class", "d-flex flex-column"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "c-buttons"; var currVal_1 = _ck(_v, 6, 0, !_co.xs, _co.xs); _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 22, 0, !_co.xs); _ck(_v, 21, 0, currVal_2); var currVal_3 = _co.parameters; _ck(_v, 23, 0, currVal_3); var currVal_4 = "product-list"; var currVal_5 = _ck(_v, 27, 0, _co.xs); _ck(_v, 26, 0, currVal_4, currVal_5); var currVal_6 = _co.activeSort; _ck(_v, 30, 0, currVal_6); var currVal_7 = (_co.products.length == 0); _ck(_v, 33, 0, currVal_7); var currVal_8 = _co.products; _ck(_v, 36, 0, currVal_8); var currVal_9 = _co.categoryId; _ck(_v, 39, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.category.longDescription; _ck(_v, 43, 0, currVal_10); }); }
export function View_CatalogPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "catalog", [["class", "container d-block"]], null, null, null, View_CatalogPage_0, RenderType_CatalogPage)), i0.ɵdid(1, 114688, null, 0, i13.CatalogPage, [i14.ProductProvider, i15.ParametersService, i16.CategoryProvider, i17.ParameterProvider, i18.ContractProvider, i10.SortingService, i19.NavbarService, i20.ActivatedRoute, i20.Router, i21.GlobalService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CatalogPageNgFactory = i0.ɵccf("catalog", i13.CatalogPage, View_CatalogPage_Host_0, {}, {}, []);
export { CatalogPageNgFactory as CatalogPageNgFactory };
