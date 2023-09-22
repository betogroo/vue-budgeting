export interface Budget {
  id?: string
  name: string
  amount: number
  createdAt?: string
  color?: string
}

type BudgetFormData = Pick<Budget, 'name' | 'amount'>
