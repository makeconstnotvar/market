export class Settings {
    brand: NavbarItem;
    delivery: NavbarItem;
    stocks: NavbarItem;
    cart: NavbarItem;
    phone: NavbarItem;
}

export class NavbarItem {
    icon: string;
    name: string;
    label: string;
    link: string;
    itemprop?:string;

}