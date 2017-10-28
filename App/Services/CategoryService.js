import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'

let realm = new Realm({path: 'CategorySelect.realm', schema: [CategorySchema]})

let CategoryService = {
  getCategoryTitle: function(cid) {
    let cat = {}
    var catTitle = ''

    cat = realm.objects('Category').filtered('id = "' + cid + '"')

    cat.forEach(function(item) {
      catTitle = item.title
    })

    return catTitle
  },

  getAllCategories: function() {
    return realm.objects('Category').sorted('title')
  },

  deleteCategory: function(cid) {
    realm.write(() => {
      var cat = realm.objects('Category').filtered('id = "' + cid + '"')
      realm.delete(cat)
    })

    return realm.objects('Category').sorted('title')
  },

  addCategory: function(title) {
    try {
      realm.write(() => {
        realm.create('Category', new CategoryModel(null, title))
      })

      var newCat = false
      var categories = realm.objects('Category').filtered('title = "' + title + '"')
      categories.forEach(function(cat) {
        newCat = cat.id
      })

      return newCat
    } catch (e) {
      console.log('Error category: ' + e)
      return false
    }
  },

  editCategory: function(cid, title) {
    try {
      realm.write(() => {
        realm.create('Category', new CategoryModel(cid, title), true)
      })

      return true
    } catch (e) {
      console.log('Error saving category: ' + e)
      return false
    }
  }
}

module.exports = CategoryService
