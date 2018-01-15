import { Component, EventEmitter, Output } from "@angular/core";
import { DeliveryMode, Contract } from "models/index";
var ComponentCartContact = (function () {
    function ComponentCartContact() {
        this.showError = false;
        this.contract = new Contract();
        this.deliveryMode = DeliveryMode;
        this.onSubmit = new EventEmitter();
        this.contract.delivery = DeliveryMode.Auto;
        this.contract.sendSms = true;
    }
    ComponentCartContact.prototype.submit = function () {
        if (this.contract.phone) {
            this.onSubmit.emit(this.contract);
        }
        else {
            this.showError = true;
        }
    };
    ComponentCartContact.decorators = [
        { type: Component, args: [{
                    selector: 'cart-contact',
                    host: { 'class': 'form-horizontal' },
                    templateUrl: 'contact.html'
                },] },
    ];
    ComponentCartContact.ctorParameters = function () { return []; };
    ComponentCartContact.propDecorators = {
        "onSubmit": [{ type: Output },],
    };
    return ComponentCartContact;
}());
export { ComponentCartContact };
