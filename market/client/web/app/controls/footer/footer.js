import { Component } from "@angular/core";
export class FooterControl {
    constructor() {
        this.socials = [
            { name: 'Вконтакте', link: 'https://vk.com/getyourbag', icon: 'fa-vk' },
            { name: 'Facebook', link: 'https://www.facebook.com/getyourbagru', icon: 'fa-facebook' },
            { name: 'Twitter', link: 'https://twitter.com/GetYourBagRu', icon: 'fa-twitter' },
            { name: 'Одноклассники', link: 'https://ok.ru/group/53604311630074', icon: 'fa-odnoklassniki' },
            { name: 'Instagram', link: 'https://instagram.com/getyourbag.ru', icon: 'fa-instagram' },
            { name: 'Pinterest', link: 'https://www.pinterest.com/getyourbag', icon: 'fa-pinterest' }
        ];
    }
}
FooterControl.decorators = [
    { type: Component, args: [{
                selector: 'market-footer',
                templateUrl: 'footer.html'
            },] },
];
FooterControl.ctorParameters = () => [];
//# sourceMappingURL=footer.js.map