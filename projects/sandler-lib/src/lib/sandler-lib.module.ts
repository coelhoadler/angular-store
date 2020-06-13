import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandlerLibComponent } from './sandler-lib.component';

import { StoreModule } from '@ngrx/store';

import { errorReducer } from './reducers/error.reducer';

@NgModule({
  declarations: [SandlerLibComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      error: errorReducer
    })
  ],
  exports: [SandlerLibComponent]
})
export class SandlerLibModule { }
