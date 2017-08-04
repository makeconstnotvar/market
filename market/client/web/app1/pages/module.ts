import {NgModule} from "@angular/core";
import {PageCart} from "./cart/cart/cart";
import {PageHistory} from "./cart/history/history";
import {PageCatalog} from "./catalog/catalog";
import {PageDelivery} from "./delivery/delivery";
import {Layout} from "./layout/layout";
import {PageSpecials} from "./specials/page-specials";
import {PageStocks} from "./stocks/page-stocks";
import {PageView} from "./view/view";
import {ModuleComponents} from "components/module";
import {RouterModule, Routes} from "@angular/router";
import {ModuleComponentsSpecials} from "./specials/components/module";
import {BrowserModule} from "@angular/platform-browser";
import {PageNotfound} from "./notfound/page-notfound";
import {PageContacts} from "./contacts/contacts";
import {ModuleComponentsView} from "./view/components/module";
import {ModuleComponentsCart} from "./cart/components/module";
import {ModuleComponentsCatalog} from "./catalog/components/module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
    {path: '', component: PageSpecials},
    {path: 'delivery', component: PageDelivery},
    {path: 'contacts', component: PageContacts},
    {path: 'cart', component: PageCart},
    {path: 'cart/:order', component: PageHistory},
    {path: 'stocks', component: PageStocks},
    {path: 'notfound', component: PageNotfound},
    {path: ':categoryName/:productId', component: PageView},
    {path: ':categoryName', component: PageCatalog},
    {path: '**', redirectTo: '/notfound'},
];

@NgModule({
    declarations: [
        PageCart,
        PageHistory,
        PageCatalog,
        PageDelivery,
        Layout,
        PageSpecials,
        PageStocks,
        PageView,
        PageNotfound,
        PageContacts
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ModuleComponents,
        ModuleComponentsSpecials,
        ModuleComponentsView,
        ModuleComponentsCart,
        ModuleComponentsCatalog,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        PageCart,
        PageHistory,
        PageCatalog,
        PageDelivery,
        Layout,
        PageSpecials,
        PageStocks,
        PageView,
        PageNotfound,
        PageContacts
    ]
})
export class PagesModule {

}
