import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Beer } from './shared/beer';
import { BeerService } from './shared/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit {
  title = "Angular Brew";

  beers: Beer[];

  searchForm = new FormGroup({
    beer_name: new FormControl('')
  });

  constructor(
    private beerService: BeerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    this.route.queryParams.subscribe(params => {
      this.searchForm.patchValue(params);
    });

  }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers(this.searchForm.value)
      .subscribe(beers => this.beers = beers);
  }

  clearBeerName(): void {
    this.searchForm.patchValue({ beer_name: '' });
    this.updateQuery();
  }

  onSubmit() {
    this.updateQuery();
  }

  updateQuery() {
    const activeParams = {};
    const formValue = this.searchForm.value;

    // Collect form values that are not empty. 
    Object.keys(formValue).forEach(key => {
      if (formValue[key] !== (undefined || null || "")) {
        activeParams[key] = formValue[key];
      }
    });

    // Construct a url with non-empty form values.
    this.router.navigate([''], { queryParams: activeParams })
      .then(_ => this.getBeers());
  }

}
