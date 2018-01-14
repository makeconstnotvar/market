import * as i0 from "@angular/core";
import * as i1 from "./module";
import * as i2 from "../layouts/root";
import * as i3 from "../layouts/default.ngfactory";
import * as i4 from "../pages/specials/specials.ngfactory";
import * as i5 from "../pages/delivery/delivery.ngfactory";
import * as i6 from "../pages/contacts/contacts.ngfactory";
import * as i7 from "../pages/cart/cart/cart.ngfactory";
import * as i8 from "../pages/cart/history/history.ngfactory";
import * as i9 from "../pages/stocks/stocks.ngfactory";
import * as i10 from "../pages/view/view.ngfactory";
import * as i11 from "../pages/catalog/catalog.ngfactory";
import * as i12 from "../pages/notfound/page-notfound.ngfactory";
import * as i13 from "../layouts/root.ngfactory";
import * as i14 from "@angular/common";
import * as i15 from "@angular/platform-browser";
import * as i16 from "@angular/platform-server";
import * as i17 from "@angular/animations/browser";
import * as i18 from "@angular/platform-browser/animations";
import * as i19 from "@angular/common/http";
import * as i20 from "@angular/forms";
import * as i21 from "@angular/router";
import * as i22 from "../providers/category";
import * as i23 from "../providers/contract";
import * as i24 from "../providers/parameter";
import * as i25 from "../providers/product";
import * as i26 from "../services/navbar";
import * as i27 from "../services/parameters";
import * as i28 from "../services/sort";
import * as i29 from "../services/seo";
import * as i30 from "../services/config";
import * as i31 from "../services/status";
import * as i32 from "@nguniversal/express-engine/src/tokens";
import * as i33 from "@angular/http";
import * as i34 from "@angular/animations";
import * as i35 from "../services/interceptor";
import * as i36 from "../services/universal";
import * as i37 from "../providers/settings";
import * as i38 from "../module";
import * as i39 from "../layouts/default";
import * as i40 from "../pages/specials/specials";
import * as i41 from "../pages/delivery/delivery";
import * as i42 from "../pages/contacts/contacts";
import * as i43 from "../pages/cart/cart/cart";
import * as i44 from "../pages/cart/history/history";
import * as i45 from "../pages/stocks/stocks";
import * as i46 from "../pages/view/view";
import * as i47 from "../pages/catalog/catalog";
import * as i48 from "../pages/notfound/page-notfound";
import * as i49 from "../controls/module";
import * as i50 from "../pages/specials/components/module";
import * as i51 from "../pages/view/components/module";
import * as i52 from "../pages/cart/components/module";
import * as i53 from "../pages/catalog/components/module";
import * as i54 from "../pages/module";
import * as i55 from "../layouts/module";
import * as i56 from "../services/global";
import * as i57 from "../services/state";
import * as i58 from "../services/platform";
var ServerAppModuleNgFactory = i0.ɵcmf(i1.ServerAppModule, [i2.RootLayout], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.DefaultLayoutNgFactory, i4.SpecialsPageNgFactory, i5.DeliveryPageNgFactory, i6.ContactsPageNgFactory, i7.CartPageNgFactory, i8.HistoryPageNgFactory, i9.StocksPageNgFactory, i10.ViewPageNgFactory, i11.CatalogPageNgFactory, i12.NotfoundPageNgFactory, i13.RootLayoutNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i14.NgLocalization, i14.NgLocaleLocalization, [i0.LOCALE_ID, [2, i14.ɵa]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i15.DomSanitizer, i15.ɵe, [i14.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i15.DomSanitizer]), i0.ɵmpd(4608, i15.HAMMER_GESTURE_CONFIG, i15.HammerGestureConfig, []), i0.ɵmpd(5120, i15.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i15.ɵDomEventsPlugin(p0_0, p0_1), new i15.ɵKeyEventsPlugin(p1_0), new i15.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i14.DOCUMENT, i0.NgZone, i14.DOCUMENT, i14.DOCUMENT, i15.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i15.EventManager, i15.EventManager, [i15.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i15.ɵDomSharedStylesHost, i15.ɵDomSharedStylesHost, [i14.DOCUMENT]), i0.ɵmpd(4608, i15.ɵDomRendererFactory2, i15.ɵDomRendererFactory2, [i15.EventManager, i15.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i16.ɵc, i16.ɵc, [i15.DOCUMENT, [2, i15.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i15.ɵSharedStylesHost, null, [i16.ɵc]), i0.ɵmpd(4608, i16.ɵServerRendererFactory2, i16.ɵServerRendererFactory2, [i0.NgZone, i15.DOCUMENT, i15.ɵSharedStylesHost]), i0.ɵmpd(4608, i17.AnimationDriver, i17.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i17.ɵAnimationStyleNormalizer, i18.ɵd, []), i0.ɵmpd(4608, i17.ɵAnimationEngine, i18.ɵb, [i17.AnimationDriver, i17.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i16.ɵa, [i16.ɵServerRendererFactory2, i17.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i15.Meta, i15.Meta, [i14.DOCUMENT]), i0.ɵmpd(4608, i15.Title, i15.Title, [i14.DOCUMENT]), i0.ɵmpd(4608, i19.ɵd, i19.ɵd, []), i0.ɵmpd(4608, i20.ɵi, i20.ɵi, []), i0.ɵmpd(5120, i21.ActivatedRoute, i21.ɵf, [i21.Router]), i0.ɵmpd(4608, i21.NoPreloading, i21.NoPreloading, []), i0.ɵmpd(6144, i21.PreloadingStrategy, null, [i21.NoPreloading]), i0.ɵmpd(135680, i21.RouterPreloader, i21.RouterPreloader, [i21.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i21.PreloadingStrategy]), i0.ɵmpd(4608, i21.PreloadAllModules, i21.PreloadAllModules, []), i0.ɵmpd(5120, i21.ROUTER_INITIALIZER, i21.ɵi, [i21.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i21.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i22.CategoryProvider, i22.CategoryProvider, [i19.HttpClient]), i0.ɵmpd(4608, i23.ContractProvider, i23.ContractProvider, [i19.HttpClient]), i0.ɵmpd(4608, i24.ParameterProvider, i24.ParameterProvider, [i19.HttpClient]), i0.ɵmpd(4608, i25.ProductProvider, i25.ProductProvider, [i19.HttpClient]), i0.ɵmpd(4608, i26.NavbarService, i26.NavbarService, []), i0.ɵmpd(4608, i27.ParametersService, i27.ParametersService, []), i0.ɵmpd(4608, i28.SortingService, i28.SortingService, []), i0.ɵmpd(4608, i29.SeoService, i29.SeoService, [i15.Meta, i15.Title, i21.Router, i30.ConfigService]), i0.ɵmpd(4608, i31.ServerResponseService, i31.ServerResponseService, [[2, i32.RESPONSE]]), i0.ɵmpd(4608, i33.BrowserXhr, i16.ɵd, []), i0.ɵmpd(4608, i33.ResponseOptions, i33.BaseResponseOptions, []), i0.ɵmpd(4608, i33.XSRFStrategy, i16.ɵe, []), i0.ɵmpd(4608, i33.XHRBackend, i33.XHRBackend, [i33.BrowserXhr, i33.ResponseOptions, i33.XSRFStrategy]), i0.ɵmpd(4608, i33.RequestOptions, i33.BaseRequestOptions, []), i0.ɵmpd(5120, i33.Http, i16.ɵf, [i33.XHRBackend, i33.RequestOptions]), i0.ɵmpd(4608, i34.AnimationBuilder, i18.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i15.DOCUMENT]), i0.ɵmpd(512, i14.CommonModule, i14.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i15.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i21.ɵb()]; }, []), i0.ɵmpd(512, i21.ɵg, i21.ɵg, [i0.Injector]), i0.ɵmpd(512, i19.XhrFactory, i16.ɵd, []), i0.ɵmpd(512, i19.HttpXhrBackend, i19.HttpXhrBackend, [i19.XhrFactory]), i0.ɵmpd(2048, i19.HttpBackend, null, [i19.HttpXhrBackend]), i0.ɵmpd(256, i19.ɵe, "XSRF-TOKEN", []), i0.ɵmpd(512, i19.HttpXsrfTokenExtractor, i19.ɵg, [i14.DOCUMENT, i0.PLATFORM_ID, i19.ɵe]), i0.ɵmpd(256, i19.ɵf, "X-XSRF-TOKEN", []), i0.ɵmpd(512, i19.ɵh, i19.ɵh, [i19.HttpXsrfTokenExtractor, i19.ɵf]), i0.ɵmpd(1024, i19.HTTP_INTERCEPTORS, function (p0_0, p1_0, p2_0, p2_1) { return [p0_0, new i35.RequestInterceptor(p1_0), new i36.UniversalInterceptor(p2_0, p2_1)]; }, [i19.ɵh, i0.Injector, [2, "serverUrl"], i32.REQUEST]), i0.ɵmpd(1024, i19.HttpHandler, i16.ɵg, [i19.HttpBackend, [2, i19.HTTP_INTERCEPTORS]]), i0.ɵmpd(512, i19.HttpClient, i19.HttpClient, [i19.HttpHandler]), i0.ɵmpd(512, i30.ConfigService, i30.ConfigService, []), i0.ɵmpd(512, i37.SettingsProvider, i37.SettingsProvider, [i19.HttpClient, i30.ConfigService]), i0.ɵmpd(256, i0.APP_ID, "BD484954-6626-4699-86BD-AF9CA21F0DE8", []), i0.ɵmpd(2048, i15.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p3_0, p3_1, p3_2) { return [i15.ɵh(p0_0), i21.ɵh(p1_0), i38.ɵ0(p2_0), i15.ɵf(p3_0, p3_1, p3_2)]; }, [[2, i0.NgProbeToken], i21.ɵg, i37.SettingsProvider, i15.ɵTRANSITION_ID, i14.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i15.BrowserModule, i15.BrowserModule, [[3, i15.BrowserModule]]), i0.ɵmpd(512, i19.HttpClientXsrfModule, i19.HttpClientXsrfModule, []), i0.ɵmpd(512, i19.HttpClientModule, i19.HttpClientModule, []), i0.ɵmpd(1024, i21.ɵa, i21.ɵd, [[3, i21.Router]]), i0.ɵmpd(512, i21.UrlSerializer, i21.DefaultUrlSerializer, []), i0.ɵmpd(512, i21.ChildrenOutletContexts, i21.ChildrenOutletContexts, []), i0.ɵmpd(256, i21.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i14.LocationStrategy, i21.ɵc, [i14.PlatformLocation, [2, i14.APP_BASE_HREF], i21.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i14.Location, i14.Location, [i14.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i21.ROUTES, function () { return [[{ path: "", component: i39.DefaultLayout, children: [{ path: "", component: i40.SpecialsPage }, { path: "delivery", component: i41.DeliveryPage }, { path: "contacts", component: i42.ContactsPage }, { path: "cart", component: i43.CartPage }, { path: "cart/:contract", component: i44.HistoryPage }, { path: "stocks", component: i45.StocksPage }, { path: ":categoryName/:productId", component: i46.ViewPage }, { path: ":categoryName", component: i47.CatalogPage }, { path: "**", component: i48.NotfoundPage }] }]]; }, []), i0.ɵmpd(1024, i21.Router, i21.ɵe, [i0.ApplicationRef, i21.UrlSerializer, i21.ChildrenOutletContexts, i14.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i21.ROUTES, i21.ROUTER_CONFIGURATION, [2, i21.UrlHandlingStrategy], [2, i21.RouteReuseStrategy]]), i0.ɵmpd(512, i21.RouterModule, i21.RouterModule, [[2, i21.ɵa], [2, i21.Router]]), i0.ɵmpd(512, i49.ControlsModule, i49.ControlsModule, []), i0.ɵmpd(512, i50.ModuleComponentsSpecials, i50.ModuleComponentsSpecials, []), i0.ɵmpd(512, i51.ModuleComponentsView, i51.ModuleComponentsView, []), i0.ɵmpd(512, i20.ɵba, i20.ɵba, []), i0.ɵmpd(512, i20.FormsModule, i20.FormsModule, []), i0.ɵmpd(512, i52.ModuleComponentsCart, i52.ModuleComponentsCart, []), i0.ɵmpd(512, i53.ModuleComponentsCatalog, i53.ModuleComponentsCatalog, []), i0.ɵmpd(512, i54.PagesModule, i54.PagesModule, []), i0.ɵmpd(512, i55.LayoutsModule, i55.LayoutsModule, []), i0.ɵmpd(512, i56.GlobalService, i56.GlobalService, []), i0.ɵmpd(512, i57.StateService, i57.StateService, []), i0.ɵmpd(512, i58.PlatformService, i58.PlatformService, [i0.PLATFORM_ID]), i0.ɵmpd(512, i38.ApplicationModule, i38.ApplicationModule, [i21.Router, i56.GlobalService, i57.StateService, i58.PlatformService]), i0.ɵmpd(512, i33.HttpModule, i33.HttpModule, []), i0.ɵmpd(512, i18.NoopAnimationsModule, i18.NoopAnimationsModule, []), i0.ɵmpd(512, i16.ServerModule, i16.ServerModule, []), i0.ɵmpd(512, i1.ServerAppModule, i1.ServerAppModule, [])]); });
export { ServerAppModuleNgFactory as ServerAppModuleNgFactory };
