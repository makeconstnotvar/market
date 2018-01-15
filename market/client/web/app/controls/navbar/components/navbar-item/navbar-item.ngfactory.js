import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./navbar-item";
var styles_NavbarItemComponent = [];
var RenderType_NavbarItemComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NavbarItemComponent, data: {} });
export { RenderType_NavbarItemComponent as RenderType_NavbarItemComponent };
export function View_NavbarItemComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "a", [["class", "navbar-item__link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 671744, [[2, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i0.ɵdid(2, 1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i0.ɵeld(5, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(8, 0, null, null, 1, "b", [["class", "navbar-item__label"]], null, null, null, null, null)), (_l()(), i0.ɵted(9, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵinlineInterpolate(1, "", _co.data.link, ""); _ck(_v, 1, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 1).target; var currVal_1 = i0.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = i0.ɵinlineInterpolate(1, "fa ", _co.data.icon, " rgap hidden-xs-down"); _ck(_v, 5, 0, currVal_4); var currVal_5 = _co.data.name; _ck(_v, 6, 0, currVal_5); var currVal_6 = _co.data.label; _ck(_v, 9, 0, currVal_6); }); }
export function View_NavbarItemComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "navbar-item", [], null, null, null, View_NavbarItemComponent_0, RenderType_NavbarItemComponent)), i0.ɵdid(1, 49152, null, 0, i3.NavbarItemComponent, [], null, null)], null, null); }
var NavbarItemComponentNgFactory = i0.ɵccf("navbar-item", i3.NavbarItemComponent, View_NavbarItemComponent_Host_0, { data: "data" }, {}, []);
export { NavbarItemComponentNgFactory as NavbarItemComponentNgFactory };
