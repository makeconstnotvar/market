import { Component, Input } from "@angular/core";
var ComponentViewSocials = (function () {
    function ComponentViewSocials() {
    }
    ComponentViewSocials.decorators = [
        { type: Component, args: [{
                    selector: 'v-socials',
                    template: "\n<div class=\"me-soc-msg\">\u0415\u0441\u043B\u0438 \u0412\u0430\u043C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0441\u044F \u044D\u0442\u043E\u0442 \u0442\u043E\u0432\u0430\u0440, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043E \u043D\u0435\u043C \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C.</div>\n<a class=\"me-social\" target=\"_blank\" title=\"\u0412 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435\" href=\"https://vk.com/share.php?url={{url}}\"><i class=\"fa fa-vk\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/sharer/sharer.php?u={{url}}\"><i class=\"fa fa-facebook-official\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"Twitter\" href=\"https://twitter.com/intent/tweet?url={{url}}\"><i class=\"fa fa-twitter-square\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438\" href=\"https://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl={{url}}\"><i class=\"fa fa-odnoklassniki-square\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"Google+\" href=\"https://plus.google.com/share?url={{url}}\"><i class=\"fa fa-google-plus-square\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"Linkedin\" href=\"https://www.linkedin.com/shareArticle?url={{url}}\"><i class=\"fa fa-linkedin-square\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"Pinterest\" href=\"https://pinterest.com/pin/create/button/?url={{url}}&description={{description}}&media={{imagePath}}\"><i class=\"fa fa-pinterest-square\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"Tumblr\" href=\"http://www.tumblr.com/share/link?url={{url}}\"><i class=\"fa fa-tumblr-square\"></i></a>\n<a class=\"me-social\" target=\"_blank\" title=\"\u041C\u043E\u0439 \u043C\u0438\u0440\" href=\"https://connect.mail.ru/share?url={{url}}\"><i class=\"fa fa-at\"></i></a>\n"
                },] },
    ];
    ComponentViewSocials.ctorParameters = function () { return []; };
    ComponentViewSocials.propDecorators = {
        "url": [{ type: Input },],
        "description": [{ type: Input },],
        "imagePath": [{ type: Input },],
    };
    return ComponentViewSocials;
}());
export { ComponentViewSocials };
