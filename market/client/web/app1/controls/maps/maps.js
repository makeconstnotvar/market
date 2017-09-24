var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from "@angular/core";
let MapsControl = class MapsControl {
    constructor(window) {
        this.window = window;
        this.mapScript = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        this.load = () => {
            return new Promise(resolve => {
                let s = document.createElement('script');
                s.src = this.mapScript;
                s.addEventListener('load', function (e) {
                    resolve();
                }, false);
                document.body.appendChild(s);
            });
        };
        this.show = () => {
            if (this.window.ymaps)
                this.window.ymaps.ready(() => {
                    this.map = new this.window.ymaps.Map("maps-container", {
                        center: [55.66787860, 37.55201385],
                        zoom: 16,
                        autoFitToViewport: 'always'
                    });
                    this.myPlacemark = new this.window.ymaps.Placemark([55.66691140, 37.55246822], {
                        balloonContent: `Пункт самовывоза GetYourBag.ru,<br/>ул. Профсоюзная, дом 45, ст. метро "Новые Черёмушки",<br/>ТЦ "Царское село", 0-й этаж, офис CDEK.<br/>Вход ровно в том месте, которое отмечено точкой`
                    }, {
                        preset: 'islands#circleDotIcon',
                        iconColor: 'red',
                        draggable: false
                    });
                    this.map.geoObjects.add(this.myPlacemark);
                    this.map.behaviors.disable('scrollZoom');
                    this.myPlacemark.balloon.open();
                });
        };
        this.close = () => {
            if (this.window.ymaps)
                this.map.destroy();
        };
        this.isReady = () => {
            return !!this.window.ymaps;
        };
    }
    ngOnDestroy() {
        this.close();
    }
    ngOnInit() {
        if (!this.isReady())
            this.load().then(this.show);
        else
            this.show();
    }
};
MapsControl = __decorate([
    Component({
        selector: 'maps-yandex',
        templateUrl: 'maps.html'
    }),
    __param(0, Inject('Window')),
    __metadata("design:paramtypes", [Object])
], MapsControl);
export { MapsControl };
function nativeWindow() {
    return window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNaEQsSUFBYSxXQUFXLEdBQXhCO0lBQ0ksWUFBc0MsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7UUFhNUMsY0FBUyxHQUFHLDRDQUE0QyxDQUFDO1FBS2pELFNBQUksR0FBRztZQUNYLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPO2dCQUN0QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUc7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO3dCQUNuRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixpQkFBaUIsRUFBRSxRQUFRO3FCQUM5QixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDOUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQzFCO3dCQUNJLGNBQWMsRUFBRSwyTEFBMkw7cUJBQzlNLEVBQ0Q7d0JBQ0ksTUFBTSxFQUFFLHVCQUF1Qjt3QkFDL0IsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRSxLQUFLO3FCQUVuQixDQUFDLENBQUM7b0JBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUc7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFTSxZQUFPLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQztJQTVERixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSTtZQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBcURKLENBQUE7QUFoRVksV0FBVztJQUp2QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsV0FBVztLQUMzQixDQUFDO0lBRWUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O0dBRHBCLFdBQVcsQ0FnRXZCO1NBaEVZLFdBQVc7QUFrRXhCO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXBzLXlhbmRleCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21hcHMuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcHNDb250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgd2luZG93KSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHRoaXMubG9hZCgpLnRoZW4odGhpcy5zaG93KTtcclxuICAgICAgICBlbHNlIHRoaXMuc2hvdygpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1hcFNjcmlwdCA9ICdodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS8yLjEvP2xhbmc9cnVfUlUnO1xyXG4gICAgbWFwO1xyXG4gICAgbXlQbGFjZW1hcms7XHJcblxyXG5cclxuICAgIHByaXZhdGUgbG9hZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHMuc3JjID0gdGhpcy5tYXBTY3JpcHQ7XHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLndpbmRvdy55bWFwcylcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cueW1hcHMucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgdGhpcy53aW5kb3cueW1hcHMuTWFwKFwibWFwcy1jb250YWluZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjY2Nzg3ODYwLCAzNy41NTIwMTM4NV0sXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZpdFRvVmlld3BvcnQ6ICdhbHdheXMnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlQbGFjZW1hcmsgPSBuZXcgdGhpcy53aW5kb3cueW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgICAgICAgICAgICAgIFs1NS42NjY5MTE0MCwgMzcuNTUyNDY4MjJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IGDQn9GD0L3QutGCINGB0LDQvNC+0LLRi9Cy0L7Qt9CwIEdldFlvdXJCYWcucnUsPGJyLz7Rg9C7LiDQn9GA0L7RhNGB0L7RjtC30L3QsNGPLCDQtNC+0LwgNDUsINGB0YIuINC80LXRgtGA0L4gXCLQndC+0LLRi9C1INCn0LXRgNGR0LzRg9GI0LrQuFwiLDxici8+0KLQpiBcItCm0LDRgNGB0LrQvtC1INGB0LXQu9C+XCIsIDAt0Lkg0Y3RgtCw0LYsINC+0YTQuNGBIENERUsuPGJyLz7QktGF0L7QtCDRgNC+0LLQvdC+INCyINGC0L7QvCDQvNC10YHRgtC1LCDQutC+0YLQvtGA0L7QtSDQvtGC0LzQtdGH0LXQvdC+INGC0L7Rh9C60L7QuWBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2V0OiAnaXNsYW5kcyNjaXJjbGVEb3RJY29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLmdlb09iamVjdHMuYWRkKHRoaXMubXlQbGFjZW1hcmspO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlQbGFjZW1hcmsuYmFsbG9vbi5vcGVuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLndpbmRvdy55bWFwcylcclxuICAgICAgICAgICAgdGhpcy5tYXAuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGlzUmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy53aW5kb3cueW1hcHM7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbmF0aXZlV2luZG93KCk6IGFueSB7XHJcbiAgICByZXR1cm4gd2luZG93O1xyXG59XHJcbiJdfQ==