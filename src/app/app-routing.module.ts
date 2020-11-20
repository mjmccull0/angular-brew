import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerPage } from './page/beer/beer-page.component';
import { HomePage } from './page/home/home-page.component';

const routes: Routes = [
  { path: 'beer/:id', component: BeerPage },
  { path: '', component: HomePage }
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
