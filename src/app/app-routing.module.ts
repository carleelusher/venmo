import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WaysToPayComponent } from './routing/ways-to-pay/ways-to-pay.component';
import { HowItWorksComponent } from './routing/how-it-works/how-its-works.component';
import { ManageBalanceComponent } from './routing/manage-balance/manage-balance.component';
import { HomeComponent } from './routing/home/home.component';
import { BusinessComponent } from './routing/business/business.component';
import { AcceptVenmoComponent } from './routing/accept-venmo/accept-venmo.component';
import { FormComponent } from './form/form.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
   {path: '', component : HomeComponent},
  {path: 'ways-to-pay', component : WaysToPayComponent},
  {path: 'how-it-works', component : HowItWorksComponent},
  {path: 'manage-balance', component : ManageBalanceComponent},
  {path: 'business-profiles', component : BusinessComponent},
  {path: 'accept-venmo', component : AcceptVenmoComponent},
  {path: 'admin', component :FormComponent},
  {path: 'auth', component :AuthenticationComponent}

 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
