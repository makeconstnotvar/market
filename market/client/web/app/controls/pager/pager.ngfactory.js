import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pager";
var styles_PagerControl = [];
var RenderType_PagerControl = i0.ɵcrt({ encapsulation: 2, styles: styles_PagerControl, data: {} });
export { RenderType_PagerControl as RenderType_PagerControl };
function View_PagerControl_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "li", [["class", "page-item"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "a", [["class", "page-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.pageChange($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "page-item"; var currVal_1 = _ck(_v, 2, 0, (_v.context.$implicit == _co.currentPage)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 5, 0, currVal_2); }); }
function View_PagerControl_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ul", [["class", "pagination"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_PagerControl_2)), i0.ɵdid(3, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pages; _ck(_v, 3, 0, currVal_0); }, null); }
export function View_PagerControl_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_PagerControl_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.pages.length > 1); _ck(_v, 1, 0, currVal_0); }, null); }
export function View_PagerControl_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "pager", [], null, null, null, View_PagerControl_0, RenderType_PagerControl)), i0.ɵdid(1, 49152, null, 0, i2.PagerControl, [], null, null)], null, null); }
var PagerControlNgFactory = i0.ɵccf("pager", i2.PagerControl, View_PagerControl_Host_0, { category: "category", size: "size", itemsPerPage: "itemsPerPage" }, { onPageChange: "onPageChange" }, []);
export { PagerControlNgFactory as PagerControlNgFactory };
//# sourceMappingURL=pager.ngfactory.js.map