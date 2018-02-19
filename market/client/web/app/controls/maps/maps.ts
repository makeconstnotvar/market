import {Component, Inject} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {PlatformService} from "../../services/platform";

@Component({
    selector: 'maps-yandex',
    templateUrl: 'maps.html'
})
export class MapsControl {
    constructor(@Inject(DOCUMENT) private document: any,
                private platformService: PlatformService) {
        if (this.platformService.isBrowser) {
            this._window = window;
        }
    }

    showMaps: boolean = true;
    _window: any;
    mapScript = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    map: any;
    myPlacemark: any;

    ngOnInit() {
        if (this.platformService.isBrowser) {
            if (!this.isReady())
                this.load().then(this.show);
            else this.show()
        } else {
            this.showMaps = false;
        }
    }

    ngOnDestroy() {
        if (this.platformService.isBrowser) {
            this.close();
        }
    }


    private load = () => {
        return new Promise(resolve => {
            let s = this.document.createElement('script');
            s.src = this.mapScript;
            s.addEventListener('load', function (e) {
                resolve();
            }, false);
            this.document.body.appendChild(s);
        });
    };

    private show = () => {
        if (this._window.ymaps)
            this._window.ymaps.ready(() => {
                this.map = new this._window.ymaps.Map("maps-container", {
                    center: [55.66787860, 37.55201385],
                    zoom: 16,
                    autoFitToViewport: 'always'
                });
                this.myPlacemark = new this._window.ymaps.Placemark(
                    [55.66691140, 37.55246822],
                    {
                        balloonContent: `Пункт самовывоза GetYourBag.ru,<br/>ул. Профсоюзная, дом 45, ст. метро "Новые Черёмушки",<br/>ТЦ "Царское село", 0-й этаж, офис CDEK.<br/>Вход ровно в том месте, которое отмечено точкой`
                    },
                    {
                        preset: 'islands#circleDotIcon',
                        iconColor: 'red',
                        draggable: false

                    });
                this.map.geoObjects.add(this.myPlacemark);
                this.map.behaviors.disable('scrollZoom');
                this.map.behaviors.disable('drag');
                this.map.container.events.add(['fullscreenenter'], () => {
                    this.map.behaviors.enable('drag');
                });
                this.map.container.events.add(['fullscreenexit'], () => {
                    this.map.behaviors.disable('drag');
                });
                this.myPlacemark.balloon.open();
            });
    };

    private close = () => {
        if (this._window.ymaps && this.map)
            this.map.destroy();
    };

    private isReady = () => {
        return !!this._window.ymaps;
    };

}

