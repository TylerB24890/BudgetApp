import ArrayHelper from './ArrayHelper'

/**
 * Class to format the budget state object by 'key' (Category)
 */
class BudgetObjectFormat {
  constructor(data, sort) {
    var budgetData = []
    var stateData = []
    var returnArray = []

    // Create the initial array to sort
    data.forEach(function (expense) {
      budgetData.push({key: expense.type, data: {title: expense.title, type: expense.type, cost: expense.cost, displayDate: expense.displayDate, date: expense.date, id: expense.id}})
    })

    // Loop through array and create new array by key (category type)
    for(var i = 0; i < budgetData.length; i++) {
      var type = budgetData[i].key

      if(!stateData[budgetData[i].key]) {
        stateData[budgetData[i].key] = []
      }

      stateData[budgetData[i].key].push(budgetData[i].data)
    }

    // Loop through each type (category) and assign the expense data
    for (var type in stateData) {
      returnArray.push({key: type, data: stateData[type]})
    }

    // Sort the expense data in each category by cost (lowest to highest)
    ArrayHelper.sortObjectArray(returnArray, sort)
    return returnArray
  }
}

module.exports = BudgetObjectFormat
