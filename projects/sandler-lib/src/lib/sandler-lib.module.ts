import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandlerLibComponent } from './sandler-lib.component';

import { StoreModule } from '@ngrx/store';

import { errorReducer } from './reducers/error.reducer';

import * as loginReducer from './reducers/login-page.reducer';


@NgModule({
  declarations: [SandlerLibComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      error: errorReducer,
      login: loginReducer.reducer,
    })
  ],
  exports: [SandlerLibComponent]
})
export class SandlerLibModule { }
