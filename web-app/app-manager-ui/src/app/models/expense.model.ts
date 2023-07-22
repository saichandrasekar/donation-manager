export interface Expense {
	expenseId: number,
	expenseType: string;
	expenseDate: string;
	amount: number;
	documentName: string;
	documentPath: string;
	position: number;
}