import {Category} from "../../models/category";
import {Product} from "../../models/product";

export interface CategoryState {
    categories: Category[];
    selectedUrl:string;
    error:boolean;
}