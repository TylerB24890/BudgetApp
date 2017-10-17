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
      cost: 'float'
    }
  }]
})

let BudgetService = {
  findAll: function(sortBy) {
    return repository.objects('BudgetItem').sorted('type')
  },
  findById: function(id) {
    return repository.objects('BudgetItem').filtered('id = "' + id + '"')
  },
  save: function(item) {
    repository.write(() => {
      repository.create('BudgetItem', item)
    })
  },
  update: function(item) {
    repository.write(() => {
      repository.create('BudgetItem', item, true)
    })
  }
}

BudgetService.save(new BudgetModel("Monthly", "Test Realm Monthly", 433.20))

module.exports = BudgetService
