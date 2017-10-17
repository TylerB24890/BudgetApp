import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import EditItem from './EditItem'
import BudgetService from '../Services/BudgetService'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles from './Styles/BudgetItemStyle'

export default class BudgetItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item.title,
      cost: this.props.item.cost,
      type: this.props.item.type,
      itemId: this.props.item.id,
      editing: false
    }
  }

  editBudgetItem (editBool, title, type, cost) {

    var itemData = {
      id: this.state.itemId,
      type: type,
      title: title,
      cost: parseFloat(cost)
    }

    this.setState({
      editing: editBool,
      item: title,
      cost: cost,
      type: type
    })

    if(!editBool) {
      BudgetService.update(itemData)
      this.props.updateBudgetOverview()
    }
  }

  render () {

    if(!this.state.editing) {
      return (
        <View>
          <TouchableHighlight onPress={() => this.editBudgetItem(true, this.state.item, this.state.type, this.state.cost)} underlayColor="#34495e">
            <View style={styles.row}>
              <View style={styles.item}>
                <Text style={[styles.itemTitle, styles.label]}>{this.state.item}</Text>
              </View>
              <View style={styles.cost}>
                <Text style={[styles.itemCost, styles.label]}>{CurrencyFormat.format(this.state.cost)}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.row}>
          <EditItem item={this.props.item} editHandler={this.editBudgetItem.bind(this)}/>
        </View>
      )
    }
  }
}
