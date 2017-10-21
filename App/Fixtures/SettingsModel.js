import DbUtils from '../Utils/DbUtils'

class SettingsModel {
  constructor(id = null, name, starting) {
    if(id === null) {
      this.id = DbUtils.guid()
    } else {
      this.id = id
    }
    this.name = name,
    this.starting = starting
  }
}

module.exports = SettingsModel
