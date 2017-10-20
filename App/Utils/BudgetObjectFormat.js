
class BudgetObjectFormat {
  constructor(data) {
    var budgetData = []
    var stateData = []
    var returnArray = []

    //console.log(Array.from(data))
    data.forEach(function (expense) {
      budgetData.push({key: expense.type, data: {title: expense.title, type: expense.type, cost: expense.cost, id: expense.id}})
    })

    for(var i = 0; i < budgetData.length; i++) {
      var type = budgetData[i].key

      if(!stateData[budgetData[i].key]) {
        stateData[budgetData[i].key] = []
      }

      stateData[budgetData[i].key].push(budgetData[i].data)
    }

    for (var type in stateData) {
      returnArray.push({key: type, data: stateData[type]})
    }

    return returnArray
  }
}

module.exports = BudgetObjectFormat
