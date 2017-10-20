import React, { Component } from 'react'
import { Text, List, ListItem, Icon, Button, Left, Body } from 'native-base'
import { TouchableOpacity } from 'react-native'
import CategoryForm from './CategoryForm'

import styles from './Styles/CategoryListStyle'

export default class CategoryList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: this.props.categories,
      editing: false,
      category: ''
    }
  }

  componentDidMount () {
    this.setState({
      categories: this.props.categories,
      editing: false,
      category: ''
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

  _navigateToEditCategory (cat) {
    const {navigate} = this.props.navigation

    navigate(
      'EditCategoryScreen', {
        category: cat,
        editing: true
      }
    )
  }

  _renderCategoryItem (item) {
    return (
      <ListItem
        iconLeft
        style={styles.listItem}
      >
        <Button iconLeft transparent primary>
          <Icon name="ios-close-circle-outline" style={{fontSize: 32, color: '#c0392b'}} />
        </Button>
        <TouchableOpacity
          onPress={() => this._navigateToEditCategory(item.id)}
        >
          <Text style={styles.listItemText}>{item}</Text>
        </TouchableOpacity>
      </ListItem>
    )
  }

  render () {
    var items = this._configureCategoryList()

    return (
      <List
        style={styles.list}
        dataArray={items}
        renderRow={(item) => this._renderCategoryItem(item)}>
      </List>
    )
  }
}
