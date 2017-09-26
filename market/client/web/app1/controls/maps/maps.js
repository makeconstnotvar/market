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
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
let MapsControl = class MapsControl {
    constructor(platformId, document) {
        this.platformId = platformId;
        this.document = document;
        this.showMaps = true;
        this.mapScript = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        this.load = () => {
            return new Promise(resolve => {
                let s = this.document.createElement('script');
                s.src = this.mapScript;
                s.addEventListener('load', function (e) {
                    resolve();
                }, false);
                this.document.body.appendChild(s);
            });
        };
        this.show = () => {
            if (this._window.ymaps)
                this._window.ymaps.ready(() => {
                    this.map = new this._window.ymaps.Map("maps-container", {
                        center: [55.66787860, 37.55201385],
                        zoom: 16,
                        autoFitToViewport: 'always'
                    });
                    this.myPlacemark = new this._window.ymaps.Placemark([55.66691140, 37.55246822], {
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
            if (this._window.ymaps && this.map)
                this.map.destroy();
        };
        this.isReady = () => {
            return !!this._window.ymaps;
        };
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.isReady())
                this.load().then(this.show);
            else
                this.show();
        }
        else {
            this.showMaps = false;
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.close();
        }
    }
};
MapsControl = __decorate([
    Component({
        selector: 'maps-yandex',
        templateUrl: 'maps.html'
    }),
    __param(0, Inject(PLATFORM_ID)),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Object])
], MapsControl);
export { MapsControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU01RCxJQUFhLFdBQVcsR0FBeEI7SUFDSSxZQUF5QyxVQUFrQixFQUNyQixRQUFhO1FBRFYsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBTW5ELGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUyxHQUFHLDRDQUE0QyxDQUFDO1FBcUJqRCxTQUFJLEdBQUc7WUFDWCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTztnQkFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUc7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO3dCQUNwRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixpQkFBaUIsRUFBRSxRQUFRO3FCQUM5QixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDL0MsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQzFCO3dCQUNJLGNBQWMsRUFBRSwyTEFBMkw7cUJBQzlNLEVBQ0Q7d0JBQ0ksTUFBTSxFQUFFLHVCQUF1Qjt3QkFDL0IsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLFNBQVMsRUFBRSxLQUFLO3FCQUVuQixDQUFDLENBQUM7b0JBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFFTSxVQUFLLEdBQUc7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztRQUVNLFlBQU8sR0FBRztZQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDO1FBdkVFLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFRRCxRQUFRO1FBQ0osRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSTtnQkFBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7Q0FnREosQ0FBQTtBQTVFWSxXQUFXO0lBSnZCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxXQUFXO0tBQzNCLENBQUM7SUFFZSxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNuQixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FEd0IsTUFBTTtHQURsRCxXQUFXLENBNEV2QjtTQTVFWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgUExBVEZPUk1fSUR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFwcy15YW5kZXgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtYXBzLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBzQ29udHJvbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01hcHM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgX3dpbmRvdzogYW55O1xyXG4gICAgbWFwU2NyaXB0ID0gJ2h0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVSc7XHJcbiAgICBtYXA6IGFueTtcclxuICAgIG15UGxhY2VtYXJrOiBhbnk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpLnRoZW4odGhpcy5zaG93KTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnNob3coKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01hcHMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbGV0IHMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBzLnNyYyA9IHRoaXMubWFwU2NyaXB0O1xyXG4gICAgICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl93aW5kb3cueW1hcHMpXHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdy55bWFwcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyB0aGlzLl93aW5kb3cueW1hcHMuTWFwKFwibWFwcy1jb250YWluZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjY2Nzg3ODYwLCAzNy41NTIwMTM4NV0sXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZpdFRvVmlld3BvcnQ6ICdhbHdheXMnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlQbGFjZW1hcmsgPSBuZXcgdGhpcy5fd2luZG93LnltYXBzLlBsYWNlbWFyayhcclxuICAgICAgICAgICAgICAgICAgICBbNTUuNjY2OTExNDAsIDM3LjU1MjQ2ODIyXSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBg0J/Rg9C90LrRgiDRgdCw0LzQvtCy0YvQstC+0LfQsCBHZXRZb3VyQmFnLnJ1LDxici8+0YPQuy4g0J/RgNC+0YTRgdC+0Y7Qt9C90LDRjywg0LTQvtC8IDQ1LCDRgdGCLiDQvNC10YLRgNC+IFwi0J3QvtCy0YvQtSDQp9C10YDRkdC80YPRiNC60LhcIiw8YnIvPtCi0KYgXCLQptCw0YDRgdC60L7QtSDRgdC10LvQvlwiLCAwLdC5INGN0YLQsNC2LCDQvtGE0LjRgSBDREVLLjxici8+0JLRhdC+0LQg0YDQvtCy0L3QviDQsiDRgtC+0Lwg0LzQtdGB0YLQtSwg0LrQvtGC0L7RgNC+0LUg0L7RgtC80LXRh9C10L3QviDRgtC+0YfQutC+0LlgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjY2lyY2xlRG90SWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5nZW9PYmplY3RzLmFkZCh0aGlzLm15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UGxhY2VtYXJrLmJhbGxvb24ub3BlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5fd2luZG93LnltYXBzICYmIHRoaXMubWFwKVxyXG4gICAgICAgICAgICB0aGlzLm1hcC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgaXNSZWFkeSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl93aW5kb3cueW1hcHM7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuIl19