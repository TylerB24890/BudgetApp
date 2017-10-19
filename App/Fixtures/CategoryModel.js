import DbUtils from '../Utils/DbUtils'

class CategoryModel {
  constructor(title) {
    this.id = DbUtils.guid()
    this.title = title
  }
}

module.exports = CategoryModel
