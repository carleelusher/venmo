import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/navigation/footer/footer.component';
import { SecondFooterComponent } from 'src/navigation/footer/secondfooter.component';
import { NavbarComponent } from 'src/navigation/navbar.component';

import { AppComponent } from './app.component';
import { CardComponent } from './categories/card/card';
import { DataBindingCardComponent } from './categories/card/lab3/card-databinding';
import { CarouselComponent } from './categories/carousel';
import { AppRoutingModule } from './app-routing.module';
import { WaysToPayComponent } from './routing/ways-to-pay/ways-to-pay.component';
import { HowItWorksComponent } from './routing/how-it-works/how-its-works.component';
import { ManageBalanceComponent } from './routing/manage-balance/manage-balance.component';
import { HomeComponent } from './routing/home/home.component';
import { BusinessComponent } from './routing/business/business.component';
import { AcceptVenmoComponent } from './routing/accept-venmo/accept-venmo.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { provideDatabase, getDatabase} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SecondFooterComponent,
    CarouselComponent,
    CardComponent,
    DataBindingCardComponent,
    WaysToPayComponent,
    HowItWorksComponent,
    ManageBalanceComponent, 
    HomeComponent,
    BusinessComponent, 
    AcceptVenmoComponent,
    UserInfoComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
