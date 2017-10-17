import Realm from 'realm'
import BudgetModel from '../Fixtures/BudgetModel'

let repository = new Realm({
  schema: [{
    name: 'BudgetItem',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      type: 'string',
      title: 'string',
      cost: 'int'
    }
  }]
})

let BudgetService = {
  findAll: function(sortBy) {
    return repository.objects('BudgetItem').filtered("type = '" + sortBy + "'")
  },
  save: function(item) {
    repository.write(() => {
      repository.create('BudgetItem', item)
    })
  },
  update: function(item, callback) {
    if(!callback) return

    repository.write(() => {
      callback()
    })
  }
}

BudgetService.save(new BudgetModel("Monthly", "Test Realm Monthly", 433.33))
BudgetService.save(new BudgetModel("Daily", "Test Realm Daily", 420.00))
BudgetService.save(new BudgetModel("Misc", "Test Realm Misc", 4.20))

module.exports = BudgetService
