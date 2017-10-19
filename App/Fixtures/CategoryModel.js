import DbUtils from '../Utils/DbUtils'

export class CategoryModel {
  constructor(title) {
    this.id = DbUtils.guid()
    this.title = title
  }
}

// Realm Category Schema
export const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
  }
}
