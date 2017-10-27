import PushNotification from 'react-native-push-notification'
import ArrayHelper from '../Utils/ArrayHelper'
import moment from 'moment'

import {
  MorningNotificationMessages,
  EveningNotificationMessages,
  FridayNotificationMessages,
  SundayNotificationMessages,
  LowNotificationMessages,
  RandomNotificationMessages
} from '../Fixtures/NotificationMessages'

class BudgetNotifications {

  constructor(type, balance = 0, starting = 0, name = false, title = 'BudgetDown Reminder!') {
		this._scheduleNotification(type, balance, starting, name, title)
  }

  _configureNotifications () {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'BUDGET NOTIFICATION: ', notification )
      }
    })
  }

	_scheduleNotification(type, balance, starting, name, title) {

    if(name !== false && balance !== 0) {
      MorningNotificationMessages.push("Good morning, " + name + "! Your balance today is " + balance + ". Don't forget to keep your budget up to date!")
      EveningNotificationMessages.push("Good evening, " + name + "! Your balance today is " + balance + ". Did you update your expenses today?")
      FridayNotificationMessages.push("Happy Friday, " + name + "! Don't overspend this weekend!")
      LowNotificationMessages.push(name + ", your cutting it close on your budget. Check now so you don't overspend!")
      LowNotificationMessages.push(name + ", your balance is " + balance + ". Have you updated your budget lately?")
    } else if(balance !== 0) {
      MorningNotificationMessages.push("Good morning! Your balance today is " + balance + ". Don't forget to keep your budget up to date!")
      EveningNotificationMessages.push("Good evening! Your balance today is " + balance + ". Did you update your expenses today?")
      LowNotificationMessages.push("Your balance is " + balance + ". Have you updated your budget lately?")
    }

		this._configureNotifications()

    switch(type) {
      case 'morning' :
        PushNotification.localNotificationSchedule({
          id: '1',
          title: title,
          message: ArrayHelper.randomValue(MorningNotificationMessages),
          playSound: false,
          date: moment().add(1, 'day').hours(8).startOf('hour')
        })
      break;
      case 'evening' :
        PushNotification.localNotificationSchedule({
          id: '2',
          title: title,
          message: ArrayHelper.randomValue(EveningNotificationMessages),
    			playSound: true,
          date: moment().add(3, 'days').hours(19).startOf('hour')
        })
      break;
      case 'friday' :
        PushNotification.localNotificationSchedule({
          id: '3',
          title: title,
          message: ArrayHelper.randomValue(FridayNotificationMessages),
    			playSound: true,
          date: moment().day(5).hours(18).startOf('hour')
        })
      break;
      case 'low' :
        PushNotification.localNotificationSchedule({
          id: '4',
          title: title,
          message: ArrayHelper.randomValue(LowNotificationMessages),
    			playSound: false,
          date: moment().add(1, 'days').hours(8).startOf('hour')
        })
      break;
			case 'test' :
        PushNotification.localNotificationSchedule({
          id: '5',
          title: title,
          message: ArrayHelper.randomValue(MorningNotificationMessages),
          playSound: true,
          date: moment().add(10, 'seconds')
        })
			break;
    }
	}
}

module.exports = BudgetNotifications
