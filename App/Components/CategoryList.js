import React, { Component } from 'react'
import { Text, List, ListItem, Icon, Button } from 'native-base'
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

  componentWillReceiveProps (nextProps) {
    this.setState({
      categories: nextProps.categories
    })
  }

  _configureCategoryList () {
    var categories = this.state.categories
    var items = []

    categories.forEach(function(cat) {
      items.push({id: cat.id, title: cat.title})
    })

    return items
  }

  _navigateToEditCategory (cid, catTitle) {
    const {navigate} = this.props.navigation

    navigate(
      'EditCategoryScreen', {
        cid: cid,
        catTitle: catTitle,
        editing: true
      }
    )
  }

  _handleDeleteCategory (cid, title) {
    this.props.deleteHandler(cid, title)
  }

  _renderCategoryItem (item) {
    return (
      <ListItem
        iconLeft
        style={styles.listItem}
      >
        <Button iconLeft transparent primary onPress={() => this._handleDeleteCategory(item.id, item.title)}>
          <Icon name="ios-close-circle-outline" style={{fontSize: 32, color: '#c0392b'}} />
        </Button>
        <TouchableOpacity
          onPress={() => this._navigateToEditCategory(item.id, item.title)}
        >
          <Text style={styles.listItemText}>{item.title}</Text>
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
