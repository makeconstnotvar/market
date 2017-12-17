import * as i0 from "@angular/core";
import * as i1 from "./components/title/title.ngfactory";
import * as i2 from "./components/title/title";
import * as i3 from "./components/photo/photo.ngfactory";
import * as i4 from "./components/photo/photo";
import * as i5 from "./components/socials/socials.ngfactory";
import * as i6 from "./components/socials/socials";
import * as i7 from "./components/gallery/gallery.ngfactory";
import * as i8 from "./components/gallery/gallery";
import * as i9 from "../../controls/price/price.ngfactory";
import * as i10 from "../../controls/price/price";
import * as i11 from "./components/information/information.ngfactory";
import * as i12 from "./components/information/information";
import * as i13 from "./components/specification/specification.ngfactory";
import * as i14 from "./components/specification/specification";
import * as i15 from "./view";
import * as i16 from "../../providers/product";
import * as i17 from "@angular/router";
import * as i18 from "../../providers/contract";
import * as i19 from "../../services/navbar";
import * as i20 from "../../services/config";
import * as i21 from "../../services/global";
import * as i22 from "../../services/seo1";
var styles_ViewPage = [];
var RenderType_ViewPage = i0.ɵcrt({ encapsulation: 2, styles: styles_ViewPage, data: {} });
export { RenderType_ViewPage as RenderType_ViewPage };
export function View_ViewPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 43, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "v-title", [["class", "me-info col-xs-12"]], null, [[null, "onBack"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onBack" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_ComponentViewTitle_0, i1.RenderType_ComponentViewTitle)), i0.ɵdid(5, 49152, null, 0, i2.ComponentViewTitle, [], { name: [0, "name"], details: [1, "details"], isBack: [2, "isBack"] }, { onBack: "onBack" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(8, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(10, 0, null, null, 4, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(12, 0, null, null, 1, "v-photo", [["class", "me-image"]], null, null, null, i3.View_ComponentViewPhoto_0, i3.RenderType_ComponentViewPhoto)), i0.ɵdid(13, 49152, null, 0, i4.ComponentViewPhoto, [], { productId: [0, "productId"], image: [1, "image"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(16, 0, null, null, 4, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "v-socials", [], null, null, null, i5.View_ComponentViewSocials_0, i5.RenderType_ComponentViewSocials)), i0.ɵdid(19, 49152, null, 0, i6.ComponentViewSocials, [], { description: [0, "description"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(23, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "v-gallery", [["class", "me-screens col-xs-12"]], null, [[null, "onImageSelect"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onImageSelect" === en)) {
        var pd_0 = (_co.imageSelect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_ComponentViewGallery_0, i7.RenderType_ComponentViewGallery)), i0.ɵdid(26, 49152, null, 0, i8.ComponentViewGallery, [], { images: [0, "images"], productId: [1, "productId"] }, { onImageSelect: "onImageSelect" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(29, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(31, 0, null, null, 1, "price", [["class", "col-12"]], null, [[null, "onPostPosition"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostPosition" === en)) {
        var pd_0 = (_co.postPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i9.View_PriceControl_0, i9.RenderType_PriceControl)), i0.ɵdid(32, 49152, null, 0, i10.PriceControl, [], { product: [0, "product"] }, { onPostPosition: "onPostPosition" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(35, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(37, 0, null, null, 1, "v-information", [["class", "me-info col-md-12 col-lg-6"]], null, null, null, i11.View_ComponentViewInformation_0, i11.RenderType_ComponentViewInformation)), i0.ɵdid(38, 49152, null, 0, i12.ComponentViewInformation, [], { information: [0, "information"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(40, 0, null, null, 1, "v-specification", [["class", "me-info col-md-12 col-lg-6"]], null, null, null, i13.View_ComponentViewSpecification_0, i13.RenderType_ComponentViewSpecification)), i0.ɵdid(41, 49152, null, 0, i14.ComponentViewSpecification, [], { parameters: [0, "parameters"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.product.name; var currVal_1 = _co.product.details; var currVal_2 = _co.isBack; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.product._id; var currVal_4 = _co.selectedImage; _ck(_v, 13, 0, currVal_3, currVal_4); var currVal_5 = _co.product.description; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.product.images; var currVal_7 = _co.product._id; _ck(_v, 26, 0, currVal_6, currVal_7); var currVal_8 = _co.product; _ck(_v, 32, 0, currVal_8); var currVal_9 = _co.product.information; _ck(_v, 38, 0, currVal_9); var currVal_10 = _co.product.parameters; _ck(_v, 41, 0, currVal_10); }, null); }
export function View_ViewPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ViewPage_0, RenderType_ViewPage)), i0.ɵdid(1, 49152, null, 0, i15.ViewPage, [i16.ProductProvider, i17.ActivatedRoute, i18.ContractProvider, i19.NavbarService, i20.ConfigService, i21.GlobalService, i17.Router, i22.SeoService], null, null)], null, null); }
var ViewPageNgFactory = i0.ɵccf("ng-component", i15.ViewPage, View_ViewPage_Host_0, {}, {}, []);
export { ViewPageNgFactory as ViewPageNgFactory };
//# sourceMappingURL=view.ngfactory.js.map