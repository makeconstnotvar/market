import {Component, OnInit, OnDestroy, Inject} from "@angular/core";

@Component({
    selector: 'maps-yandex',
    templateUrl: 'maps.html',
    styles: [`#maps-container {height: 500px;}`]
})
export class MapsControl{
    constructor(@Inject('Window') window){
        this.window = window;
    }
    ngOnDestroy(): void {
        this.close();
    }

    ngOnInit(): void {
        if (!this.isReady()) this.load().then(this.show);
        else this.show()
    }


    window;
    mapScript = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    map;
    myPlacemark;


    private load = () => {
        return new Promise(resolve => {
            let s = document.createElement('script');
            s.src = this.mapScript;
            s.addEventListener('load', function (e) {
                resolve();
            }, false);
            document.body.appendChild(s);
        });
    };

    private show = () => {
        if (this.window.ymaps)
            this.window.ymaps.ready(() => {
                this.map = new this.window.ymaps.Map("maps-container", {
                    center: [55.66787860, 37.55201385],
                    zoom: 16,
                    autoFitToViewport: 'always'
                });
                this.myPlacemark = new this.window.ymaps.Placemark(
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
                this.myPlacemark.balloon.open();
            });
    };

    private close = () => {
        if (this.window.ymaps)
            this.map.destroy();
    };

    private isReady = () => {
        return !!this.window.ymaps;
    };

}

function nativeWindow(): any {
    return window;
}
