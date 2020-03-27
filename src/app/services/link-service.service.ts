import { Injectable } from '@angular/core';
import { Link } from '../store/links.reducer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private linksUrl = 'api/links';

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.linksUrl);
  }
}
