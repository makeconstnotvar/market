/*setInterval(function() {
    let friday = new Date();
    friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
    friday.setHours(21);
    friday.setMinutes(0);
    friday.setSeconds(0);
    friday.setMilliseconds(0);
    let now = new Date().getTime();
    let distance = friday - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`До пятницы осталось ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`)
}, 1000);*/

$(function () {
    let friday = new Date();
    friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
    friday.setHours(21);
    friday.setMinutes(0);
    friday.setSeconds(0);
    friday.setMilliseconds(0);

    let distance = (friday - new Date().getTime())/1000;


    var clock = $('#timer').FlipClock(distance,{
        clockFace: 'DailyCounter',
        countdown:true,
        language:'russian'
    });
});