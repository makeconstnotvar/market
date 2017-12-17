import {Position} from "./position";
import {DeliveryMode} from "./deliveryMode";
export class Contract {
    positions: Position[];
    name:string;
    phone:string;
    address:string;
    sendSms:boolean;
    delivery:DeliveryMode;
    note:string;
    final:number;
    number:string;
    date:any;
    statusName:string;
}