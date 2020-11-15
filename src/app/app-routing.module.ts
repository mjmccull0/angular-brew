import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './beers/beer.component';
import { BeerListComponent } from './beers/beer-list.component';

const routes: Routes = [
  { path: 'beer/:id', component: BeerComponent },
  { path: '', component: BeerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
