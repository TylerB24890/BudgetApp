import React, { Component } from 'react'
import { Text, List, ListItem } from 'native-base'

import styles from './Styles/CategoryListStyle'

export default class CategoryList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: this.props.categories
    }
  }

  componentDidMount () {
    this.setState({
      categories: this.props.categories
    })
  }

  _configureCategoryList () {
    var categories = this.state.categories
    var items = []

    categories.forEach(function(cat) {
      items.push(cat.title)
    })

    return items
  }

  render () {
    var items = this._configureCategoryList()

    return (
      <List
        dataArray={items}
        renderRow={(item) =>
          <ListItem button onPress={() => console.log('Pressed!')}>
            <Text>{item}</Text>
          </ListItem>
        }>

      </List>
    )
  }
}
