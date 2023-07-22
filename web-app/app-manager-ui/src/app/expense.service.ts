import { Injectable } from '@angular/core';

import { Expense } from './models/expense.model';

const ELEMENT_DATA: Expense[] = [  
  
  {position: 1, expenseId: 23423,	expenseType: 'Gas', expenseDate: '', documentName: 'gas-july.pdf', amount: 123213.23, documentPath: '/data/gas/bills'},
  {position: 2, expenseId: 5345,	expenseType: 'Food', expenseDate: '', documentName: 'gas-july.pdf', amount: 123213.23, documentPath: '/data/gas/bills'},
  {position: 3, expenseId: 454,	expenseType: 'Refreshments', expenseDate: '', documentName: 'gas-july.pdf', amount: 123213.23, documentPath: '/data/gas/bills'},
  {position: 4, expenseId: 4,	expenseType: 'Gas July', expenseDate: '', documentName: 'gas-july.pdf', amount: 123213.23, documentPath: '/data/gas/bills'},
  {position: 5, expenseId: 5,	expenseType: 'Gas Heater', expenseDate: '', documentName: 'gas-july.pdf', amount: 123213.23, documentPath: '/data/gas/bills'},
  {position: 6, expenseId: 23,	expenseType: 'Gas Tester', expenseDate: '', documentName: 'gas-july.pdf', amount: 123213.23, documentPath: '/data/gas/bills'},
  
  ];

@Injectable({
    providedIn: 'root'
  })
  export class ExpenseService {

    expenses: Expense[];

    constructor(){
    }

    getExpenses(): Expense[]{
      this.expenses = ELEMENT_DATA.concat([]);
      return this.expenses;
    }

}