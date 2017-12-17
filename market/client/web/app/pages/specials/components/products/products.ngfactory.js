import * as i0 from "@angular/core";
import * as i1 from "../product/product.ngfactory";
import * as i2 from "@angular/common";
import * as i3 from "../product/product";
import * as i4 from "./products";
var styles_ComponentSpecialsProducts = [];
var RenderType_ComponentSpecialsProducts = i0.ɵcrt({ encapsulation: 2, styles: styles_ComponentSpecialsProducts, data: {} });
export { RenderType_ComponentSpecialsProducts as RenderType_ComponentSpecialsProducts };
function View_ComponentSpecialsProducts_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "sp-product", [["class", "special-product mm-special col-lg-3 col-md-4 col-sm-6 col-12 product"]], null, [[null, "onPostPosition"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostPosition" === en)) {
        var pd_0 = (_co.postPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_ComponentSpecialsProduct_0, i1.RenderType_ComponentSpecialsProduct)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "hidden-sm-down hidden-lg-up": 0 }), i0.ɵdid(3, 49152, null, 0, i3.ComponentSpecialsProduct, [], { product: [0, "product"] }, { onPostPosition: "onPostPosition" })], function (_ck, _v) { var currVal_0 = "special-product mm-special col-lg-3 col-md-4 col-sm-6 col-12"; var currVal_1 = _ck(_v, 2, 0, _v.context.last); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }, null); }
export function View_ComponentSpecialsProducts_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "h2", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0421\u0430\u043C\u043E\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0435"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ComponentSpecialsProducts_1)), i0.ɵdid(4, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 4, 0, currVal_0); }, null); }
export function View_ComponentSpecialsProducts_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "sp-products", [], null, null, null, View_ComponentSpecialsProducts_0, RenderType_ComponentSpecialsProducts)), i0.ɵdid(1, 49152, null, 0, i4.ComponentSpecialsProducts, [], null, null)], null, null); }
var ComponentSpecialsProductsNgFactory = i0.ɵccf("sp-products", i4.ComponentSpecialsProducts, View_ComponentSpecialsProducts_Host_0, { products: "products" }, { onPostPosition: "onPostPosition" }, []);
export { ComponentSpecialsProductsNgFactory as ComponentSpecialsProductsNgFactory };
//# sourceMappingURL=products.ngfactory.js.map