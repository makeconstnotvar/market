map.$inject = ['$window', '$q'];

function map($window, $q) {

    var marScript = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU',map,myPlacemark;

    function load() {
        var deferred = $q.defer();
        var s = document.createElement('script');
        s.src = marScript;
        s.addEventListener('load', function (e) {
            deferred.resolve();
        }, false);
        document.body.appendChild(s);
        return deferred.promise;
    }

    function show() {
        if (ymaps)
            ymaps.ready(function () {
                map = new ymaps.Map("mb-map", {
                    center: [55.66787860, 37.55201385],
                    zoom: 16,
                    autoFitToViewport: 'always'
                });
                myPlacemark = new ymaps.Placemark(
                    [55.66691140, 37.55246822],
                    {
                        balloonContent: 'Пункт самовывоза GetYourBag.ru,<br/>ул. Профсоюзная, дом 45, ст. метро "Новые Черёмушки",<br/>ТЦ "Царское село", 0-й этаж, офис CDEK.<br/>Вход ровно в том месте, которое отмечено точкой'
                    },
                    {
                        preset: 'islands#circleDotIcon',
                        iconColor: 'red',
                        draggable: false

                    });
                map.geoObjects.add(myPlacemark);
                map.behaviors.disable('scrollZoom');
                myPlacemark.balloon.open();
            });
    }

    function close() {
        if (ymaps)
            map.destroy();
    }

    function isReady() {
        return !!$window.ymaps;
    }

    return {
        show: show,
        load: load,
        close: close,
        isReady: isReady
    }
}

angular.module('router').service('Map', map);