import {Component, Input} from "@angular/core";
import {Product} from "models/product";
@Component({
    selector: 'v-similar',
    template: `
<ul>
    <li *ngFor="let product of similar; let i = index;">
       {{i}} {{product.name}}
    </li>
</ul>
`
})
export class ComponentViewSimilar {
    @Input()
    similar: Product[];
}