import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BalancesummaryComponent } from './balancesummary/balancesummary.component';
import { Donation } from './models/donation.model';
import { Expense } from './models/expense.model';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DonationComponent } from './donation/donation.component';
import { ExpenseComponent } from './expense/expense.component';


const routes: Routes = [
  { path: 'donation', component: DonationComponent},
  { path: 'expense', component: ExpenseComponent},
  { path: '**', component: BalancesummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
