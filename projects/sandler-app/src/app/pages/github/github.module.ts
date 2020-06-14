import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github.component';
import { githubReducer } from '../../reducers/github.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GithubEffects } from './../../effects/github.effects';


@NgModule({
  declarations: [
    GithubComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('github', githubReducer),
    EffectsModule.forFeature([GithubEffects])
  ]
})
export class GithubModule { }
