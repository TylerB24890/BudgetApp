import Realm from 'realm'
import { ExpenseSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'

let realm = new Realm({schema: [ExpenseSchema]})

let ExpenseService = {
  getAllExpenses: function() {
    return realm.objects('BudgetItem').sorted('type')
  },

  addNewExpense: function(title, cost, displayDate, type) {
    try {
      realm.write(() => {
        realm.create('BudgetItem', new ExpenseModel(null, type, title, parseFloat(cost), displayDate))
      })

      return true
    } catch (e) {
      console.log('Error saving budget item: ' + e)
      return false
    }
  },

  editExpense: function(id, title, cost, displayDate, type) {
    try {
      realm.write(() => {
        realm.create('BudgetItem', new ExpenseModel(id, type, title, parseFloat(cost), displayDate), true)
      })

      return true
    } catch (e) {
      console.log('Error saving budget item: ' + e)
      return false
    }
  },

  deleteExpense: function(id) {
    try {
      realm.write(() => {
        var expense = realm.objects('BudgetItem').filtered('id = "' + id + '"')
        realm.delete(expense)
      })

      return true

    } catch (e) {
      console.log('Error deleting budget item: ' + e)
      return false
    }
  },

  deleteExpenseByCategory(cid) {
    realm.write(() => {
      var expenses = realm.objects('BudgetItem').filtered('type = "' + cid + '"')
      realm.delete(expenses)
    })
  }
}

module.exports = ExpenseService
