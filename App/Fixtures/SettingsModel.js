import DbUtils from '../Utils/DbUtils'

export default class SettingsModel {
  constructor(id = null, name, budgetName, starting) {
    if(id === null) {
      this.id = DbUtils.guid()
    } else {
      this.id = id
    }
    this.name = name,
    this.budgetName = budgetName,
    this.starting = starting,
    this.date = new Date()
  }
}
