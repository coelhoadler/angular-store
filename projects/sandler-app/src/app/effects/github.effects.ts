import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, pipe } from 'rxjs';
import { map, mergeMap, catchError, switchMap, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { GithubService } from './../pages/github/github.service';
import { Store } from '@ngrx/store';
import { store } from '../actions/github.actions';

@Injectable()
export class GithubEffects {

    loadGithubProfile$ = createEffect(() => this.actions$.pipe(
        ofType('[Github profile] store profile'),
        mergeMap(() => this.githubService.getProfile()
            .pipe(
                map(profile => ({ type: '[Github profile] Profile Loaded Success', payload: profile })),
                pipe(
                    tap(data =>  this.stores.dispatch(store(data)))
                ),
                catchError(() => of({ type: '[Movies API] Movies Loaded Error', payload: null }))
            ))
    ),);


    constructor(
        private actions$: Actions,
        private githubService: GithubService,
        private stores: Store<any>
    ) { }
}