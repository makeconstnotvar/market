import {Product} from "./product";
import {Color} from "./color";
export class Position {
    product: Product|string;
    price: number;
    count: number;
    sum: number;
    color?: Color;
}