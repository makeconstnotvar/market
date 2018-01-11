import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
var MapsControl = (function () {
    function MapsControl(platformId, document) {
        var _this = this;
        this.platformId = platformId;
        this.document = document;
        this.showMaps = true;
        this.mapScript = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        this.load = function () {
            return new Promise(function (resolve) {
                var s = _this.document.createElement('script');
                s.src = _this.mapScript;
                s.addEventListener('load', function (e) {
                    resolve();
                }, false);
                _this.document.body.appendChild(s);
            });
        };
        this.show = function () {
            if (_this._window.ymaps)
                _this._window.ymaps.ready(function () {
                    _this.map = new _this._window.ymaps.Map("maps-container", {
                        center: [55.66787860, 37.55201385],
                        zoom: 16,
                        autoFitToViewport: 'always'
                    });
                    _this.myPlacemark = new _this._window.ymaps.Placemark([55.66691140, 37.55246822], {
                        balloonContent: "\u041F\u0443\u043D\u043A\u0442 \u0441\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437\u0430 GetYourBag.ru,<br/>\u0443\u043B. \u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u0430\u044F, \u0434\u043E\u043C 45, \u0441\u0442. \u043C\u0435\u0442\u0440\u043E \"\u041D\u043E\u0432\u044B\u0435 \u0427\u0435\u0440\u0451\u043C\u0443\u0448\u043A\u0438\",<br/>\u0422\u0426 \"\u0426\u0430\u0440\u0441\u043A\u043E\u0435 \u0441\u0435\u043B\u043E\", 0-\u0439 \u044D\u0442\u0430\u0436, \u043E\u0444\u0438\u0441 CDEK.<br/>\u0412\u0445\u043E\u0434 \u0440\u043E\u0432\u043D\u043E \u0432 \u0442\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E \u0442\u043E\u0447\u043A\u043E\u0439"
                    }, {
                        preset: 'islands#circleDotIcon',
                        iconColor: 'red',
                        draggable: false
                    });
                    _this.map.geoObjects.add(_this.myPlacemark);
                    _this.map.behaviors.disable('scrollZoom');
                    _this.map.behaviors.disable('drag');
                    _this.map.container.events.add(['fullscreenenter'], function () {
                        _this.map.behaviors.enable('drag');
                    });
                    _this.map.container.events.add(['fullscreenexit'], function () {
                        _this.map.behaviors.disable('drag');
                    });
                    _this.myPlacemark.balloon.open();
                });
        };
        this.close = function () {
            if (_this._window.ymaps && _this.map)
                _this.map.destroy();
        };
        this.isReady = function () {
            return !!_this._window.ymaps;
        };
        if (isPlatformBrowser(this.platformId)) {
            this._window = window;
        }
    }
    MapsControl.prototype.ngOnInit = function () {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.isReady())
                this.load().then(this.show);
            else
                this.show();
        }
        else {
            this.showMaps = false;
        }
    };
    MapsControl.prototype.ngOnDestroy = function () {
        if (isPlatformBrowser(this.platformId)) {
            this.close();
        }
    };
    MapsControl.decorators = [
        { type: Component, args: [{
                    selector: 'maps-yandex',
                    templateUrl: 'maps.html'
                },] },
    ];
    MapsControl.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    return MapsControl;
}());
export { MapsControl };
