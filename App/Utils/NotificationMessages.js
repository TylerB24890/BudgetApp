import { CurrencyFormat } from '../Utils/CurrencyFormat'

let returnArr = []

let NotificationMessages = {

  /**
   * Morning Notification Messages
   */
  MorningNotificationMessages: function(name, balance) {
    returnArr = [
      "Good morning! Don't forget to update your expenses today!",
      "Update your budget with expenses as you go today. It makes tracking your expenses easy!",
      "Stop wondering where your money went! Update your budget on the go!"
    ]
    if(name !== '' && name !== false && balance !== 0) {
      returnArr.push("Good morning, " + name + "! Your balance today is " + CurrencyFormat(balance) + ". Is it up to date?")
    } else if(balance !== 0) {
      returnArr.push("Good morning! Your balance today is " + CurrencyFormat(balance) + ". Don't forget to keep your budget up to date!")
    }

    return returnArr
  },

  /**
   * Evening Notification Messages
   */
  EveningNotificationMessages: function(name, balance) {
    returnArr = [
      "Good evening! Are your expenses up to date?",
      "Update your budget with today's expenses!",
      "Did you update your budget today? Do it now!"
    ]

    if(name !== '' && name !== false && balance !== 0) {
      returnArr.push("Good evening, " + name + "! Your balance today is " + CurrencyFormat(balance) + ". Is it up to date?")
    } else if(balance !== 0) {
      returnArr.push("Good evening! Your balance today is " + CurrencyFormat(balance) + ". Did you update your expenses today?")
    }

    return returnArr
  },

  /**
   * Thursday Notification Messages
   */
  ThursdayNotificationMessages: function(name, balance) {
    returnArr = [
      "Weekend plans? Make sure you can afford it. Check your budget now!",
    ]

    return returnArr
  },

  /**
   * Friday Notification Messages
   */
  FridayNotificationMessages: function(name, balance) {
    returnArr = [
      "Helllooo Friday! Make sure your budget is up to date so you don't overspend this weekend!",
      "TGIF am I right? Check your budget, don't overspend this weekend!",
    ]

    if(name !== '' && name !== false && balance !== 0) {
      returnArr.push("Happy Friday, " + name + "! Don't overspend this weekend!")
    }

    return returnArr
  },

  /**
   * Low Notification Messages
   */
  LowNotificationMessages: function(name, balance) {
    returnArr = [
      "Your cutting it close on your budget. Check now so you don't overspend!",
      "Keep an eye on your budget. It looks like you're getting a little low."
    ]

    if(name !== '' && name !== false && balance !== 0) {
      returnArr.push(name + ", your cutting it close on your budget. Check now so you don't overspend!")
      returnArr.push(name + ", your balance is " + CurrencyFormat(balance) + ". Have you updated your budget lately?")
    } else if(balance !== 0) {
      returnArr.push("Careful! Your balance is getting low! Current Balance: " + CurrencyFormat(balance))
    }
  },

  /**
   * Test Notification Messages
   */
  TestNotificationMessage: function(name, balance) {
    return NotificationMessages.MorningNotificationMessages(name, balance)
  }
}

module.exports = NotificationMessages
