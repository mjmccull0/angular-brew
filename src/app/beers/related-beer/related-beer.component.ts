import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Beer } from 'model/beer';
import { BeerService } from 'service/beer/beer.service';

@Component({
  selector: 'related-beer',
  templateUrl: './related-beer.component.html',
  styleUrls: ['./related-beer.component.css']
})
export class RelatedBeerComponent implements OnChanges {
  @ViewChild('viewport')
  viewport: CdkVirtualScrollViewport;

  scrollIndex = 0;
  scrollDistance: number;
  scrollLeftDisabled: boolean;
  scrollRightDisabled: boolean;

  @Input() title: string;
  @Input() relation;
  @Input() beer: Beer;
  @Input() itemSize: number;

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
    this.scrollDistance = Math.floor(this.viewport.getViewportSize() / this.itemSize);

    if (this.viewport.getOffsetToRenderedContentStart() == 0) {
      this.scrollLeftDisabled = true;
    } else {
      this.scrollLeftDisabled = false;
    }

    if (this.viewport.measureScrollOffset('right') < this.itemSize) {
      this.scrollRightDisabled = true;
    } else {
      this.scrollRightDisabled = false;
    }

  }

  scrollLeft(): void {
    if (this.scrollIndex > 0) {
      const newScrollIndex = this.scrollIndex - this.scrollDistance;
      this.viewport.scrollToIndex(newScrollIndex, "smooth");
    }
  }

  scrollRight(): void {
    if (this.scrollIndex < this.beers.length) {
      const newScrollIndex = this.scrollIndex + this.scrollDistance;
      this.viewport.scrollToIndex(newScrollIndex, "smooth");
    }
  }
}
