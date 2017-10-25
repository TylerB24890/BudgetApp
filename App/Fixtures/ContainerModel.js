import DbUtils from '../Utils/DbUtils'

export default class ContainerModel {
  constructor(id = null, title, starting) {

    if(id === null) {
      this.id = DbUtils.guid()
    } else {
      this.id = id
    }
    this.title = title
    this.containerStarting = starting
    this.date = new Date()
  }
}
