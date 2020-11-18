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
import { BeerListComponent } from './beers/beer-list.component';
import { BeerComponent } from './beers/beer.component';
import { RelatedBeerComponent } from './beers/related-beer.component';



@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerComponent,
    RelatedBeerComponent,
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
