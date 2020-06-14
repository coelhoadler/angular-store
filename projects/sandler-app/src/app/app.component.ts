import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _count = 0;
  githubData$: Observable<any>;


  constructor(
    private store: Store<any>
  ) {
    this.githubData$ = this.store.pipe(select('github'));
  }

  ngOnInit() {
    this.githubData$.subscribe(data => {
      console.log("[app] =>", data);
    })
  }

  
}
