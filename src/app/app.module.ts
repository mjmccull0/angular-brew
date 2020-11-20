import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BeerListComponent } from './beers/beer-list/beer-list.component';
import { BeerDetailComponent } from './beers/beer-detail/beer-detail.component';
import { RelatedBeerComponent } from './beers/related-beer/related-beer.component';
import { CardComponent } from './beers/card/card.component';
import { HomePage } from './page/home/home-page.component';
import { BeerPage } from './page/beer/beer-page.component';



@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailComponent,
    RelatedBeerComponent,
    CardComponent,
    HomePage,
    BeerPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ScrollingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
