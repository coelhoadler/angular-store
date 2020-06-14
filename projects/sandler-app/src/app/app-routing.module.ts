import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubComponent } from './pages/github/github.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }