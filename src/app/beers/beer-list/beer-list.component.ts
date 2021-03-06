import { Component, Input } from '@angular/core';
import { Beer } from 'model/beer';

@Component({
  selector: 'brew-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent {
  @Input() beers: Beer[];
}
