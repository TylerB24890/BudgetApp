import Realm from 'realm'
import { SettingsSchema } from '../Fixtures/BudgetSchemas'
import SettingsModel from '../Fixtures/SettingsModel'

let realm = new Realm({path: 'SettingsScreen.realm', schema: [SettingsSchema]})

let SettingsService = {
  getAllSettings: function() {
    return realm.objects('Settings').sorted('id')
  },

  newSettings: function(id, user, budgetName, starting) {
    try {
      realm.write(() => {
        realm.create('Settings', new SettingsModel(id, user, budgetName, starting), true)
      })

      return realm.objects('Settings').filtered('name = "' + user + '"')

    } catch (e) {
      console.log('Error opening Settings table: ' + e)
      return false
    }
  }
}

module.exports = SettingsService
