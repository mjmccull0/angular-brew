import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beersUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl);
  }

  getBeer(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.beersUrl}/${id}`);
  }

  search(name: string): Observable<Beer[]> {
    console.log(name);
    return this.http.get<Beer[]>(`${this.beersUrl}?beer_name=${name}`);
  }
}
