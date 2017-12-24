import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/photo/photo.ngfactory";
import * as i3 from "./components/photo/photo";
import * as i4 from "./components/socials/socials.ngfactory";
import * as i5 from "./components/socials/socials";
import * as i6 from "./components/gallery/gallery.ngfactory";
import * as i7 from "./components/gallery/gallery";
import * as i8 from "../../controls/price/price.ngfactory";
import * as i9 from "../../controls/price/price";
import * as i10 from "./components/information/information.ngfactory";
import * as i11 from "./components/information/information";
import * as i12 from "./components/specification/specification.ngfactory";
import * as i13 from "./components/specification/specification";
import * as i14 from "./view";
import * as i15 from "../../providers/product";
import * as i16 from "@angular/router";
import * as i17 from "../../providers/contract";
import * as i18 from "../../services/navbar";
import * as i19 from "../../services/config";
import * as i20 from "../../services/global";
import * as i21 from "../../services/seo1";
var styles_ViewPage = [];
var RenderType_ViewPage = i0.ɵcrt({ encapsulation: 2, styles: styles_ViewPage, data: {} });
export { RenderType_ViewPage as RenderType_ViewPage };
function View_ViewPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["class", "btn btn-red pull-right m-back"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "fa fa-chevron-left rgap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041D\u0430\u0437\u0430\u0434\n    "]))], null, null); }
export function View_ViewPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 45, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ViewPage_1)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "h1", [["class", "me-name"]], null, null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(8, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵeld(10, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(12, 0, null, null, 4, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(14, 0, null, null, 1, "v-photo", [["class", "me-image"]], null, null, null, i2.View_ComponentViewPhoto_0, i2.RenderType_ComponentViewPhoto)), i0.ɵdid(15, 49152, null, 0, i3.ComponentViewPhoto, [], { productId: [0, "productId"], image: [1, "image"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(18, 0, null, null, 4, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(20, 0, null, null, 1, "v-socials", [], null, null, null, i4.View_ComponentViewSocials_0, i4.RenderType_ComponentViewSocials)), i0.ɵdid(21, 49152, null, 0, i5.ComponentViewSocials, [], { description: [0, "description"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(25, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(27, 0, null, null, 1, "v-gallery", [["class", "me-screens col-xs-12"]], null, [[null, "onImageSelect"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onImageSelect" === en)) {
        var pd_0 = (_co.imageSelect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i6.View_ComponentViewGallery_0, i6.RenderType_ComponentViewGallery)), i0.ɵdid(28, 49152, null, 0, i7.ComponentViewGallery, [], { images: [0, "images"], productId: [1, "productId"] }, { onImageSelect: "onImageSelect" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(31, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(33, 0, null, null, 1, "price", [["class", "col-12"]], null, [[null, "onPostPosition"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostPosition" === en)) {
        var pd_0 = (_co.postPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_PriceControl_0, i8.RenderType_PriceControl)), i0.ɵdid(34, 49152, null, 0, i9.PriceControl, [], { product: [0, "product"] }, { onPostPosition: "onPostPosition" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(37, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(39, 0, null, null, 1, "v-information", [["class", "me-info col-md-12 col-lg-6"]], null, null, null, i10.View_ComponentViewInformation_0, i10.RenderType_ComponentViewInformation)), i0.ɵdid(40, 49152, null, 0, i11.ComponentViewInformation, [], { information: [0, "information"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(42, 0, null, null, 1, "v-specification", [["class", "me-info col-md-12 col-lg-6"]], null, null, null, i12.View_ComponentViewSpecification_0, i12.RenderType_ComponentViewSpecification)), i0.ɵdid(43, 49152, null, 0, i13.ComponentViewSpecification, [], { parameters: [0, "parameters"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isBack; _ck(_v, 3, 0, currVal_0); var currVal_3 = _co.product._id; var currVal_4 = _co.selectedImage; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = _co.product.description; _ck(_v, 21, 0, currVal_5); var currVal_6 = _co.product.images; var currVal_7 = _co.product._id; _ck(_v, 28, 0, currVal_6, currVal_7); var currVal_8 = _co.product; _ck(_v, 34, 0, currVal_8); var currVal_9 = _co.product.information; _ck(_v, 40, 0, currVal_9); var currVal_10 = _co.product.parameters; _ck(_v, 43, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.product.name; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.product.details; _ck(_v, 8, 0, currVal_2); }); }
export function View_ViewPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ViewPage_0, RenderType_ViewPage)), i0.ɵdid(1, 49152, null, 0, i14.ViewPage, [i15.ProductProvider, i16.ActivatedRoute, i17.ContractProvider, i18.NavbarService, i19.ConfigService, i20.GlobalService, i16.Router, i21.SeoService], null, null)], null, null); }
var ViewPageNgFactory = i0.ɵccf("ng-component", i14.ViewPage, View_ViewPage_Host_0, {}, {}, []);
export { ViewPageNgFactory as ViewPageNgFactory };
//# sourceMappingURL=view.ngfactory.js.map