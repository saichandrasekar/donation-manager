import { Injectable } from '@angular/core';
import { Donation } from './models/donation.model';

const ELEMENT_DATA: Donation[] = [  
  
{position: 1, donationId: 23423,	payerName: 'Chane', donationDate: '', paymentType: 'CASH', amount: 123213.23, purposeType: 'OFFERING', receiverName: 'John'},
{position: 2, donationId: 2432,	payerName: 'Chane', donationDate: '', paymentType: 'CASH', amount: 123213.23, purposeType: 'OFFERING', receiverName: 'John'},
{position: 3, donationId: 56456,	payerName: 'Chane', donationDate: '', paymentType: 'CASH', amount: 123213.23, purposeType: 'OFFERING', receiverName: 'John'},
{position: 4, donationId: 34,	payerName: 'Chane', donationDate: '', paymentType: 'CASH', amount: 123213.23, purposeType: 'OFFERING', receiverName: 'John'},
{position: 5, donationId: 234,	payerName: 'Chane', donationDate: '', paymentType: 'CASH', amount: 123213.23, purposeType: 'OFFERING', receiverName: 'John'}

];

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  donations: Donation[] = [];

  constructor() { }

  getDonations(): Donation[]{
    this.donations = ELEMENT_DATA.concat([]);
    return this.donations;
  }

  addDonation(donation: Donation) {
    this.donations.concat(donation)
  }
  
}
