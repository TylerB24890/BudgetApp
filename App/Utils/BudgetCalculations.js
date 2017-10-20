/**
 * Utility to calculate budget balances
 */

let BudgetCalculations = {
  sectionTotal: function(data, totalKey) {

    if(!data)
      return

    var sectionTotal = 0

    data.forEach( function (item) {
      if(item.type === totalKey) {
        sectionTotal += parseFloat(item.cost)
      }
    })

    return sectionTotal
  },

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
  }
}

module.exports = BudgetCalculations
