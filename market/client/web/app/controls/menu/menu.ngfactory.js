import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./menu";
var styles_MenuControl = [];
var RenderType_MenuControl = i0.ɵcrt({ encapsulation: 2, styles: styles_MenuControl, data: {} });
export { RenderType_MenuControl as RenderType_MenuControl };
function View_MenuControl_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "a", [["class", "menu-item"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 671744, [[2, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵdid(2, 1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i0.ɵted(5, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i0.ɵinlineInterpolate(1, "/", _v.context.$implicit.url, "/"); _ck(_v, 1, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).target; var currVal_1 = i0.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_4); }); }
export function View_MenuControl_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "div", [["class", "d-flex  align-items-center  justify-content-around menu-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MenuControl_1)), i0.ɵdid(5, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categories; _ck(_v, 5, 0, currVal_0); }, null); }
export function View_MenuControl_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "market-menu", [], null, null, null, View_MenuControl_0, RenderType_MenuControl)), i0.ɵdid(1, 49152, null, 0, i3.MenuControl, [], null, null)], null, null); }
var MenuControlNgFactory = i0.ɵccf("market-menu", i3.MenuControl, View_MenuControl_Host_0, { categories: "categories" }, {}, []);
export { MenuControlNgFactory as MenuControlNgFactory };
