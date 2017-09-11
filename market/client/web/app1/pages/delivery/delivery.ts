import {Component, Inject} from "@angular/core";

@Component({
    templateUrl: 'delivery.html',

})
export class DeliveryPage {
    window;

    constructor(@Inject('Window') window) {
        this.window = window;
    }

    toSdekList() {
        this.window.open('http://www.edostavka.ru/contacts/city-list.html');
    }

}