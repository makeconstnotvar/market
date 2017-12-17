import { Component, EventEmitter, Output } from "@angular/core";
import { DeliveryMode, Contract } from "models/index";
export class ComponentCartContact {
    constructor() {
        this.showError = false;
        this.contract = new Contract();
        this.deliveryMode = DeliveryMode;
        this.onSubmit = new EventEmitter();
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
ComponentCartContact.decorators = [
    { type: Component, args: [{
                selector: 'cart-contact',
                host: { 'class': 'form-horizontal' },
                templateUrl: 'contact.html'
            },] },
];
ComponentCartContact.ctorParameters = () => [];
ComponentCartContact.propDecorators = {
    "onSubmit": [{ type: Output },],
};
//# sourceMappingURL=contact.js.map