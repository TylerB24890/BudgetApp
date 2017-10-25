// User Settings Schema
export const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    name: {type: 'string', default: ''},
    budgetName: {type: 'string', default: ''},
    starting: {type: 'float', default: 0},
    container: {type: 'string', default: ''},
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
    container: {type: 'string', default: ''},
    date: 'date'
  }
}

// Budget Container Schema
export const ContainerSchema = {
  name: 'BudgetContainer',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: {type: 'string', default: ''},
    containerStarting: {type: 'float', default: 0},
    date: 'date'
  }
}

// Budget Expense
export const ExpenseSchema = {
  name: 'BudgetItem',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    type: {type: 'string', default: ''},
    title: 'string',
    cost: 'float',
    displayDate: 'string',
    date: 'date'
  }
}
