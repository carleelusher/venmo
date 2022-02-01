import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/navigation/footer/footer.component';
import { SecondFooterComponent } from 'src/navigation/footer/secondfooter.component';
import { NavbarComponent } from 'src/navigation/navbar.component';

import { AppComponent } from './app.component';
import { CardComponent } from './categories/card/card';
import { CarouselComponent } from './categories/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SecondFooterComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
