import * as i0 from "@angular/core";
import * as i1 from "./components/welcome/welcome.ngfactory";
import * as i2 from "./components/welcome/welcome";
import * as i3 from "./components/products/products.ngfactory";
import * as i4 from "./components/products/products";
import * as i5 from "./components/seo/seo.ngfactory";
import * as i6 from "./components/seo/seo";
import * as i7 from "./specials";
import * as i8 from "../../providers/product";
import * as i9 from "../../providers/contract";
import * as i10 from "../../services/navbar";
import * as i11 from "../../services/seo1";
import * as i12 from "../../providers/settings";
import * as i13 from "../../services/config";
var styles_SpecialsPage = [];
var RenderType_SpecialsPage = i0.ɵcrt({ encapsulation: 2, styles: styles_SpecialsPage, data: {} });
export { RenderType_SpecialsPage as RenderType_SpecialsPage };
export function View_SpecialsPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "sp-welcome", [["class", "row"]], null, null, null, i1.View_ComponentSpecialsWelcome_0, i1.RenderType_ComponentSpecialsWelcome)), i0.ɵdid(3, 49152, null, 0, i2.ComponentSpecialsWelcome, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "sp-products", [["class", "row"]], null, [[null, "onPostPosition"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostPosition" === en)) {
        var pd_0 = (_co.postPosition($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i3.View_ComponentSpecialsProducts_0, i3.RenderType_ComponentSpecialsProducts)), i0.ɵdid(6, 49152, null, 0, i4.ComponentSpecialsProducts, [], { products: [0, "products"] }, { onPostPosition: "onPostPosition" }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(9, 0, null, null, 1, "sp-seo", [["class", "row"]], null, null, null, i5.View_ComponentSpecialsSeo_0, i5.RenderType_ComponentSpecialsSeo)), i0.ɵdid(10, 49152, null, 0, i6.ComponentSpecialsSeo, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.products; _ck(_v, 6, 0, currVal_0); }, null); }
export function View_SpecialsPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "specials", [], null, null, null, View_SpecialsPage_0, RenderType_SpecialsPage)), i0.ɵdid(1, 114688, null, 0, i7.SpecialsPage, [i8.ProductProvider, i9.ContractProvider, i10.NavbarService, i11.SeoService, i12.SettingsProvider, i13.ConfigService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SpecialsPageNgFactory = i0.ɵccf("specials", i7.SpecialsPage, View_SpecialsPage_Host_0, {}, {}, []);
export { SpecialsPageNgFactory as SpecialsPageNgFactory };
//# sourceMappingURL=specials.ngfactory.js.map