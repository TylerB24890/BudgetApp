import PushNotification from 'react-native-push-notification'
import ArrayHelper from '../Utils/ArrayHelper'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import moment from 'moment'

import {
  MorningNotificationMessages,
  EveningNotificationMessages,
  ThursdayNotificationMessages,
  FridayNotificationMessages,
  SundayNotificationMessages,
  LowNotificationMessages,
  RandomNotificationMessages
} from '../Fixtures/NotificationMessages'

class BudgetNotifications {

  constructor(type, balance = 0, starting = 0, name = false, title = 'BudgetDown Reminder!', cancel = false) {

    if(!cancel) {
      this._scheduleNotification(type, balance, starting, name, title)
    } else {
      this._cancelNotification(type)
    }
  }

  _cancelNotification (nid) {
    PushNotification.cancelLocalNotifications({id: nid})
  }

  _configureNotifications () {
    PushNotification.configure({
      onNotification: function(notification) {

        PushNotification.cancelLocalNotifications({id: notification.data.id})

        if(notification.userInteraction) {
          PushNotification.cancelAllLocalNotifications()
        } else {
          switch(notification.data.id) {
            case 'morning' :
              if(moment().isoWeekday() == 5) {
                PushNotification.cancelLocalNotifications({id: 'friday'})
                PushNotification.cancelLocalNotifications({id: 'evening'})
              }

              if(moment().isoWeekday() == 4) {
                PushNotification.cancelLocalNotifications({id: 'thursday'})
              }

              PushNotification.cancelLocalNotifications({id: 'low'})
            break;
            case 'evening' :
              PushNotification.cancelLocalNotifications({id: 'morning'})

              if(moment().isoWeekday() === 4) {
                PushNotification.cancelLocalNotifications({id: 'thursday'})
              }
            break;
            case 'thursday' :
              PushNotification.cancelLocalNotifications({id: 'friday'})
              PushNotification.cancelLocalNotifications({id: 'morning'})
            break;
            case 'friday' :
              PushNotification.cancelLocalNotifications({id: 'evening'})
              PushNotification.cancelLocalNotifications({id: 'morning'})
            break;
            case 'low' :
              if(moment().isoWeekday() == 5) {
                PushNotification.cancelLocalNotifications({id: 'friday'})
                PushNotification.cancelLocalNotifications({id: 'evening'})
              }

              if(moment().isoWeekday() === 4) {
                PushNotification.cancelLocalNotifications({id: 'thursday'})
              }

              PushNotification.cancelLocalNotifications({id: 'morning'})
            break;
          }
        }
      }
    })
  }

	_scheduleNotification(type, balance, starting, name, title) {

    if(name !== false && name !== '' && balance !== '' && balance !== 0) {
      MorningNotificationMessages.push("Good morning, " + name + "! Your balance today is " + CurrencyFormat(balance) + ". Don't forget to keep your budget up to date!")
      FridayNotificationMessages.push("Happy Friday, " + name + "! Don't overspend this weekend!")
      LowNotificationMessages.push(name + ", your cutting it close on your budget. Check now so you don't overspend!")
      LowNotificationMessages.push(name + ", your balance is " + CurrencyFormat(balance) + ". Have you updated your budget lately?")
    } else if(balance !== 0) {
      MorningNotificationMessages.push("Good morning! Your balance today is " + CurrencyFormat(balance) + ". Don't forget to keep your budget up to date!")
      EveningNotificationMessages.push("Good evening! Your balance today is " + CurrencyFormat(balance) + ". Did you update your expenses today?")
      LowNotificationMessages.push("Careful! Your balance is getting low!\nCurrent Balance: " + CurrencyFormat(balance))
    }

		this._configureNotifications()

    switch(type) {
      case 'morning' :
        PushNotification.localNotificationSchedule({
          id: 'morning',
          title: title,
          message: ArrayHelper.randomValue(MorningNotificationMessages),
          playSound: false,
          date: moment().add(1, 'day').hours(8).startOf('hour')
        })
      break;
      case 'evening' :
        PushNotification.localNotificationSchedule({
          id: 'evening',
          title: title,
          message: ArrayHelper.randomValue(EveningNotificationMessages),
    			playSound: true,
          date: moment().add(3, 'days').hours(19).startOf('hour')
        })
      break;
      case 'thursday' :
        PushNotification.localNotificationSchedule({
          id: 'friday',
          title: title,
          message: ArrayHelper.randomValue(ThursdayNotificationMessages),
          playSound: true,
          date: moment().isoWeekday(4).hours(20).startOf('hour')
        })
      break;
      case 'friday' :
        PushNotification.localNotificationSchedule({
          id: 'friday',
          title: title,
          message: ArrayHelper.randomValue(FridayNotificationMessages),
    			playSound: true,
          date: moment().isoWeekday(5).hours(18).startOf('hour')
        })
      break;
      case 'low' :
        PushNotification.localNotificationSchedule({
          id: 'low',
          title: title,
          message: ArrayHelper.randomValue(LowNotificationMessages),
    			playSound: false,
          date: moment().add(1, 'days').hours(8).startOf('hour')
        })
      break;
			case 'test' :
        PushNotification.localNotificationSchedule({
          id: 'test',
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
