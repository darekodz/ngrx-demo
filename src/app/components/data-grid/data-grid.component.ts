import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LinkService } from 'src/app/services/link-service.service';
import { Link } from 'src/app/store/links.reducer';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  links$: Observable<string[]>;
  links2$: Observable<Link[]>;

  constructor(private store: Store<{ links: string[] }>, private linkService: LinkService) {
    this.links$ = store.pipe(select('links'));
  }

  ngOnInit() {
    this.links2$ = this.linkService.getLinks();
  }

}
