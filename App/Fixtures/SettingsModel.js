import DbUtils from '../Utils/DbUtils'

class SettingsModel {
  constructor(name, starting) {
    this.id = DbUtils.guid()
    this.name = name,
    this.starting = starting
  }
}

module.exports = SettingsModel
