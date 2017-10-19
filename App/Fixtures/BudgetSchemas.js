// User Settings Schema
export const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    name: 'string',
    starting: 'float',
  }
}

// Realm Category Schema
export const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
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
