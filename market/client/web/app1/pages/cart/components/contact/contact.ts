import {Component, EventEmitter, Output} from "@angular/core";
import {Contract} from "models/contract";
import {DeliveryMode} from "models";

@Component({
    selector: 'cart-contact',
    host: {'class': 'form-horizontal'},
    templateUrl: 'contact.html'
})
export class ComponentCartContact {
    showError: boolean = false;
    contract: Contract = new Contract();
    deliveryMode = DeliveryMode;

    @Output()
    onSubmit = new EventEmitter<Contract>();

    constructor() {
        this.contract.delivery = DeliveryMode.Auto;
        this.contract.sendSms = true;
    }

    submit() {
        if (this.contract.phone) {
            this.onSubmit.emit(this.contract);
        }
        else {
            this.showError = true;
        }
    }

}