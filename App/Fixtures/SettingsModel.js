import DbUtils from '../Utils/DbUtils'

export default class SettingsModel {
  constructor(name, starting) {
    this.id = DbUtils.guid()
    this.name = name,
    this.starting = starting
  }
}

// User Settings Schema
export const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    name: 'string',
    starting: 'float',
  }
}
