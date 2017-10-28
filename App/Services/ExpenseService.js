import Realm from 'realm'
import { ExpenseSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'

let realm = new Realm({schema: [ExpenseSchema]})

let ExpenseService = {
  getAllExpenses: function() {
    return realm.objects('BudgetItem').sorted('type')
  }
}

module.exports = ExpenseService
