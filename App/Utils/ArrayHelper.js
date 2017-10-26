let ArrayHelper = {
  mergeUnique: function(arr1, arr2) {
    arr1.concat(arr2.filter(
      function(el) {
        return arr1.indexOf(el) === -1
      })
    )
  },
  randomValue: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  },
  // Sort items by price
  sortObjectArray: function(array) {
    array.forEach((item) => {
      var arr = item.data
      return arr.sort((a, b) => {
        return ArrayHelper.getObjectValue(a) - ArrayHelper.getObjectValue(b)
      })
    })
  },
  getObjectValue: function(obj) {
    for(var k in obj) {
      return obj.cost
    }
  }
}

module.exports = ArrayHelper
