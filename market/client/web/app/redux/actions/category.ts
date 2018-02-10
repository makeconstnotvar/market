import {Action} from "@ngrx/store";
import {Category} from "../../models";

export enum CategoryActionsTypes {
    CATEGORIES_LOAD = '[Category] Load Categories start',
    CATEGORIES_LOAD_SUCCESS = '[Category] Load Categories success',
    CATEGORIES_LOAD_ERROR = '[Category] Load Categories error'
}

export class LoadCategories implements Action {
    readonly type = CategoryActionsTypes.CATEGORIES_LOAD;
}

export class LoadCategoriesSuccess implements Action {
    readonly type = CategoryActionsTypes.CATEGORIES_LOAD_SUCCESS;
    constructor(public payload: Category[]) {}
}

export class LoadCategoriesError implements Action {
    readonly type = CategoryActionsTypes.CATEGORIES_LOAD_ERROR;
    constructor(public payload: Error) {}
}

export type CategoryActions =
     LoadCategories
    | LoadCategoriesSuccess
    | LoadCategoriesError;
