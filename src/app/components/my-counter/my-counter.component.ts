import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, reset } from '../../store/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
  count$: Observable<string[]>;

  constructor(private store: Store<{ count: string[] }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment({
      url: 'dasdsadsa'
    }));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
