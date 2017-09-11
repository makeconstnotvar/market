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
MapsControl = __decorate([
    Component({
        selector: 'maps-yandex',
        templateUrl: 'maps.html',
        styles: [`#maps-container {height: 500px;}`]
    }),
    __param(0, Inject('Window')),
    __metadata("design:paramtypes", [Object])
], MapsControl);
export { MapsControl };
function nativeWindow() {
    return window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT25FLElBQWEsV0FBVyxHQUF4QjtJQUNJLFlBQThCLE1BQU07UUFjcEMsY0FBUyxHQUFHLDRDQUE0QyxDQUFDO1FBS2pELFNBQUksR0FBRztZQUNYLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPO2dCQUN0QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUc7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO3dCQUNuRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixpQkFBaUIsRUFBRSxRQUFRO3FCQUM5QixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDOUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQzFCO3dCQUNJLGNBQWMsRUFBRSwyTEFBMkw7cUJBQzlNLEVBQ0Q7d0JBQ0ksTUFBTSxFQUFFLHVCQUF1Qjt3QkFDL0IsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRSxLQUFLO3FCQUVuQixDQUFDLENBQUM7b0JBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUc7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFTSxZQUFPLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQztRQTdERSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0QsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSTtZQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBc0RKLENBQUE7QUFqRVksV0FBVztJQUx2QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsV0FBVztRQUN4QixNQUFNLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztLQUMvQyxDQUFDO0lBRWUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O0dBRHBCLFdBQVcsQ0FpRXZCO1NBakVZLFdBQVc7QUFtRXhCO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3R9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFwcy15YW5kZXgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtYXBzLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYCNtYXBzLWNvbnRhaW5lciB7aGVpZ2h0OiA1MDBweDt9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcHNDb250cm9se1xyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnV2luZG93Jykgd2luZG93KXtcclxuICAgICAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB0aGlzLmxvYWQoKS50aGVuKHRoaXMuc2hvdyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNob3coKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3c7XHJcbiAgICBtYXBTY3JpcHQgPSAnaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvMi4xLz9sYW5nPXJ1X1JVJztcclxuICAgIG1hcDtcclxuICAgIG15UGxhY2VtYXJrO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBzLnNyYyA9IHRoaXMubWFwU2NyaXB0O1xyXG4gICAgICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc2hvdyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy53aW5kb3cueW1hcHMpXHJcbiAgICAgICAgICAgIHRoaXMud2luZG93LnltYXBzLnJlYWR5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IHRoaXMud2luZG93LnltYXBzLk1hcChcIm1hcHMtY29udGFpbmVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS42Njc4Nzg2MCwgMzcuNTUyMDEzODVdLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9GaXRUb1ZpZXdwb3J0OiAnYWx3YXlzJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UGxhY2VtYXJrID0gbmV3IHRoaXMud2luZG93LnltYXBzLlBsYWNlbWFyayhcclxuICAgICAgICAgICAgICAgICAgICBbNTUuNjY2OTExNDAsIDM3LjU1MjQ2ODIyXSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBg0J/Rg9C90LrRgiDRgdCw0LzQvtCy0YvQstC+0LfQsCBHZXRZb3VyQmFnLnJ1LDxici8+0YPQuy4g0J/RgNC+0YTRgdC+0Y7Qt9C90LDRjywg0LTQvtC8IDQ1LCDRgdGCLiDQvNC10YLRgNC+IFwi0J3QvtCy0YvQtSDQp9C10YDRkdC80YPRiNC60LhcIiw8YnIvPtCi0KYgXCLQptCw0YDRgdC60L7QtSDRgdC10LvQvlwiLCAwLdC5INGN0YLQsNC2LCDQvtGE0LjRgSBDREVLLjxici8+0JLRhdC+0LQg0YDQvtCy0L3QviDQsiDRgtC+0Lwg0LzQtdGB0YLQtSwg0LrQvtGC0L7RgNC+0LUg0L7RgtC80LXRh9C10L3QviDRgtC+0YfQutC+0LlgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjY2lyY2xlRG90SWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5nZW9PYmplY3RzLmFkZCh0aGlzLm15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UGxhY2VtYXJrLmJhbGxvb24ub3BlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy53aW5kb3cueW1hcHMpXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmRlc3Ryb3koKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlYWR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMud2luZG93LnltYXBzO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdGl2ZVdpbmRvdygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHdpbmRvdztcclxufVxyXG4iXX0=