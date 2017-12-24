import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./title";
var styles_ComponentViewTitle = [];
var RenderType_ComponentViewTitle = i0.ɵcrt({ encapsulation: 2, styles: styles_ComponentViewTitle, data: {} });
export { RenderType_ComponentViewTitle as RenderType_ComponentViewTitle };
function View_ComponentViewTitle_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["class", "btn btn-red pull-right m-back"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.back() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "fa fa-chevron-left rgap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041D\u0430\u0437\u0430\u0434\n"]))], null, null); }
export function View_ComponentViewTitle_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_ComponentViewTitle_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "h1", [["class", "me-name"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(6, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isBack; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.details; _ck(_v, 6, 0, currVal_2); }); }
export function View_ComponentViewTitle_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "v-title", [["class", "me-info col-xs-12"]], null, null, null, View_ComponentViewTitle_0, RenderType_ComponentViewTitle)), i0.ɵdid(1, 49152, null, 0, i2.ComponentViewTitle, [], null, null)], null, null); }
var ComponentViewTitleNgFactory = i0.ɵccf("v-title", i2.ComponentViewTitle, View_ComponentViewTitle_Host_0, { name: "name", details: "details", isBack: "isBack" }, { onBack: "onBack" }, []);
export { ComponentViewTitleNgFactory as ComponentViewTitleNgFactory };
//# sourceMappingURL=title.ngfactory.js.map