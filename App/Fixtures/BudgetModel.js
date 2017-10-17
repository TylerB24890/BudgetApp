import DbUtils from '../Utils/DbUtils'

class BudgetModel {
  constructor(type, title, cost) {
    this.id = DbUtils.guid()
    this.type = type
    this.title = title
    this.cost = cost
  }
}

module.exports = BudgetModel
