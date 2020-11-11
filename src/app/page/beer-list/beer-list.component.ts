import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BeerService } from '../../service/beer.service';
import { Beer } from '../../model/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit {
  title = "Angular Brew";

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  beers: Beer[];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers);
  }

  onSubmit() {
    this.beerService.search(this.searchForm.value.search)
      .subscribe(beers => this.beers = beers);
  }

}
