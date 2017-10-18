import Realm from 'realm'
import SettingsModel from '../Fixtures/SettingsModel'
import ExpenseModel from '../Fixtures/ExpenseModel'
import CategoryModel from '../Fixtures/CategoryModel'

// User Settings Schema
const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    name: 'string',
    starting: 'float',
  }
}

// Realm Category Schema
const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
  }
}

// Budget Expense
const ExpenseSchema = {
  name: 'BudgetItem',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    type: 'string',
    title: 'string',
    cost: 'float'
  }
}

let realm = new Realm({schema: [SettingsSchema, CategorySchema, ExpenseSchema]})

// Settings table functions
let SettingsService = {
  findAll: function(sortBy) {
    return realm.objects('Settings').sorted('name')
  },
  save: function(item) {
    realm.write(() => {
      realm.create('Settings', item)
    })
  },
  update: function(item) {
    realm.write(() => {
      realm.create('Settings', item, true)
    })
  }
}

// Category table functions
let CategoryService = {
  findAll: function(sortBy) {
    return realm.objects('Category').sorted('title')
  },
  findById: function(id) {
    return realm.objects('Category').filtered('id = "' + id + '"')
  },
  save: function(item) {
    realm.write(() => {
      realm.create('Category', item)
    })
  },
  update: function(item) {
    realm.write(() => {
      realm.create('Category', item, true)
    })
  }
}

// BudgetItem (Expense) table functions
let ExpenseService = {
  findAll: function(sortBy) {
    return realm.objects('BudgetItem').sorted('type')
  },
  findById: function(id) {
    return realm.objects('BudgetItem').filtered('id = "' + id + '"')
  },
  save: function(item) {
    realm.write(() => {
      realm.create('BudgetItem', item)
    })
  },
  update: function(item) {
    realm.write(() => {
      realm.create('BudgetItem', item, true)
    })
  }
}

//SettingsService.save(new SettingsModel("Tyler Bailey", 4126.22))
//CategoryService.save(new CategoryModel("Monthly"))
//ExpenseService.save(new ExpenseModel("Monthly", "Test Realm Monthly", 433.20))

module.exports = SettingsService
module.exports = CategoryService
module.exports = ExpenseService
