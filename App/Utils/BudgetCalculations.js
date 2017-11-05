/**
 * Utility to calculate budget balances
 */

let BudgetCalculations = {
  sectionHeaderTotal: function(data, totalKey) {
    var sectionTotal = 0

    data.forEach( function (item) {
      if(item.key === totalKey) {
        var itemData = item.data
        itemData.forEach( function(lineItem) {
          sectionTotal += parseFloat(lineItem.cost)
        })
      }
    })

    return sectionTotal
  },

  expenseTotals: function(data) {
    var total = 0

    data.forEach(function(item) {
			var itemData = item.data
			itemData.forEach(function(expense) {
				total += expense.cost
			})
    })

    return total
  }
}

module.exports = BudgetCalculations
