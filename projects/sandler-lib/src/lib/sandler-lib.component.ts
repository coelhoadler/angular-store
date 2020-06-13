import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { initialErrorState } from './reducers/error.reducer';
import { notFound, reset, internalError } from './actions/error.actions'

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
  `,
})
export class SandlerLibComponent implements OnInit {

  public error$: Observable<number>;
  public currentCode = initialErrorState;

  constructor(
    private store: Store<{error: number}>
  ) { 
    this.error$ = store.pipe(select('error'));
  }

  ngOnInit(): void { 
    this.error$.subscribe(state => {
      this.currentCode = state;
    });
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

}
