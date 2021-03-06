$(function () {
    if (window.ymaps)
        window.ymaps.ready(function(){
            var map = new window.ymaps.Map("maps-container", {
                center: [55.66787860, 37.55201385],
                zoom: 16,
                autoFitToViewport: 'always'
            });
            var myPlacemark = new window.ymaps.Placemark(
                [55.66691140, 37.55246822],
                {
                    balloonContent: 'Пункт самовывоза Rasprodazha-sumok.ru,<br/>ул. Профсоюзная, дом 45, ст. метро "Новые Черёмушки",<br/>ТЦ "Царское село", 0-й этаж, офис CDEK.<br/>Вход ровно в том месте, которое отмечено точкой'
                },
                {
                    preset: 'islands#circleDotIcon',
                    iconColor: 'red',
                    draggable: false

                });
            map.geoObjects.add(myPlacemark);
            map.behaviors.disable('scrollZoom');
            map.behaviors.disable('drag');
            map.container.events.add(['fullscreenenter'], function() {
                map.behaviors.enable('drag');
            });
            map.container.events.add(['fullscreenexit'], function() {
                map.behaviors.disable('drag');
            });
            myPlacemark.balloon.open();
        });
})
