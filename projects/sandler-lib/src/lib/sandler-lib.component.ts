import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { initialErrorState } from './reducers/error.reducer';

import { notFound, reset, internalError } from './actions/error.actions'
import { loginAction } from './actions/login-page.actions'

@Component({
  selector: 'lib-sandler-lib',
  template: `
    <p>
      <button (click)="setErrorNotFound()">NotFound Error (4xx)</button>
      <button (click)="setAPIError()">Internal Error (5xx)</button>
      <button (click)="resetError()">Reset Error (0)</button>

      <div *ngIf="error$ | async as code">
        <div *ngIf="code === 404">
          Something went wrong!
        </div>

        <div *ngIf="code === 501">
          Server error!
        </div>

        <div *ngIf="code === 100">
          No error!
        </div>

        Current Error State: {{ code }}
      </div>

      <br/><br/><br/>

      <button (click)="doLogin()">Do login</button>
  `,
})
export class SandlerLibComponent implements OnInit {

  public error$: Observable<number>;
  public login$: Observable<any>;

  public currentCode = initialErrorState;

  constructor(
    private store: Store<any>
  ) { 
    this.error$ = store.pipe(select('error'));
    this.login$ = store.pipe(select('login'));
  }

  ngOnInit(): void { 
    this.error$.subscribe(state => {
      this.currentCode = state;
    });

    this.login$.subscribe(state => {
      console.log('login data', state);
    })
  }

  public setErrorNotFound(): void {
    this.store.dispatch(notFound());
  }

  public setAPIError(): void {
    this.store.dispatch(internalError());
  }

  public resetError(): void {
    this.store.dispatch(reset());
  }

  public doLogin(): void {
    this.store.dispatch(loginAction({username: 'adlercoelhosantos', password: 'Test123'}));
  }  

}
