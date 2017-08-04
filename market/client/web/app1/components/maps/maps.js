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
let MapsComponent = class MapsComponent {
    constructor(window) {
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
        this.window = window;
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
MapsComponent = __decorate([
    Component({
        selector: 'maps-yandex',
        templateUrl: 'maps.html',
        styles: [`#maps-container {height: 500px;}`]
    }),
    __param(0, Inject('Window')),
    __metadata("design:paramtypes", [Object])
], MapsComponent);
export { MapsComponent };
function nativeWindow() {
    return window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT25FLElBQWEsYUFBYSxHQUExQjtJQUNJLFlBQThCLE1BQU07UUFjcEMsY0FBUyxHQUFHLDRDQUE0QyxDQUFDO1FBS2pELFNBQUksR0FBRztZQUNYLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPO2dCQUN0QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUc7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO3dCQUNuRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixpQkFBaUIsRUFBRSxRQUFRO3FCQUM5QixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDOUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQzFCO3dCQUNJLGNBQWMsRUFBRSwyTEFBMkw7cUJBQzlNLEVBQ0Q7d0JBQ0ksTUFBTSxFQUFFLHVCQUF1Qjt3QkFDL0IsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRSxLQUFLO3FCQUVuQixDQUFDLENBQUM7b0JBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUc7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFTSxZQUFPLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQztRQTdERSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0QsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSTtZQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBc0RKLENBQUE7QUFqRVksYUFBYTtJQUx6QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsV0FBVztRQUN4QixNQUFNLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztLQUMvQyxDQUFDO0lBRWUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O0dBRHBCLGFBQWEsQ0FpRXpCO1NBakVZLGFBQWE7QUFtRTFCO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3R9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFwcy15YW5kZXgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtYXBzLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYCNtYXBzLWNvbnRhaW5lciB7aGVpZ2h0OiA1MDBweDt9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsT25EZXN0cm95IHtcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1dpbmRvdycpIHdpbmRvdyl7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkgdGhpcy5sb2FkKCkudGhlbih0aGlzLnNob3cpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zaG93KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93O1xyXG4gICAgbWFwU2NyaXB0ID0gJ2h0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVSc7XHJcbiAgICBtYXA7XHJcbiAgICBteVBsYWNlbWFyaztcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgcy5zcmMgPSB0aGlzLm1hcFNjcmlwdDtcclxuICAgICAgICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93LnltYXBzKVxyXG4gICAgICAgICAgICB0aGlzLndpbmRvdy55bWFwcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyB0aGlzLndpbmRvdy55bWFwcy5NYXAoXCJtYXBzLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNjY3ODc4NjAsIDM3LjU1MjAxMzg1XSxcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRml0VG9WaWV3cG9ydDogJ2Fsd2F5cydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVBsYWNlbWFyayA9IG5ldyB0aGlzLndpbmRvdy55bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgICAgICAgICAgWzU1LjY2NjkxMTQwLCAzNy41NTI0NjgyMl0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogYNCf0YPQvdC60YIg0YHQsNC80L7QstGL0LLQvtC30LAgR2V0WW91ckJhZy5ydSw8YnIvPtGD0LsuINCf0YDQvtGE0YHQvtGO0LfQvdCw0Y8sINC00L7QvCA0NSwg0YHRgi4g0LzQtdGC0YDQviBcItCd0L7QstGL0LUg0KfQtdGA0ZHQvNGD0YjQutC4XCIsPGJyLz7QotCmIFwi0KbQsNGA0YHQutC+0LUg0YHQtdC70L5cIiwgMC3QuSDRjdGC0LDQtiwg0L7RhNC40YEgQ0RFSy48YnIvPtCS0YXQvtC0INGA0L7QstC90L4g0LIg0YLQvtC8INC80LXRgdGC0LUsINC60L7RgtC+0YDQvtC1INC+0YLQvNC10YfQtdC90L4g0YLQvtGH0LrQvtC5YFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2NpcmNsZURvdEljb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuZ2VvT2JqZWN0cy5hZGQodGhpcy5teVBsYWNlbWFyayk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVBsYWNlbWFyay5iYWxsb29uLm9wZW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93LnltYXBzKVxyXG4gICAgICAgICAgICB0aGlzLm1hcC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgaXNSZWFkeSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLndpbmRvdy55bWFwcztcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBuYXRpdmVXaW5kb3coKTogYW55IHtcclxuICAgIHJldHVybiB3aW5kb3c7XHJcbn1cclxuIl19