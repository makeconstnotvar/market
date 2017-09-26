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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVtYm90cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianVtYm90cm9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNeEMsSUFBYSxnQkFBZ0IsR0FBN0I7SUFKQTtRQU9JLFdBQU0sR0FBWSxNQUFNLENBQUM7SUFhN0IsQ0FBQztJQVhHLFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUMxQixhQUFhLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBaEJZLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7R0FDVyxnQkFBZ0IsQ0FnQjVCO1NBaEJZLGdCQUFnQjtBQWtCN0IsSUFBSSxNQUFNLEdBQVk7SUFDbEI7UUFDSSxLQUFLLEVBQUUsK0NBQStDO1FBQ3RELElBQUksRUFBRSw2RkFBNkY7UUFDbkcsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLElBQUk7S0FDYjtJQUNEO1FBQ0ksS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxJQUFJLEVBQUUsOElBQThJO1FBQ3BKLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0ksS0FBSyxFQUFFLG9EQUFvRDtRQUMzRCxJQUFJLEVBQUUsK0VBQStFO1FBQ3JGLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxLQUFLO0tBQ2Q7Q0FDSixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXBCO0lBQ0ksRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRztRQUN0QixLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRDtDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnanVtYm90cm9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnanVtYm90cm9uLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKdW1ib3Ryb25Db250cm9sIHtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDtcclxuXHJcbiAgICBqdW1ib3M6IEp1bWJvW10gPSBqdW1ib3M7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaG93TmV4dEp1bWJvKCk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQganVtYm9zOiBKdW1ib1tdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0JzRiyDRgdGC0LDRgNCw0LXQvNGB0Y8g0YHQtNC10LvQsNGC0Ywg0L/RgNC+0YbQtdGB0YEg0L/QvtC60YPQv9C60Lgg0L/RgNC40Y/RgtC90YvQvCcsXHJcbiAgICAgICAgdGV4dDogJ9CjINC90LDRgSDQsdGL0YHRgtGA0YvQuSDRgdCw0LnRgiwg0LLQtdC20LvQuNCy0YvQtSDQutGD0YDRjNC10YDRiyDQuCDQvtC/0LXRgNCw0YLQvtGAINGBINC60YDQsNGB0LjQstGL0Lwg0LPQvtC70L7RgdC+0LwuINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9Cy0L7QvdC40YLRjCDQtdC5JyxcclxuICAgICAgICBpY29uOiAnZmEtcGhvbmUnLFxyXG4gICAgICAgIGltYWdlOiAnc2xpZGUtMScsXHJcbiAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9Cc0Ysg0L/RgNC+0LTQsNC10Lwg0LrQu9Cw0YHRgdC90YvQtSDRgNCw0L3RhtGLINC00LvRjyDRiNC60L7Qu9GM0L3QuNC60L7QsicsXHJcbiAgICAgICAgdGV4dDogJ9Cg0L7RgdGB0LjQudGB0LrQvtCz0L4g0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstCwINC4INC/0LXRgNCy0L7QutC70LDRgdGB0L3QvtCz0L4g0LrQsNGH0LXRgdGC0LLQsDog0YDQvtCy0L3Ri9C1INGI0LLRiywg0LjQtNC10LDQu9GM0L3QviDRgNCw0LHQvtGC0LDRjtGJ0LDRjyDQvNC+0LvQvdC40Y8sINC60YDQtdC/0LrQuNC1INGA0YPRh9C60LgsINGI0LjQutCw0YDQvdCw0Y8g0YLQutCw0L3RjCDQuCDQutGA0LDRgdC40LLRi9C1INGA0LjRgdGD0L3QutC4JyxcclxuICAgICAgICBpY29uOiAnZmEtdGh1bWJzLW8tdXAnLFxyXG4gICAgICAgIGltYWdlOiAnc2xpZGUtMicsXHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQodGC0LjQu9GM0L3Ri9C1LCDQtNC+0YHRgtGD0L/QvdGL0LUg0L/QviDRhtC10L3QtSDRgdGD0LzQutC4INC40Lcg0LrQvtC20LfQsNC80LXQvdC40YLQtdC70Y8nLFxyXG4gICAgICAgIHRleHQ6ICfQkCDRgtCw0Log0LbQtSDQsdC10YHQv9C70LDRgtC90LDRjyDQtNC+0YHRgtCw0LLQutCwINC/0L4g0JzQvtGB0LrQstC1INC4INCf0L7QtNC80L7RgdC60L7QstGM0Y4uINCS0Ysg0L7RgdGC0LDQvdC10YLQtdGB0Ywg0LTQvtCy0L7Qu9GM0L3RiyEnLFxyXG4gICAgICAgIGljb246ICdmYS1zbWlsZS1vJyxcclxuICAgICAgICBpbWFnZTogJ3NsaWRlLTMnLFxyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICB9XHJcbl07XHJcblxyXG5sZXQgYWN0aXZlSnVtYm8gPSAwO1xyXG5cclxuZnVuY3Rpb24gc2hvd05leHRKdW1ibygpIHtcclxuICAgIGlmIChhY3RpdmVKdW1ibyA8IGp1bWJvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgYWN0aXZlSnVtYm8gKz0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjdGl2ZUp1bWJvID0gMDtcclxuICAgIH1cclxuICAgIGp1bWJvcy5mb3JFYWNoKChqdW1ibywgaWR4KSA9PiB7XHJcbiAgICAgICAganVtYm8uc2hvdyA9IGFjdGl2ZUp1bWJvID09IGlkeDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGp1bWJvcztcclxufVxyXG5cclxuY2xhc3MgSnVtYm8ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG59Il19