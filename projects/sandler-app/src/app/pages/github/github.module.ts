import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github.component';
import { githubReducer } from '../../reducers/github.reducer';
import { StoreModule } from '@ngrx/store';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';


@NgModule({
  declarations: [
    GithubComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('github', githubReducer)
  ]
})
export class GithubModule { }
