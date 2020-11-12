import { Component } from '@angular/core';
import { BeerService } from './beers/shared/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeerService]
})


export class AppComponent { }
