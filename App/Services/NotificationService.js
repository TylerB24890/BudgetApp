import PushNotification from 'react-native-push-notification'
import { AsyncStorage } from 'react-native'
import ArrayHelper from '../Utils/ArrayHelper'
import moment from 'moment'

import NotificationMessages from '../Utils/NotificationMessages'

let NotificationService = {

  configureNotifications: function () {
    PushNotification.configure({
      onNotification: function(notification) {
        //console.log('Notification: ' + notification.data.id)
        switch(notification.data.id) {
          case 'morning' :
            NotificationService.cancelNotificationMessage('evening')
          break;
          case 'evening' :
            NotificationService.cancelNotificationMessage('morning')
          break;
        }
      }
    })
  },

  scheduleNotificationMessage: function(name, balance, type = 'morning') {


    // 9am
    var dateToNotify = moment().add(1, 'day').startOf('day').add(9, 'hours').valueOf()
    var message = ArrayHelper.randomValue(NotificationMessages.MorningNotificationMessages(name, balance))

    if(type === 'test') {
      dateToNotify = moment().add(10, 'seconds').valueOf()
      message = ArrayHelper.randomValue(NotificationMessages.MorningNotificationMessages(name, balance))
    }

    // If after or equal to 5pm
    if(moment().hour() >= 17) {
      // Set an evening notification for the next day
      dateToNotify = moment().add(1, 'day').startOf('day').add(18, 'hours').valueOf()
      // Grab evening messages
      message = ArrayHelper.randomValue(NotificationMessages.EveningNotificationMessages(name, balance))
      type = 'evening'
    }

    AsyncStorage.getItem('scheduledNotification').then(value => {
			if(value == undefined || typeof value == 'undefined' || value == null) {
        try {
          AsyncStorage.setItem('scheduledNotification', type).then(() => {
            NotificationService._notificationScheduler(dateToNotify, type, message)
          })
        } catch (error) {
          //console.log('Error scheduling notification: ' + error)
          return false
        }
			} else {
        if(value !== type) {
          try {
            AsyncStorage.setItem('scheduledNotification', type).then(() => {
              NotificationService._notificationScheduler(dateToNotify, type, message)
            })
          } catch (error) {
            //console.log('Error scheduling notification: ' + error)
            return false
          }
        }
			}
		})
  },

  _notificationScheduler: function(dateToNotify, type, message) {
    NotificationService.configureNotifications()

    PushNotification.localNotificationSchedule({
      id: type,
      title: "Save Sumthing!",
      message: message,
      playSound: false,
      date: dateToNotify
    })
  },

  cancelNotificationMessage: function(nid) {
    PushNotification.cancelLocalNotifications({id: nid})

    AsyncStorage.getItem('scheduledNotification').then(value => {
			if(value !== undefined && typeof value !== 'undefined' && value !== null) {
        if(value === type) {
          AsyncStorage.removeItem('scheduledNotification')
        }
			}
		})
  },
}

module.exports = NotificationService
