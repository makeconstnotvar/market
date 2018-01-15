import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./photo";
var styles_ComponentViewPhoto = [];
var RenderType_ComponentViewPhoto = i0.ɵcrt({ encapsulation: 2, styles: styles_ComponentViewPhoto, data: {} });
export { RenderType_ComponentViewPhoto as RenderType_ComponentViewPhoto };
function View_ComponentViewPhoto_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "img", [["class", "img-fluid"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", ((("/photos/" + _co.productId) + "/l_") + _co.image), ""); _ck(_v, 0, 0, currVal_0); }); }
export function View_ComponentViewPhoto_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_ComponentViewPhoto_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.image; _ck(_v, 1, 0, currVal_0); }, null); }
export function View_ComponentViewPhoto_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "v-photo", [], null, null, null, View_ComponentViewPhoto_0, RenderType_ComponentViewPhoto)), i0.ɵdid(1, 49152, null, 0, i2.ComponentViewPhoto, [], null, null)], null, null); }
var ComponentViewPhotoNgFactory = i0.ɵccf("v-photo", i2.ComponentViewPhoto, View_ComponentViewPhoto_Host_0, { productId: "productId", image: "image" }, {}, []);
export { ComponentViewPhotoNgFactory as ComponentViewPhotoNgFactory };
//# sourceMappingURL=photo.ngfactory.js.map