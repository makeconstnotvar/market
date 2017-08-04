var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
let FooterComponent = class FooterComponent {
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
FooterComponent = __decorate([
    Component({
        host: { 'class': 'footer' },
        selector: 'market-footer',
        templateUrl: 'footer.html'
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPeEMsSUFBYSxlQUFlLEdBQTVCO0lBTEE7UUFNSSxZQUFPLEdBQUc7WUFDTixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDO1lBQ3RGLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMvRSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLG9DQUFvQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBQztZQUM3RixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDdEYsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1NBQzFGLENBQUE7SUFDTCxDQUFDO0NBQUEsQ0FBQTtBQVRZLGVBQWU7SUFMM0IsU0FBUyxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQztRQUN6QixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO0dBQ1csZUFBZSxDQVMzQjtTQVRZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgaG9zdDogeydjbGFzcyc6ICdmb290ZXInfSxcclxuICAgIHNlbGVjdG9yOiAnbWFya2V0LWZvb3RlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Zvb3Rlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcclxuICAgIHNvY2lhbHMgPSBbXHJcbiAgICAgICAge25hbWU6ICfQktC60L7QvdGC0LDQutGC0LUnLCBsaW5rOiAnaHR0cHM6Ly92ay5jb20vZ2V0eW91cmJhZycsIGljb246ICdmYS12ayd9LFxyXG4gICAgICAgIHtuYW1lOiAnRmFjZWJvb2snLCBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dldHlvdXJiYWdydScsIGljb246ICdmYS1mYWNlYm9vayd9LFxyXG4gICAgICAgIHtuYW1lOiAnVHdpdHRlcicsIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL0dldFlvdXJCYWdSdScsIGljb246ICdmYS10d2l0dGVyJ30sXHJcbiAgICAgICAge25hbWU6ICfQntC00L3QvtC60LvQsNGB0YHQvdC40LrQuCcsIGxpbms6ICdodHRwczovL29rLnJ1L2dyb3VwLzUzNjA0MzExNjMwMDc0JywgaWNvbjogJ2ZhLW9kbm9rbGFzc25pa2knfSxcclxuICAgICAgICB7bmFtZTogJ0luc3RhZ3JhbScsIGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20vZ2V0eW91cmJhZy5ydScsIGljb246ICdmYS1pbnN0YWdyYW0nfSxcclxuICAgICAgICB7bmFtZTogJ1BpbnRlcmVzdCcsIGxpbms6ICdodHRwczovL3d3dy5waW50ZXJlc3QuY29tL2dldHlvdXJiYWcnLCBpY29uOiAnZmEtcGludGVyZXN0J31cclxuICAgIF1cclxufSJdfQ==