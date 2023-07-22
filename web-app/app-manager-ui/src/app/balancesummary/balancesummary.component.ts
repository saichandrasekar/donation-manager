import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DonationService } from '../donation.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';

import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Donation } from '../models/donation.model';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-balancesummary',
  templateUrl: './balancesummary.component.html',
  styleUrls: ['./balancesummary.component.css'],
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatCheckboxModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class BalancesummaryComponent implements AfterViewInit {
  displayedColumns: string[] = ['select','payerName','donationDate','paymentType','amount','purposeType','receiverName']; 
  
  dataSource : MatTableDataSource<Donation>;
  selection = new SelectionModel<Donation>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;  

  expenseDisplayedColumns: string[] = ['select','expenseType','expenseDate','amount','documentName']; 
  expenseDataSource: MatTableDataSource<Expense>;
  expenseSelection = new SelectionModel<Donation>(true, []);

  constructor(private donationService: DonationService, private expenseService: ExpenseService, private router: Router){
    let dataToDisplay = this.donationService.getDonations();    
    this.dataSource = new MatTableDataSource<Donation>(dataToDisplay);

    let expenseDataToDisplay = this.expenseService.getExpenses();
    this.expenseDataSource = new MatTableDataSource<Expense>(expenseDataToDisplay);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  addDonation() {
    this.router.navigateByUrl('/products');
  }

  editDonation() {
    this.router.navigateByUrl('/products');
  }

  addExpense() {
    this.router.navigateByUrl('/expenses');
  }

  editExpense() {
    this.router.navigateByUrl('/donations');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Donation): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

class ExampleDataSource extends DataSource<Donation> {
  private _dataStream = new ReplaySubject<Donation[]>();

  constructor(initialData: Donation[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Donation[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Donation[]) {
    this._dataStream.next(data);
  }
}