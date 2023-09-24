export interface Budget {
  id?: string
  name: string
  amount: number
  createdAt?: string
  color?: string
}

export interface Expense {
  id?: string
  name: string
  amount: number
  budget_id: Budget['id']
  createdAt?: string
}

export type BudgetFormData = Pick<Budget, 'name' | 'amount'>
export type ExpenseFormData = Pick<Expense, 'name' | 'amount' | 'budget_id'>
