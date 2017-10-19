import DbUtils from '../Utils/DbUtils'

export class ExpenseModel {
  constructor(type, title, cost) {
    this.id = DbUtils.guid()
    this.type = type
    this.title = title
    this.cost = cost
  }
}

module.exports = ExpenseModel
