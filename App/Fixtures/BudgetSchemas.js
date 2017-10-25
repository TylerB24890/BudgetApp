// User Settings Schema
export const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    name: 'string',
    budgetName: {type: 'string', default: ''},
    starting: 'float',
    date: 'date'
  }
}

// Realm Category Schema
export const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
    categoryLimit: {type: 'float', default: 0},
    date: 'date'
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
    cost: 'float',
    displayDate: 'string',
    date: 'date'
  }
}
