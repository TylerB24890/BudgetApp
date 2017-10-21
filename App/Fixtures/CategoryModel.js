import DbUtils from '../Utils/DbUtils'

class CategoryModel {
  constructor(id = null, title) {

    if(id === null) {
      this.id = DbUtils.guid()
    } else {
      this.id = id
    }
    this.title = title
  }
}

module.exports = CategoryModel
