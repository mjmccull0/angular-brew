import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './page/beer/beer.component'; 
import { BeerListComponent } from './page/beer-list/beer-list.component'; 

const routes: Routes = [
  { path: 'beer/:id', component: BeerComponent },
  { path: '', component: BeerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
