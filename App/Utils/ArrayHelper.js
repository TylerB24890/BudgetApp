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
  // Sort items by key
  sortObjectArray: function(array, key) {
    array.forEach((item) => {
      var arr = item.data
      return arr.sort((a, b) => {
        return ArrayHelper.getObjectValue(a, key) - ArrayHelper.getObjectValue(b, key)
      })
    })
  },
  getObjectValue: function(obj, param) {
    for(const [key, value] of Object.entries(obj)) {
      if(key === param) {
        return value
      }
    }
  }
}

module.exports = ArrayHelper
