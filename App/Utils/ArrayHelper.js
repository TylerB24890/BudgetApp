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
  }
}

module.exports = ArrayHelper
