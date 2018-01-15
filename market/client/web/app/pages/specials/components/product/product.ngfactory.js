import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../../../../controls/price/price.ngfactory";
import * as i4 from "../../../../controls/price/price";
import * as i5 from "./product";
var styles_ComponentSpecialsProduct = [];
var RenderType_ComponentSpecialsProduct = i0.ɵcrt({ encapsulation: 2, styles: styles_ComponentSpecialsProduct, data: {} });
export { RenderType_ComponentSpecialsProduct as RenderType_ComponentSpecialsProduct };
export function View_ComponentSpecialsProduct_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "div", [["class", "special-product__image"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "a", [["class", "special-product__image-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(3, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, null, null, 0, "img", [["fade-in", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(9, 0, null, null, 8, "div", [["class", "special-product__info"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(11, 0, null, null, 2, "a", [["class", "special-product__name"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(12, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(13, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "price", [], null, [[null, "onPostPosition"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostPosition" === en)) {
        var pd_0 = (_co.postPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i3.View_PriceControl_0, i3.RenderType_PriceControl)), i0.ɵdid(16, 49152, null, 0, i4.PriceControl, [], { product: [0, "product"] }, { onPostPosition: "onPostPosition" }), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵinlineInterpolate(2, "/", _co.product.caturl, "/", _co.product.url, ""); _ck(_v, 3, 0, currVal_2); var currVal_6 = i0.ɵinlineInterpolate(2, "/", _co.product.caturl, "/", _co.product.url, ""); _ck(_v, 12, 0, currVal_6); var currVal_8 = _co.product; _ck(_v, 16, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 3).target; var currVal_1 = i0.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i0.ɵinlineInterpolate(2, "/photos/", _co.product._id, "/l_", _co.product.cover, ""); _ck(_v, 5, 0, currVal_3); var currVal_4 = i0.ɵnov(_v, 12).target; var currVal_5 = i0.ɵnov(_v, 12).href; _ck(_v, 11, 0, currVal_4, currVal_5); var currVal_7 = _co.product.name; _ck(_v, 13, 0, currVal_7); }); }
export function View_ComponentSpecialsProduct_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "sp-product", [["class", "product"]], null, null, null, View_ComponentSpecialsProduct_0, RenderType_ComponentSpecialsProduct)), i0.ɵdid(1, 49152, null, 0, i5.ComponentSpecialsProduct, [], null, null)], null, null); }
var ComponentSpecialsProductNgFactory = i0.ɵccf("sp-product", i5.ComponentSpecialsProduct, View_ComponentSpecialsProduct_Host_0, { product: "product" }, { onPostPosition: "onPostPosition" }, []);
export { ComponentSpecialsProductNgFactory as ComponentSpecialsProductNgFactory };
