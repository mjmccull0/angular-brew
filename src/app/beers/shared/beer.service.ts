import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beersUrl = environment.beersApiUrl;
  beerBaseUrl = environment.beerBaseUrl;
  validQueryParams = [ "beer_name", "srm", "abv" ];

  constructor(private http: HttpClient) { }

  getBeers(params = {}): Observable<Beer[]> {
    const query = this.queryBuilder(params);
    return this.http.get<Beer[]>(`${this.beersUrl}?${query}`)
      .pipe(
        map((beers) => (
          beers.map(beer => ({
            ...beer,
            url: `${this.beerBaseUrl}/${beer.id}`
          }))
        ))
      );
  }

  getBeer(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.beersUrl}/${id}`);
  }

  getRelatedBeer({beer, relation}) {
    const id = beer.id;
    return this.getBeers({[relation]: beer[relation]})
      .pipe(
        map((beers) => (
          beers.filter(beer => beer.id !== id)
        ))
      );
  }

  queryBuilder(params: object): string {
    const queryParams = {};

    Object.keys(params).forEach(key => {
      if (this.validQueryParams.includes(key) &&
          params[key] !== (undefined || null || "")) {
          queryParams[key] = params[key];
      }
    });

    const searchParams = new URLSearchParams(queryParams);
    return searchParams.toString();
  }
}
