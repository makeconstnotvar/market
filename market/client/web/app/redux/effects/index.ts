import {Injectable} from "@angular/core";
import {Effect, ofType} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import { Action } from '@ngrx/store';
import {Actions, Effect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {CategoryProvider} from "../../providers";


@Injectable()
export class CategoryEffects {
    @Effect()
    categories$: Observable<Action> = this.actions$.pipe(
        ofType('CATEGORIES_LIST'),
        mergeMap(() =>
            this.categoryProvider.list().pipe(
                map(data => ({ type: 'CATEGORIES_LIST_SUCCESS', payload: data })),
                catchError(() => of({ type: 'CATEGORIES_LIST_FAILED' }))
            )
        )
    );


    constructor(
        private categoryProvider: CategoryProvider,
        private actions$: Actions
    ) {}
}