var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
let JumbotronControl = class JumbotronControl {
    constructor() {
        this.jumbos = jumbos;
    }
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
};
JumbotronControl = __decorate([
    Component({
        selector: 'jumbotron',
        templateUrl: 'jumbotron.html'
    })
], JumbotronControl);
export { JumbotronControl };
let jumbos = [
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVtYm90cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianVtYm90cm9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNeEMsSUFBYSxnQkFBZ0IsR0FBN0I7SUFKQTtRQU9ZLFdBQU0sR0FBWSxNQUFNLENBQUM7SUFhckMsQ0FBQztJQVhHLFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUMxQixhQUFhLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBaEJZLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7R0FDVyxnQkFBZ0IsQ0FnQjVCO1NBaEJZLGdCQUFnQjtBQWtCN0IsSUFBSSxNQUFNLEdBQVk7SUFDbEI7UUFDSSxLQUFLLEVBQUUsK0NBQStDO1FBQ3RELElBQUksRUFBRSw2RkFBNkY7UUFDbkcsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLElBQUk7S0FDYjtJQUNEO1FBQ0ksS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxJQUFJLEVBQUUsOElBQThJO1FBQ3BKLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0ksS0FBSyxFQUFFLG9EQUFvRDtRQUMzRCxJQUFJLEVBQUUsK0VBQStFO1FBQ3JGLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxLQUFLO0tBQ2Q7Q0FDSixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXBCO0lBQ0ksRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRztRQUN0QixLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRDtDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnanVtYm90cm9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnanVtYm90cm9uLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKdW1ib3Ryb25Db250cm9sIHtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDtcclxuXHJcbiAgICBwcml2YXRlIGp1bWJvczogSnVtYm9bXSA9IGp1bWJvcztcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNob3dOZXh0SnVtYm8oKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBqdW1ib3M6IEp1bWJvW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQnNGLINGB0YLQsNGA0LDQtdC80YHRjyDRgdC00LXQu9Cw0YLRjCDQv9GA0L7RhtC10YHRgSDQv9C+0LrRg9C/0LrQuCDQv9GA0LjRj9GC0L3Ri9C8JyxcclxuICAgICAgICB0ZXh0OiAn0KMg0L3QsNGBINCx0YvRgdGC0YDRi9C5INGB0LDQudGCLCDQstC10LbQu9C40LLRi9C1INC60YPRgNGM0LXRgNGLINC4INC+0L/QtdGA0LDRgtC+0YAg0YEg0LrRgNCw0YHQuNCy0YvQvCDQs9C+0LvQvtGB0L7QvC4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LLQvtC90LjRgtGMINC10LknLFxyXG4gICAgICAgIGljb246ICdmYS1waG9uZScsXHJcbiAgICAgICAgaW1hZ2U6ICdzbGlkZS0xJyxcclxuICAgICAgICBzaG93OiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0JzRiyDQv9GA0L7QtNCw0LXQvCDQutC70LDRgdGB0L3Ri9C1INGA0LDQvdGG0Ysg0LTQu9GPINGI0LrQvtC70YzQvdC40LrQvtCyJyxcclxuICAgICAgICB0ZXh0OiAn0KDQvtGB0YHQuNC50YHQutC+0LPQviDQv9GA0L7QuNC30LLQvtC00YHRgtCy0LAg0Lgg0L/QtdGA0LLQvtC60LvQsNGB0YHQvdC+0LPQviDQutCw0YfQtdGB0YLQstCwOiDRgNC+0LLQvdGL0LUg0YjQstGLLCDQuNC00LXQsNC70YzQvdC+INGA0LDQsdC+0YLQsNGO0YnQsNGPINC80L7Qu9C90LjRjywg0LrRgNC10L/QutC40LUg0YDRg9GH0LrQuCwg0YjQuNC60LDRgNC90LDRjyDRgtC60LDQvdGMINC4INC60YDQsNGB0LjQstGL0LUg0YDQuNGB0YPQvdC60LgnLFxyXG4gICAgICAgIGljb246ICdmYS10aHVtYnMtby11cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdzbGlkZS0yJyxcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9Ch0YLQuNC70YzQvdGL0LUsINC00L7RgdGC0YPQv9C90YvQtSDQv9C+INGG0LXQvdC1INGB0YPQvNC60Lgg0LjQtyDQutC+0LbQt9Cw0LzQtdC90LjRgtC10LvRjycsXHJcbiAgICAgICAgdGV4dDogJ9CQINGC0LDQuiDQttC1INCx0LXRgdC/0LvQsNGC0L3QsNGPINC00L7RgdGC0LDQstC60LAg0L/QviDQnNC+0YHQutCy0LUg0Lgg0J/QvtC00LzQvtGB0LrQvtCy0YzRji4g0JLRiyDQvtGB0YLQsNC90LXRgtC10YHRjCDQtNC+0LLQvtC70YzQvdGLIScsXHJcbiAgICAgICAgaWNvbjogJ2ZhLXNtaWxlLW8nLFxyXG4gICAgICAgIGltYWdlOiAnc2xpZGUtMycsXHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgIH1cclxuXTtcclxuXHJcbmxldCBhY3RpdmVKdW1ibyA9IDA7XHJcblxyXG5mdW5jdGlvbiBzaG93TmV4dEp1bWJvKCkge1xyXG4gICAgaWYgKGFjdGl2ZUp1bWJvIDwganVtYm9zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBhY3RpdmVKdW1ibyArPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlSnVtYm8gPSAwO1xyXG4gICAgfVxyXG4gICAganVtYm9zLmZvckVhY2goKGp1bWJvLCBpZHgpID0+IHtcclxuICAgICAgICBqdW1iby5zaG93ID0gYWN0aXZlSnVtYm8gPT0gaWR4O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ganVtYm9zO1xyXG59XHJcblxyXG5jbGFzcyBKdW1ibyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgaW1hZ2U6IHN0cmluZztcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbn0iXX0=