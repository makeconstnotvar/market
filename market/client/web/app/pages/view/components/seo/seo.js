import { Component, Input } from "@angular/core";
var ComponentViewSeo = (function () {
    function ComponentViewSeo() {
    }
    ComponentViewSeo.decorators = [
        { type: Component, args: [{
                    selector: 'v-seo',
                    template: "\n<div [innerHtml]=\"seo\"></div>\n"
                },] },
    ];
    ComponentViewSeo.ctorParameters = function () { return []; };
    ComponentViewSeo.propDecorators = {
        "seo": [{ type: Input },],
    };
    return ComponentViewSeo;
}());
export { ComponentViewSeo };
