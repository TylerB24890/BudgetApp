import DbUtils from '../Utils/DbUtils'

export class ExpenseModel {
  constructor(type, title, cost) {
    this.id = DbUtils.guid()
    this.type = type
    this.title = title
    this.cost = cost
  }
}

// Budget Expense
export const ExpenseSchema = {
  name: 'BudgetItem',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    type: 'string',
    title: 'string',
    cost: 'float'
  }
}
