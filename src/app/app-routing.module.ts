import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './beers/beer/beer.component';
import { BeerListComponent } from './beers/beer-list/beer-list.component';

const routes: Routes = [
  { path: 'beer/:id', component: BeerComponent },
  { path: '', component: BeerListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
