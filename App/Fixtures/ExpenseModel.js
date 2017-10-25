import DbUtils from '../Utils/DbUtils'
import moment from 'moment'

export default class ExpenseModel {
  constructor(id = null, type, title, cost, date = null) {
    if(id === null) {
      this.id = DbUtils.guid()
    } else {
      this.id = id
    }

    if(date === '' || date === null) {
      date = moment().format("MMMM D, YYYY")
    }
    this.type = type
    this.title = title
    this.cost = cost
    this.displayDate = date
    this.date = new Date()
  }
}
