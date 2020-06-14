import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { store } from '../../actions/github.actions';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  githubData$: Observable<any>;

  constructor(
    private githubService: GithubService,
    private store: Store<any>
  ) { 

    this.githubData$ = this.store.pipe(select('github'));
  }

  ngOnInit(): void {
    this.githubData$.subscribe(data => console.log('store', data))
  }

  getGithubData() {
    this.githubService.getProfile().subscribe(data => {
      this.store.dispatch(store(data));
    });
  }

}
