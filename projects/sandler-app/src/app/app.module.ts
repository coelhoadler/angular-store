import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SandlerLibModule } from 'projects/sandler-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SandlerLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
