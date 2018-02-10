import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {AppState} from "../state";
import {categoryReducer} from "./category";
import {storeFreeze} from 'ngrx-store-freeze';


export const reducers: ActionReducerMap<AppState> = {
    category: categoryReducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = [logger, storeFreeze];