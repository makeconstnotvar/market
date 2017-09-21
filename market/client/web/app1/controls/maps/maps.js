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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNaEQsSUFBYSxXQUFXLEdBQXhCO0lBQ0ksWUFBc0MsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7UUFhNUMsY0FBUyxHQUFHLDRDQUE0QyxDQUFDO1FBS2pELFNBQUksR0FBRztZQUNYLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPO2dCQUN0QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUc7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO3dCQUNuRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixpQkFBaUIsRUFBRSxRQUFRO3FCQUM5QixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDOUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQzFCO3dCQUNJLGNBQWMsRUFBRSwyTEFBMkw7cUJBQzlNLEVBQ0Q7d0JBQ0ksTUFBTSxFQUFFLHVCQUF1Qjt3QkFDL0IsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRSxLQUFLO3FCQUVuQixDQUFDLENBQUM7b0JBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUc7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFTSxZQUFPLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQztJQTVERixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSTtZQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBcURKLENBQUE7QUFoRVksV0FBVztJQUp2QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsV0FBVztLQUMzQixDQUFDO0lBRWUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O0dBRHBCLFdBQVcsQ0FnRXZCO1NBaEVZLFdBQVc7QUFrRXhCO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYXBzLXlhbmRleCcsXG4gICAgdGVtcGxhdGVVcmw6ICdtYXBzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1hcHNDb250cm9sIHtcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdXaW5kb3cnKSBwcml2YXRlIHdpbmRvdykge1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHRoaXMubG9hZCgpLnRoZW4odGhpcy5zaG93KTtcbiAgICAgICAgZWxzZSB0aGlzLnNob3coKVxuICAgIH1cblxuXG4gICAgbWFwU2NyaXB0ID0gJ2h0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVSc7XG4gICAgbWFwO1xuICAgIG15UGxhY2VtYXJrO1xuXG5cbiAgICBwcml2YXRlIGxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzLnNyYyA9IHRoaXMubWFwU2NyaXB0O1xuICAgICAgICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy53aW5kb3cueW1hcHMpXG4gICAgICAgICAgICB0aGlzLndpbmRvdy55bWFwcy5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgdGhpcy53aW5kb3cueW1hcHMuTWFwKFwibWFwcy1jb250YWluZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS42Njc4Nzg2MCwgMzcuNTUyMDEzODVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxNixcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZpdFRvVmlld3BvcnQ6ICdhbHdheXMnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5teVBsYWNlbWFyayA9IG5ldyB0aGlzLndpbmRvdy55bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFs1NS42NjY5MTE0MCwgMzcuNTUyNDY4MjJdLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogYNCf0YPQvdC60YIg0YHQsNC80L7QstGL0LLQvtC30LAgR2V0WW91ckJhZy5ydSw8YnIvPtGD0LsuINCf0YDQvtGE0YHQvtGO0LfQvdCw0Y8sINC00L7QvCA0NSwg0YHRgi4g0LzQtdGC0YDQviBcItCd0L7QstGL0LUg0KfQtdGA0ZHQvNGD0YjQutC4XCIsPGJyLz7QotCmIFwi0KbQsNGA0YHQutC+0LUg0YHQtdC70L5cIiwgMC3QuSDRjdGC0LDQtiwg0L7RhNC40YEgQ0RFSy48YnIvPtCS0YXQvtC0INGA0L7QstC90L4g0LIg0YLQvtC8INC80LXRgdGC0LUsINC60L7RgtC+0YDQvtC1INC+0YLQvNC10YfQtdC90L4g0YLQvtGH0LrQvtC5YFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2NpcmNsZURvdEljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5nZW9PYmplY3RzLmFkZCh0aGlzLm15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xuICAgICAgICAgICAgICAgIHRoaXMubXlQbGFjZW1hcmsuYmFsbG9vbi5vcGVuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBjbG9zZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMud2luZG93LnltYXBzKVxuICAgICAgICAgICAgdGhpcy5tYXAuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMud2luZG93LnltYXBzO1xuICAgIH07XG5cbn1cblxuZnVuY3Rpb24gbmF0aXZlV2luZG93KCk6IGFueSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbn1cbiJdfQ==