import DbUtils from '../Utils/DbUtils'

export class ExpenseModel {
  constructor(id = null, type, title, cost) {
    if(id === null) {
      this.id = DbUtils.guid()
    } else {
      this.id = id
    }
    this.type = type
    this.title = title
    this.cost = cost
  }
}

module.exports = ExpenseModel
