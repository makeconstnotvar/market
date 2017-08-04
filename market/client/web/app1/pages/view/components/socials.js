var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
let ComponentViewSocials = class ComponentViewSocials {
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewSocials.prototype, "url", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewSocials.prototype, "description", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentViewSocials.prototype, "imagePath", void 0);
ComponentViewSocials = __decorate([
    Component({
        selector: 'v-socials',
        template: `
<div class="me-soc-msg">Если Вам понравился этот товар, Вы можете рассказать о нем своим друзьям.</div>
<a class="me-social" target="_blank" title="В контакте" href="https://vk.com/share.php?url={{url}}"><i class="fa fa-vk"></i></a>
<a class="me-social" target="_blank" title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><i class="fa fa-facebook-official"></i></a>
<a class="me-social" target="_blank" title="Twitter" href="https://twitter.com/intent/tweet?url={{url}}"><i class="fa fa-twitter-square"></i></a>
<a class="me-social" target="_blank" title="Одноклассники" href="https://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl={{url}}"><i class="fa fa-odnoklassniki-square"></i></a>
<a class="me-social" target="_blank" title="Google+" href="https://plus.google.com/share?url={{url}}"><i class="fa fa-google-plus-square"></i></a>
<a class="me-social" target="_blank" title="Linkedin" href="https://www.linkedin.com/shareArticle?url={{url}}"><i class="fa fa-linkedin-square"></i></a>
<a class="me-social" target="_blank" title="Pinterest" href="https://pinterest.com/pin/create/button/?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-pinterest-square"></i></a>
<a class="me-social" target="_blank" title="Tumblr" href="http://www.tumblr.com/share/link?url={{url}}"><i class="fa fa-tumblr-square"></i></a>
<a class="me-social" target="_blank" title="Мой мир" href="https://connect.mail.ru/share?url={{url}}"><i class="fa fa-at"></i></a>
`
    })
], ComponentViewSocials);
export { ComponentViewSocials };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvY2lhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFpQi9DLElBQWEsb0JBQW9CLEdBQWpDO0NBVUMsQ0FBQTtBQVBHO0lBREMsS0FBSyxFQUFFOztpREFDSTtBQUdaO0lBREMsS0FBSyxFQUFFOzt5REFDWTtBQUdwQjtJQURDLEtBQUssRUFBRTs7dURBQ1U7QUFUVCxvQkFBb0I7SUFoQmhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBRXJCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Q0FXYjtLQUNBLENBQUM7R0FDVyxvQkFBb0IsQ0FVaEM7U0FWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2LXNvY2lhbHMnLFxyXG5cclxuICAgIHRlbXBsYXRlOiBgXHJcbjxkaXYgY2xhc3M9XCJtZS1zb2MtbXNnXCI+0JXRgdC70Lgg0JLQsNC8INC/0L7QvdGA0LDQstC40LvRgdGPINGN0YLQvtGCINGC0L7QstCw0YAsINCS0Ysg0LzQvtC20LXRgtC1INGA0LDRgdGB0LrQsNC30LDRgtGMINC+INC90LXQvCDRgdCy0L7QuNC8INC00YDRg9C30YzRj9C8LjwvZGl2PlxyXG48YSBjbGFzcz1cIm1lLXNvY2lhbFwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwi0JIg0LrQvtC90YLQsNC60YLQtVwiIGhyZWY9XCJodHRwczovL3ZrLmNvbS9zaGFyZS5waHA/dXJsPXt7dXJsfX1cIj48aSBjbGFzcz1cImZhIGZhLXZrXCI+PC9pPjwvYT5cclxuPGEgY2xhc3M9XCJtZS1zb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PXt7dXJsfX1cIj48aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rLW9mZmljaWFsXCI+PC9pPjwvYT5cclxuPGEgY2xhc3M9XCJtZS1zb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIlR3aXR0ZXJcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPXt7dXJsfX1cIj48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXItc3F1YXJlXCI+PC9pPjwvYT5cclxuPGEgY2xhc3M9XCJtZS1zb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cItCe0LTQvdC+0LrQu9Cw0YHRgdC90LjQutC4XCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEmc3QuX3N1cmw9e3t1cmx9fVwiPjxpIGNsYXNzPVwiZmEgZmEtb2Rub2tsYXNzbmlraS1zcXVhcmVcIj48L2k+PC9hPlxyXG48YSBjbGFzcz1cIm1lLXNvY2lhbFwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiR29vZ2xlK1wiIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9e3t1cmx9fVwiPjxpIGNsYXNzPVwiZmEgZmEtZ29vZ2xlLXBsdXMtc3F1YXJlXCI+PC9pPjwvYT5cclxuPGEgY2xhc3M9XCJtZS1zb2NpYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkxpbmtlZGluXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/dXJsPXt7dXJsfX1cIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluLXNxdWFyZVwiPjwvaT48L2E+XHJcbjxhIGNsYXNzPVwibWUtc29jaWFsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJQaW50ZXJlc3RcIiBocmVmPVwiaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz91cmw9e3t1cmx9fSZkZXNjcmlwdGlvbj17e2Rlc2NyaXB0aW9ufX0mbWVkaWE9e3tpbWFnZVBhdGh9fVwiPjxpIGNsYXNzPVwiZmEgZmEtcGludGVyZXN0LXNxdWFyZVwiPjwvaT48L2E+XHJcbjxhIGNsYXNzPVwibWUtc29jaWFsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJUdW1ibHJcIiBocmVmPVwiaHR0cDovL3d3dy50dW1ibHIuY29tL3NoYXJlL2xpbms/dXJsPXt7dXJsfX1cIj48aSBjbGFzcz1cImZhIGZhLXR1bWJsci1zcXVhcmVcIj48L2k+PC9hPlxyXG48YSBjbGFzcz1cIm1lLXNvY2lhbFwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwi0JzQvtC5INC80LjRgFwiIGhyZWY9XCJodHRwczovL2Nvbm5lY3QubWFpbC5ydS9zaGFyZT91cmw9e3t1cmx9fVwiPjxpIGNsYXNzPVwiZmEgZmEtYXRcIj48L2k+PC9hPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRWaWV3U29jaWFscyB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIFxyXG4gICAgQElucHV0KClcclxuICAgIGltYWdlUGF0aDogc3RyaW5nO1xyXG59Il19