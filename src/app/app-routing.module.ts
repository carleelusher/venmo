import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WaysToPayComponent } from './routing/ways-to-pay.component';
import { HowItWorksComponent } from './routing/how-its-works.component';
import { ManageBalanceComponent } from './routing/manage-balance.component';
import { HomeComponent } from './routing/home.component';
import { BusinessComponent } from './routing/business.component';
import { AcceptVenmoComponent } from './routing/accept-venmo.component';

const routes: Routes = [
  {path: 'ways-to-pay', component : WaysToPayComponent},
  {path: 'how-it-works', component : HowItWorksComponent},
  {path: 'manage-balance', component : ManageBalanceComponent},
  {path: 'business-profiles', component : BusinessComponent},
  {path: 'accept-venmo', component : AcceptVenmoComponent},
  {path: '', component : HomeComponent}
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
export class AppRoutingModule { }.0