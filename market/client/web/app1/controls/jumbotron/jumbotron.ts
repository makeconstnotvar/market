import {Component} from "@angular/core";

@Component({
    selector: 'jumbotron',
    templateUrl: 'jumbotron.html'
})
export class JumbotronControl {
    private intervalId;

    jumbos: Jumbo[] = jumbos;

    ngOnInit() {
        this.intervalId = setInterval(() => {
            showNextJumbo();
        }, 5000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

let jumbos: Jumbo[] = [
    {
        title: 'Мы стараемся сделать процесс покупки приятным',
        text: 'У нас быстрый сайт, вежливые курьеры и оператор с красивым голосом. Попробуйте позвонить ей',
        icon: 'fa-phone',
        image: 'slide-1',
        show: true
    },
    {
        title: 'Мы продаем классные ранцы для школьников',
        text: 'Российского производства и первоклассного качества: ровные швы, идеально работающая молния, крепкие ручки, шикарная ткань и красивые рисунки',
        icon: 'fa-thumbs-o-up',
        image: 'slide-2',
        show: false
    },
    {
        title: 'Стильные, доступные по цене сумки из кожзаменителя',
        text: 'А так же бесплатная доставка по Москве и Подмосковью. Вы останетесь довольны!',
        icon: 'fa-smile-o',
        image: 'slide-3',
        show: false
    }
];

let activeJumbo = 0;

function showNextJumbo() {
    if (activeJumbo < jumbos.length - 1) {
        activeJumbo += 1;
    }
    else {
        activeJumbo = 0;
    }
    jumbos.forEach((jumbo, idx) => {
        jumbo.show = activeJumbo == idx;
    });
    return jumbos;
}

class Jumbo {
    title: string;
    text: string;
    icon: string;
    image: string;
    show: boolean;
}