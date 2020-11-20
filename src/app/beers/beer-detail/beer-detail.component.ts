import { Component, Input } from '@angular/core';
import { Beer } from 'shared/beer';

@Component({
  selector: 'beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})

export class BeerDetailComponent {
  @Input() beer: Beer;
}
