import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./gallery";
var styles_ComponentViewGallery = [];
var RenderType_ComponentViewGallery = i0.ɵcrt({ encapsulation: 2, styles: styles_ComponentViewGallery, data: {} });
export { RenderType_ComponentViewGallery as RenderType_ComponentViewGallery };
function View_ComponentViewGallery_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "a", [["class", "me-link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.imageSelect(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "mm-active": 0 }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(4, 0, null, null, 0, "img", [["class", "img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "me-link"; var currVal_1 = _ck(_v, 2, 0, (_co.selected == _v.context.index)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵinlineInterpolate(1, "", ((("/photos/" + _co.productId) + "/m_") + _v.context.$implicit), ""); _ck(_v, 4, 0, currVal_2); }); }
export function View_ComponentViewGallery_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_ComponentViewGallery_1)), i0.ɵdid(1, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images; _ck(_v, 1, 0, currVal_0); }, null); }
export function View_ComponentViewGallery_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "v-gallery", [["class", "me-screens col-xs-12"]], null, null, null, View_ComponentViewGallery_0, RenderType_ComponentViewGallery)), i0.ɵdid(1, 49152, null, 0, i2.ComponentViewGallery, [], null, null)], null, null); }
var ComponentViewGalleryNgFactory = i0.ɵccf("v-gallery", i2.ComponentViewGallery, View_ComponentViewGallery_Host_0, { images: "images", productId: "productId" }, { onImageSelect: "onImageSelect" }, []);
export { ComponentViewGalleryNgFactory as ComponentViewGalleryNgFactory };
//# sourceMappingURL=gallery.ngfactory.js.map