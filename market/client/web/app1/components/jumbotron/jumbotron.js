var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
let JumbotronComponent = class JumbotronComponent {
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
JumbotronComponent = __decorate([
    Component({
        host: { 'class': 'jumbo' },
        selector: 'jumbotron',
        templateUrl: 'jumbotron.html'
    })
], JumbotronComponent);
export { JumbotronComponent };
let jumbos = [
    {
        title: 'Мы стараемся сделать процесс покупки приятным',
        text: 'У нас быстрый сайт, вежливые курьеры и оператор с красивым голосом. Попробуйте позвонить ей',
        icon: 'fa-phone',
        image: 'jumbo-slide-1',
        show: true
    },
    {
        title: 'Мы продаем классные ранцы для школьников',
        text: 'Российского производства и первоклассного качества: ровные швы, идеально работающая молния, крепкие ручки, шикарная ткань и красивые рисунки',
        icon: 'fa-thumbs-o-up',
        image: 'jumbo-slide-2',
        show: false
    },
    {
        title: 'Стильные, доступные по цене сумки из кожзаменителя',
        text: 'А так же бесплатная доставка по Москве и Подмосковью. Вы останетесь довольны!',
        icon: 'fa-smile-o',
        image: 'jumbo-slide-3',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVtYm90cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianVtYm90cm9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBUTNELElBQWEsa0JBQWtCLEdBQS9CO0lBTEE7UUFRWSxXQUFNLEdBQVksTUFBTSxDQUFDO0lBY3JDLENBQUM7SUFaRyxRQUFRO1FBRUosSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDMUIsYUFBYSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQWpCWSxrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQztRQUN4QixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7R0FDVyxrQkFBa0IsQ0FpQjlCO1NBakJZLGtCQUFrQjtBQW1CL0IsSUFBSSxNQUFNLEdBQVk7SUFDbEI7UUFDSSxLQUFLLEVBQUUsK0NBQStDO1FBQ3RELElBQUksRUFBRSw2RkFBNkY7UUFDbkcsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLGVBQWU7UUFDdEIsSUFBSSxFQUFFLElBQUk7S0FDYjtJQUNEO1FBQ0ksS0FBSyxFQUFFLDBDQUEwQztRQUNqRCxJQUFJLEVBQUUsOElBQThJO1FBQ3BKLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLGVBQWU7UUFDdEIsSUFBSSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0ksS0FBSyxFQUFFLG9EQUFvRDtRQUMzRCxJQUFJLEVBQUUsK0VBQStFO1FBQ3JGLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxlQUFlO1FBQ3RCLElBQUksRUFBRSxLQUFLO0tBQ2Q7Q0FDSixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXBCO0lBRUksRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRztRQUN0QixLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SnVtYm99IGZyb20gXCIuL2VudGl0aWVzL2p1bWJvXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnanVtYm8nfSxcclxuICAgIHNlbGVjdG9yOiAnanVtYm90cm9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnanVtYm90cm9uLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKdW1ib3Ryb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGludGVydmFsSWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1ib3M6IEp1bWJvW10gPSBqdW1ib3M7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgc2hvd05leHRKdW1ibygpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGp1bWJvczogSnVtYm9bXSA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9Cc0Ysg0YHRgtCw0YDQsNC10LzRgdGPINGB0LTQtdC70LDRgtGMINC/0YDQvtGG0LXRgdGBINC/0L7QutGD0L/QutC4INC/0YDQuNGP0YLQvdGL0LwnLFxyXG4gICAgICAgIHRleHQ6ICfQoyDQvdCw0YEg0LHRi9GB0YLRgNGL0Lkg0YHQsNC50YIsINCy0LXQttC70LjQstGL0LUg0LrRg9GA0YzQtdGA0Ysg0Lgg0L7Qv9C10YDQsNGC0L7RgCDRgSDQutGA0LDRgdC40LLRi9C8INCz0L7Qu9C+0YHQvtC8LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQstC+0L3QuNGC0Ywg0LXQuScsXHJcbiAgICAgICAgaWNvbjogJ2ZhLXBob25lJyxcclxuICAgICAgICBpbWFnZTogJ2p1bWJvLXNsaWRlLTEnLFxyXG4gICAgICAgIHNob3c6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQnNGLINC/0YDQvtC00LDQtdC8INC60LvQsNGB0YHQvdGL0LUg0YDQsNC90YbRiyDQtNC70Y8g0YjQutC+0LvRjNC90LjQutC+0LInLFxyXG4gICAgICAgIHRleHQ6ICfQoNC+0YHRgdC40LnRgdC60L7Qs9C+INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCDQuCDQv9C10YDQstC+0LrQu9Cw0YHRgdC90L7Qs9C+INC60LDRh9C10YHRgtCy0LA6INGA0L7QstC90YvQtSDRiNCy0YssINC40LTQtdCw0LvRjNC90L4g0YDQsNCx0L7RgtCw0Y7RidCw0Y8g0LzQvtC70L3QuNGPLCDQutGA0LXQv9C60LjQtSDRgNGD0YfQutC4LCDRiNC40LrQsNGA0L3QsNGPINGC0LrQsNC90Ywg0Lgg0LrRgNCw0YHQuNCy0YvQtSDRgNC40YHRg9C90LrQuCcsXHJcbiAgICAgICAgaWNvbjogJ2ZhLXRodW1icy1vLXVwJyxcclxuICAgICAgICBpbWFnZTogJ2p1bWJvLXNsaWRlLTInLFxyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0KHRgtC40LvRjNC90YvQtSwg0LTQvtGB0YLRg9C/0L3Ri9C1INC/0L4g0YbQtdC90LUg0YHRg9C80LrQuCDQuNC3INC60L7QttC30LDQvNC10L3QuNGC0LXQu9GPJyxcclxuICAgICAgICB0ZXh0OiAn0JAg0YLQsNC6INC20LUg0LHQtdGB0L/Qu9Cw0YLQvdCw0Y8g0LTQvtGB0YLQsNCy0LrQsCDQv9C+INCc0L7RgdC60LLQtSDQuCDQn9C+0LTQvNC+0YHQutC+0LLRjNGOLiDQktGLINC+0YHRgtCw0L3QtdGC0LXRgdGMINC00L7QstC+0LvRjNC90YshJyxcclxuICAgICAgICBpY29uOiAnZmEtc21pbGUtbycsXHJcbiAgICAgICAgaW1hZ2U6ICdqdW1iby1zbGlkZS0zJyxcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgfVxyXG5dO1xyXG5cclxubGV0IGFjdGl2ZUp1bWJvID0gMDtcclxuXHJcbmZ1bmN0aW9uIHNob3dOZXh0SnVtYm8oKSB7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUp1bWJvIDwganVtYm9zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBhY3RpdmVKdW1ibyArPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlSnVtYm8gPSAwO1xyXG4gICAgfVxyXG4gICAganVtYm9zLmZvckVhY2goKGp1bWJvLCBpZHgpID0+IHtcclxuICAgICAgICBqdW1iby5zaG93ID0gYWN0aXZlSnVtYm8gPT0gaWR4O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ganVtYm9zO1xyXG59Il19