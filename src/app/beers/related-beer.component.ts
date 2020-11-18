import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Beer } from './shared/beer';
import { BeerService } from './shared/beer.service';

@Component({
  selector: 'related-beer',
  templateUrl: './related-beer.component.html',
  styleUrls: ['./related-beer.component.css']
})
export class RelatedBeerComponent implements OnInit, OnChanges {
  @ViewChild('viewport')
  viewport: CdkVirtualScrollViewport;

  @Input() title: string;
  @Input() relation;
  @Input() beer: Beer;

  beers: Beer[];

  constructor(private beerService: BeerService) { }

  ngOnChanges() {
    this.getBeers();

    if (this.viewport) {
      this.viewport.scrollToIndex(0);
    }
  }

  getBeers(): void {
    this.beerService.getRelatedBeer({
      relation: this.relation,
      beer: this.beer
    })
      .subscribe(beers => this.beers = beers);
  }

}
