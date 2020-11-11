import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Beer } from '../../model/beer';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})


export class BeerComponent implements OnInit {
  @Input() beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.beerService.getBeer(id)
      .subscribe(beer => this.beer = beer);
  }

}
