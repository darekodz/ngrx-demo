import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {

  links$: Observable<string[]>;

  constructor(private store: Store<{ links: string[] }>) {
    this.links$ = store.pipe(select('links'));
  }

}
