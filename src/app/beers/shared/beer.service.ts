import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beersUrl = environment.beersApiUrl;

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl);
  }

  getBeer(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.beersUrl}/${id}`);
  }

  search(name: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.beersUrl}?beer_name=${name}`);
  }
}
