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
        selector: 'market-footer',
        templateUrl: 'footer.html'
    })
], FooterControl);
export { FooterControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNeEMsSUFBYSxhQUFhLEdBQTFCO0lBSkE7UUFLSSxZQUFPLEdBQUc7WUFDTixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDO1lBQ3RGLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMvRSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLG9DQUFvQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBQztZQUM3RixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDdEYsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1NBQzFGLENBQUE7SUFDTCxDQUFDO0NBQUEsQ0FBQTtBQVRZLGFBQWE7SUFKekIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLGFBQWE7S0FDN0IsQ0FBQztHQUNXLGFBQWEsQ0FTekI7U0FUWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFya2V0LWZvb3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdmb290ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udHJvbCB7XG4gICAgc29jaWFscyA9IFtcbiAgICAgICAge25hbWU6ICfQktC60L7QvdGC0LDQutGC0LUnLCBsaW5rOiAnaHR0cHM6Ly92ay5jb20vZ2V0eW91cmJhZycsIGljb246ICdmYS12ayd9LFxuICAgICAgICB7bmFtZTogJ0ZhY2Vib29rJywgbGluazogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9nZXR5b3VyYmFncnUnLCBpY29uOiAnZmEtZmFjZWJvb2snfSxcbiAgICAgICAge25hbWU6ICdUd2l0dGVyJywgbGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20vR2V0WW91ckJhZ1J1JywgaWNvbjogJ2ZhLXR3aXR0ZXInfSxcbiAgICAgICAge25hbWU6ICfQntC00L3QvtC60LvQsNGB0YHQvdC40LrQuCcsIGxpbms6ICdodHRwczovL29rLnJ1L2dyb3VwLzUzNjA0MzExNjMwMDc0JywgaWNvbjogJ2ZhLW9kbm9rbGFzc25pa2knfSxcbiAgICAgICAge25hbWU6ICdJbnN0YWdyYW0nLCBsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2dldHlvdXJiYWcucnUnLCBpY29uOiAnZmEtaW5zdGFncmFtJ30sXG4gICAgICAgIHtuYW1lOiAnUGludGVyZXN0JywgbGluazogJ2h0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vZ2V0eW91cmJhZycsIGljb246ICdmYS1waW50ZXJlc3QnfVxuICAgIF1cbn0iXX0=