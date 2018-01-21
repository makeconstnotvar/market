import {Component, Input} from "@angular/core";
@Component({
    selector: 'v-socials',

    template: `
<div class="me-soc-msg">Если Вам понравился этот товар, Вы можете рассказать о нем своим друзьям.</div>
<a class="me-social" target="_blank" title="В контакте" href="https://vk.com/share.php?url={{url}}&description={{description}}&image={{imagePath}}"><i class="fa fa-vk"></i></a>
<a class="me-social" target="_blank" title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-facebook-official"></i></a>
<a class="me-social" target="_blank" title="Twitter" href="https://twitter.com/intent/tweet?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-twitter-square"></i></a>
<a class="me-social" target="_blank" title="Одноклассники" href="https://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-odnoklassniki-square"></i></a>
<a class="me-social" target="_blank" title="Google+" href="https://plus.google.com/share?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-google-plus-square"></i></a>
<a class="me-social" target="_blank" title="Linkedin" href="https://www.linkedin.com/shareArticle?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-linkedin-square"></i></a>
<a class="me-social" target="_blank" title="Pinterest" href="https://pinterest.com/pin/create/button/?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-pinterest-square"></i></a>
<a class="me-social" target="_blank" title="Tumblr" href="http://www.tumblr.com/share/link?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-tumblr-square"></i></a>
<a class="me-social" target="_blank" title="Мой мир" href="https://connect.mail.ru/share?url={{url}}&description={{description}}&media={{imagePath}}"><i class="fa fa-at"></i></a>
`
})
export class ComponentViewSocials {

    @Input()
    url: string;
    
    @Input()
    description: string;
    
    @Input()
    imagePath: string;
}