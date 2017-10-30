import PushNotification from 'react-native-push-notification'
import ArrayHelper from '../Utils/ArrayHelper'
import moment from 'moment'

import NotificationMessages from '../Utils/NotificationMessages'

let NotificationService = {
  configureNotifications: function () {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('Notification: ' + notification.data.id)
      }
    })
  },

  scheduleNotificationMessage: function(name, balance, type = false) {

    // 9am
    var dateToNotify = moment().add(1, 'day').startOf('day').add(9, 'hours')
    var messages = NotificationMessages.MorningNotificationMessages(name, balance)

    // If after or equal to 5pm
    if(moment().hour() >= 17) {
      // Set an evening notification for the next day
      dateToNotify = moment().add(1, 'day').startOf('day').add(18, 'hours')
      // Grab evening messages
      messages = NotificationMessages.EveningNotificationMessages(name, balance)
    }

    NotificationService.configureNotifications()

    PushNotification.localNotificationSchedule({
      id: '1',
      title: "Budget Reminder!",
      message: ArrayHelper.randomValue(messages),
      playSound: false,
      date: dateToNotify
    })
  },

  cancelNotificationMessage: function(nid) {
    PushNotification.cancelLocalNotifications({id: nid})
  }
}

/*
class NotificationService {

  constructor(type, balance, name, cancel = false) {

    if(!cancel) {
      this._scheduleNotification(type, balance,  name)
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

        if(notification.userInteraction) {
          PushNotification.cancelAllLocalNotifications()
        } else {
          switch(notification.data.id) {
            case 'morning' :
              if(moment().isoWeekday() !== 5 && moment().isoWeekday() !== 4) {
                PushNotification.cancelLocalNotifications({id: 'evening'})
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
              PushNotification.cancelLocalNotifications({id: 'morning'})
            break;
            case 'friday' :
              PushNotification.cancelLocalNotifications({id: 'evening'})
              PushNotification.cancelLocalNotifications({id: 'morning'})
            break;
            case 'low' :
              PushNotification.cancelLocalNotifications({id: 'morning'})
            break;
          }
        }
      }
    })
  }

	_scheduleNotification(type, balance, name) {

    var notificationMessage = []

		this._configureNotifications()

    switch(type) {
      case 'morning' :
        notificationMessage = NotificationMessages.MorningNotificationMessages(name, balance)
        PushNotification.localNotificationSchedule({
          id: 'morning',
          title: "Budget Reminder!",
          message: ArrayHelper.randomValue(notificationMessage),
          playSound: false,
          date: moment().add(1, 'day').hours(9).startOf('hour')
        })
      break;
      case 'evening' :
        notificationMessage = NotificationMessages.EveningNotificationMessages(name, balance)
        PushNotification.localNotificationSchedule({
          id: 'evening',
          title: "Budget Reminder!",
          message: ArrayHelper.randomValue(notificationMessage),
    			playSound: true,
          date: moment().add(2, 'days').hours(19).startOf('hour')
        })
      break;
      case 'thursday' :
        notificationMessage = NotificationMessages.ThursdayNotificationMessages(name, balance)
        PushNotification.localNotificationSchedule({
          id: 'friday',
          title: "Budget Reminder!",
          message: ArrayHelper.randomValue(notificationMessage),
          playSound: true,
          date: moment().isoWeekday("Thursday").hours(20).startOf('hour')
        })
      break;
      case 'friday' :
        notificationMessage = NotificationMessages.FridayNotificationMessages(name, balance)
        PushNotification.localNotificationSchedule({
          id: 'friday',
          title: "Budget Reminder!",
          message: ArrayHelper.randomValue(notificationMessage),
    			playSound: true,
          date: moment().isoWeekday("Friday").hours(18).startOf('hour')
        })
      break;
      case 'low' :
        notificationMessage = NotificationMessages.LowNotificationMessages(name, balance)
        PushNotification.localNotificationSchedule({
          id: 'low',
          title: "Budget Reminder!",
          message: ArrayHelper.randomValue(notificationMessage),
    			playSound: false,
          date: moment().add(1, 'days').hours(8).startOf('hour')
        })
      break;
			case 'test' :
        notificationMessage = NotificationMessages.TestNotificationMessage(name, balance)
        PushNotification.localNotificationSchedule({
          id: 'test',
          title: "Budget Reminder!",
          message: ArrayHelper.randomValue(notificationMessage),
          playSound: true,
          date: moment().add(10, 'seconds')
        })
			break;
    }
	}
}
*/


module.exports = NotificationService
