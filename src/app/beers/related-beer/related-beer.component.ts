import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Beer } from '../shared/beer';
import { BeerService } from '../shared/beer.service';

@Component({
  selector: 'related-beer',
  templateUrl: './related-beer.component.html',
  styleUrls: ['./related-beer.component.css']
})
export class RelatedBeerComponent implements OnChanges {
  @ViewChild('viewport')
  viewport: CdkVirtualScrollViewport;
  scrollIndex = 0;

  @Input() title: string;
  @Input() relation;
  @Input() beer: Beer;

  beers: Beer[];

  constructor(private beerService: BeerService) { }

  ngOnChanges() {
    this.getBeers();

    if (this.viewport) {
      this.viewport.scrollToIndex(this.scrollIndex);
    }
  }

  getBeers(): void {
    this.beerService.getRelatedBeer({
      relation: this.relation,
      beer: this.beer
    })
      .subscribe(beers => this.beers = beers);
  }

  onScroll(event): void {
    this.scrollIndex = event;
  }

  scrollLeft(): void {
    if (this.scrollIndex > 0) {
      this.viewport.scrollToIndex(--this.scrollIndex, "smooth");
    }
  }

  scrollRight(): void {
    if (this.beers.length > this.scrollIndex) {
      this.viewport.scrollToIndex(++this.scrollIndex, "smooth");
    }
  }

}
