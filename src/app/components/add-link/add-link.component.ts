import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add } from '../../store/links.actions';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent {

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(add({
      name: 'new link',
      url: 'dasdsadsa',
      description: 'dasdasdasdas'
    }));
  }

}
