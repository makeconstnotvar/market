import * as i0 from "@angular/core";
import * as i1 from "../controls/navbar/navbar.ngfactory";
import * as i2 from "../controls/navbar/navbar";
import * as i3 from "../services/navbar";
import * as i4 from "../controls/jumbotron/jumbotron.ngfactory";
import * as i5 from "../controls/jumbotron/jumbotron";
import * as i6 from "../controls/menu/menu.ngfactory";
import * as i7 from "../controls/menu/menu";
import * as i8 from "@angular/router";
import * as i9 from "../controls/footer/footer.ngfactory";
import * as i10 from "../controls/footer/footer";
import * as i11 from "./default";
import * as i12 from "../providers/category";
import * as i13 from "../providers/contract";
var styles_DefaultLayout = [];
var RenderType_DefaultLayout = i0.ɵcrt({ encapsulation: 2, styles: styles_DefaultLayout, data: {} });
export { RenderType_DefaultLayout as RenderType_DefaultLayout };
export function View_DefaultLayout_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 13, "div", [["class", "sticky-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "market-navbar", [["class", "navbar"]], null, null, null, i1.View_NavbarControl_0, i1.RenderType_NavbarControl)), i0.ɵdid(4, 49152, null, 0, i2.NavbarControl, [i3.NavbarService], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "jumbotron", [], null, null, null, i4.View_JumbotronControl_0, i4.RenderType_JumbotronControl)), i0.ɵdid(7, 245760, null, 0, i5.JumbotronControl, [i0.PLATFORM_ID], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(9, 0, null, null, 1, "market-menu", [], null, null, null, i6.View_MenuControl_0, i6.RenderType_MenuControl)), i0.ɵdid(10, 49152, null, 0, i7.MenuControl, [], { categories: [0, "categories"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(12, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(13, 212992, null, 0, i8.RouterOutlet, [i8.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(16, 0, null, null, 1, "market-footer", [], null, null, null, i9.View_FooterControl_0, i9.RenderType_FooterControl)), i0.ɵdid(17, 49152, null, 0, i10.FooterControl, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 7, 0); var currVal_0 = _co.categories; _ck(_v, 10, 0, currVal_0); _ck(_v, 13, 0); }, null); }
export function View_DefaultLayout_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "default", [["class", "sticky"]], null, null, null, View_DefaultLayout_0, RenderType_DefaultLayout)), i0.ɵdid(1, 49152, null, 0, i11.DefaultLayout, [i12.CategoryProvider, i13.ContractProvider, i3.NavbarService], null, null)], null, null); }
var DefaultLayoutNgFactory = i0.ɵccf("default", i11.DefaultLayout, View_DefaultLayout_Host_0, {}, {}, []);
export { DefaultLayoutNgFactory as DefaultLayoutNgFactory };
//# sourceMappingURL=default.ngfactory.js.map