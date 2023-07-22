import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { BalancesummaryComponent } from './balancesummary/balancesummary.component';
import { DonationComponent } from './donation/donation.component';
import { ExpenseComponent } from './expense/expense.component';
import { DonationService } from './donation.service';
import { ExpenseService } from './expense.service';

@NgModule({
  declarations: [
    AppComponent,
    DonationComponent,
    ExpenseComponent    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [
    DonationService,
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
