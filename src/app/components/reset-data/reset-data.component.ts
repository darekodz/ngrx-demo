import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../../store/links.actions';

@Component({
  selector: 'app-reset-data',
  templateUrl: './reset-data.component.html',
  styleUrls: ['./reset-data.component.css']
})
export class ResetDataComponent {

  constructor(private store: Store) {}

  reset() {
    this.store.dispatch(reset());
  }

}
