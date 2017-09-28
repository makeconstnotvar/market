/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './module';
import * as i2 from './layouts/default.ngfactory';
import * as i3 from './pages/specials/specials.ngfactory';
import * as i4 from './pages/delivery/delivery.ngfactory';
import * as i5 from './pages/contacts/contacts.ngfactory';
import * as i6 from './pages/cart/cart/cart.ngfactory';
import * as i7 from './pages/cart/history/history.ngfactory';
import * as i8 from './pages/stocks/stocks.ngfactory';
import * as i9 from './pages/notfound/page-notfound.ngfactory';
import * as i10 from './pages/view/view.ngfactory';
import * as i11 from './pages/catalog/catalog.ngfactory';
import * as i12 from '@angular/common';
import * as i13 from '@angular/platform-browser';
import * as i14 from '@angular/animations/browser';
import * as i15 from '@angular/platform-browser/animations';
import * as i16 from '@angular/animations';
import * as i17 from '@angular/forms';
import * as i18 from '@angular/router';
import * as i19 from './providers/category';
import * as i20 from '@angular/http';
import * as i21 from './providers/parameter';
import * as i22 from './providers/product';
import * as i23 from './services/parameters';
import * as i24 from './services/sort';
import * as i25 from './services/config';
import * as i26 from './providers/settings';
import * as i27 from './providers/index';
import * as i28 from './layouts/default';
import * as i29 from './pages/specials/specials';
import * as i30 from './pages/delivery/delivery';
import * as i31 from './pages/contacts/contacts';
import * as i32 from './pages/cart/cart/cart';
import * as i33 from './pages/cart/history/history';
import * as i34 from './pages/stocks/stocks';
import * as i35 from './pages/notfound/page-notfound';
import * as i36 from './pages/view/view';
import * as i37 from './pages/catalog/catalog';
import * as i38 from './controls/module';
import * as i39 from './pages/specials/components/module';
import * as i40 from './pages/view/components/module';
import * as i41 from './pages/cart/components/module';
import * as i42 from './pages/catalog/components/module';
import * as i43 from './pages/module';
import * as i44 from './layouts/module';
import * as i45 from './services/global';
import * as i46 from './providers/contract';
import * as i47 from './services/navbar';
export const ApplicationModuleNgFactory:i0.NgModuleFactory<i1.ApplicationModule> = i0.ɵcmf(i1.ApplicationModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.DefaultLayoutNgFactory,i3.SpecialsPageNgFactory,i4.DeliveryPageNgFactory,
              i5.ContactsPageNgFactory,i6.CartPageNgFactory,i7.HistoryPageNgFactory,
              i8.StocksPageNgFactory,i9.NotfoundPageNgFactory,i10.ViewPageNgFactory,
              i11.CatalogPageNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i12.NgLocalization,
              i12.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,
              ([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i13.DomSanitizer,
              i13.ɵe,[i12.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i13.DomSanitizer]),
          i0.ɵmpd(4608,i13.HAMMER_GESTURE_CONFIG,i13.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i13.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i13.ɵDomEventsPlugin(p0_0),new i13.ɵKeyEventsPlugin(p1_0),
                new i13.ɵHammerGesturesPlugin(p2_0,p2_1)];
          },[i12.DOCUMENT,i12.DOCUMENT,i12.DOCUMENT,i13.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i13.EventManager,i13.EventManager,[i13.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i13.ɵDomSharedStylesHost,i13.ɵDomSharedStylesHost,[i12.DOCUMENT]),
          i0.ɵmpd(4608,i13.ɵDomRendererFactory2,i13.ɵDomRendererFactory2,[i13.EventManager,
              i13.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i14.AnimationDriver,i15.ɵc,([] as any[])),
          i0.ɵmpd(5120,i14.ɵAnimationStyleNormalizer,i15.ɵd,([] as any[])),i0.ɵmpd(4608,
              i14.ɵAnimationEngine,i15.ɵb,[i14.AnimationDriver,i14.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i15.ɵe,[i13.ɵDomRendererFactory2,i14.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i13.ɵSharedStylesHost,(null as any),[i13.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i13.Meta,
              i13.Meta,[i12.DOCUMENT]),i0.ɵmpd(4608,i13.Title,i13.Title,[i12.DOCUMENT]),
          i0.ɵmpd(4608,i16.AnimationBuilder,i15.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
              i13.DOCUMENT]),i0.ɵmpd(4608,i17.ɵi,i17.ɵi,([] as any[])),i0.ɵmpd(5120,
              i18.ActivatedRoute,i18.ɵf,[i18.Router]),i0.ɵmpd(4608,i18.NoPreloading,
              i18.NoPreloading,([] as any[])),i0.ɵmpd(6144,i18.PreloadingStrategy,
              (null as any),[i18.NoPreloading]),i0.ɵmpd(135680,i18.RouterPreloader,
              i18.RouterPreloader,[i18.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i18.PreloadingStrategy]),i0.ɵmpd(4608,i18.PreloadAllModules,
              i18.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i18.ROUTER_INITIALIZER,
              i18.ɵi,[i18.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i18.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i19.CategoryProvider,i19.CategoryProvider,
              [i20.Http]),i0.ɵmpd(4608,i21.ParameterProvider,i21.ParameterProvider,
              [i20.Http]),i0.ɵmpd(4608,i22.ProductProvider,i22.ProductProvider,[i20.Http]),
          i0.ɵmpd(4608,i23.ParametersService,i23.ParametersService,([] as any[])),
          i0.ɵmpd(4608,i24.SortingService,i24.SortingService,([] as any[])),i0.ɵmpd(512,
              i12.CommonModule,i12.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i13.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i18.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i18.ɵg,i18.ɵg,[i0.Injector]),i0.ɵmpd(512,i20.BrowserXhr,
              i20.BrowserXhr,([] as any[])),i0.ɵmpd(512,i20.ResponseOptions,i20.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(1024,i20.XSRFStrategy,i20.ɵb,([] as any[])),i0.ɵmpd(512,
              i20.XHRBackend,i20.XHRBackend,[i20.BrowserXhr,i20.ResponseOptions,i20.XSRFStrategy]),
          i0.ɵmpd(512,i20.RequestOptions,i20.BaseRequestOptions,([] as any[])),i0.ɵmpd(1024,
              i20.Http,i20.ɵc,[i20.XHRBackend,i20.RequestOptions]),i0.ɵmpd(512,i25.ConfigService,
              i25.ConfigService,([] as any[])),i0.ɵmpd(512,i26.SettingsProvider,i26.SettingsProvider,
              [i20.Http,i25.ConfigService]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,
              p0_1:any,p1_0:any,p2_0:any) => {
            return [i13.ɵc(p0_0,p0_1),i18.ɵh(p1_0),i27.SettingsFactory(p2_0)];
          },[[2,i13.NgProbeToken],[2,i0.NgProbeToken],i18.ɵg,i26.SettingsProvider]),
          i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),
          i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,
              i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),i0.ɵmpd(2048,
              i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i13.BrowserModule,
              i13.BrowserModule,[[3,i13.BrowserModule]]),i0.ɵmpd(512,i20.HttpModule,
              i20.HttpModule,([] as any[])),i0.ɵmpd(512,i15.BrowserAnimationsModule,
              i15.BrowserAnimationsModule,([] as any[])),i0.ɵmpd(1024,i18.ɵa,i18.ɵd,
              [[3,i18.Router]]),i0.ɵmpd(512,i18.UrlSerializer,i18.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i18.ChildrenOutletContexts,i18.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i18.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i12.LocationStrategy,i18.ɵc,[i12.PlatformLocation,[2,i12.APP_BASE_HREF],
              i18.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i12.Location,i12.Location,[i12.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i18.ROUTES,() => {
            return [[{path:'',component:i28.DefaultLayout,children:[{path:'',component:i29.SpecialsPage},
                {path:'delivery',component:i30.DeliveryPage},{path:'contacts',component:i31.ContactsPage},
                {path:'cart',component:i32.CartPage},{path:'cart/:contract',component:i33.HistoryPage},
                {path:'stocks',component:i34.StocksPage},{path:'notfound',component:i35.NotfoundPage},
                {path:':categoryName/:productId',component:i36.ViewPage},{path:':categoryName',
                    component:i37.CatalogPage},{path:'**',redirectTo:'/notfound'}]}]];
          },([] as any[])),i0.ɵmpd(1024,i18.Router,i18.ɵe,[i0.ApplicationRef,i18.UrlSerializer,
              i18.ChildrenOutletContexts,i12.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i18.ROUTES,i18.ROUTER_CONFIGURATION,[2,i18.UrlHandlingStrategy],
              [2,i18.RouteReuseStrategy]]),i0.ɵmpd(512,i18.RouterModule,i18.RouterModule,
              [[2,i18.ɵa],[2,i18.Router]]),i0.ɵmpd(512,i38.ControlsModule,i38.ControlsModule,
              ([] as any[])),i0.ɵmpd(512,i39.ModuleComponentsSpecials,i39.ModuleComponentsSpecials,
              ([] as any[])),i0.ɵmpd(512,i40.ModuleComponentsView,i40.ModuleComponentsView,
              ([] as any[])),i0.ɵmpd(512,i17.ɵba,i17.ɵba,([] as any[])),i0.ɵmpd(512,
              i17.FormsModule,i17.FormsModule,([] as any[])),i0.ɵmpd(512,i41.ModuleComponentsCart,
              i41.ModuleComponentsCart,([] as any[])),i0.ɵmpd(512,i42.ModuleComponentsCatalog,
              i42.ModuleComponentsCatalog,([] as any[])),i0.ɵmpd(512,i43.PagesModule,
              i43.PagesModule,([] as any[])),i0.ɵmpd(512,i44.LayoutsModule,i44.LayoutsModule,
              ([] as any[])),i0.ɵmpd(512,i45.GlobalService,i45.GlobalService,([] as any[])),
          i0.ɵmpd(512,i46.ContractProvider,i46.ContractProvider,[i20.Http]),i0.ɵmpd(512,
              i47.NavbarService,i47.NavbarService,([] as any[])),i0.ɵmpd(512,i1.ApplicationModule,
              i1.ApplicationModule,[i18.Router,i45.GlobalService,i46.ContractProvider,
                  i47.NavbarService])]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvbW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1Byb2plY3RzL21hcmtldC9tYXJrZXQvY2xpZW50L3dlYi9hcHAxL21vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==