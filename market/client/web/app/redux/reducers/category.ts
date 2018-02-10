import {CategoryState} from "../state/category"
import {CategoryActions, CategoryActionsTypes} from '../actions/category'

export const initialState: CategoryState = {
    error: false,
    selectedUrl: '',
    categories: []
};

export function categoryReducer(state: CategoryState = initialState, action: CategoryActions): CategoryState {
    switch (action.type) {
        case CategoryActionsTypes.CATEGORIES_LOAD: {
            return state;
        }
        case CategoryActionsTypes.CATEGORIES_LOAD_SUCCESS: {
            return {
                ...state,
                error: false,
                categories: action.payload
            };
        }
        case CategoryActionsTypes.CATEGORIES_LOAD_ERROR: {
            return {
                ...state,
                error: true,
                categories: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
