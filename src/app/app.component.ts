import { Component } from '@angular/core';
import { BeerService } from 'service/beer/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeerService]
})


export class AppComponent { }
