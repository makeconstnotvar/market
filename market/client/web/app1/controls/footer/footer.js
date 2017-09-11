var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
let FooterControl = class FooterControl {
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
};
FooterControl = __decorate([
    Component({
        host: { 'class': 'footer' },
        selector: 'market-footer',
        templateUrl: 'footer.html'
    })
], FooterControl);
export { FooterControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPeEMsSUFBYSxhQUFhLEdBQTFCO0lBTEE7UUFNSSxZQUFPLEdBQUc7WUFDTixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDO1lBQ3RGLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMvRSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLG9DQUFvQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBQztZQUM3RixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDdEYsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1NBQzFGLENBQUE7SUFDTCxDQUFDO0NBQUEsQ0FBQTtBQVRZLGFBQWE7SUFMekIsU0FBUyxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQztRQUN6QixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO0dBQ1csYUFBYSxDQVN6QjtTQVRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgaG9zdDogeydjbGFzcyc6ICdmb290ZXInfSxcclxuICAgIHNlbGVjdG9yOiAnbWFya2V0LWZvb3RlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Zvb3Rlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udHJvbCB7XHJcbiAgICBzb2NpYWxzID0gW1xyXG4gICAgICAgIHtuYW1lOiAn0JLQutC+0L3RgtCw0LrRgtC1JywgbGluazogJ2h0dHBzOi8vdmsuY29tL2dldHlvdXJiYWcnLCBpY29uOiAnZmEtdmsnfSxcclxuICAgICAgICB7bmFtZTogJ0ZhY2Vib29rJywgbGluazogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9nZXR5b3VyYmFncnUnLCBpY29uOiAnZmEtZmFjZWJvb2snfSxcclxuICAgICAgICB7bmFtZTogJ1R3aXR0ZXInLCBsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9HZXRZb3VyQmFnUnUnLCBpY29uOiAnZmEtdHdpdHRlcid9LFxyXG4gICAgICAgIHtuYW1lOiAn0J7QtNC90L7QutC70LDRgdGB0L3QuNC60LgnLCBsaW5rOiAnaHR0cHM6Ly9vay5ydS9ncm91cC81MzYwNDMxMTYzMDA3NCcsIGljb246ICdmYS1vZG5va2xhc3NuaWtpJ30sXHJcbiAgICAgICAge25hbWU6ICdJbnN0YWdyYW0nLCBsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2dldHlvdXJiYWcucnUnLCBpY29uOiAnZmEtaW5zdGFncmFtJ30sXHJcbiAgICAgICAge25hbWU6ICdQaW50ZXJlc3QnLCBsaW5rOiAnaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9nZXR5b3VyYmFnJywgaWNvbjogJ2ZhLXBpbnRlcmVzdCd9XHJcbiAgICBdXHJcbn0iXX0=