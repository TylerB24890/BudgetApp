import React from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import BudgetService from '../Services/BudgetService'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles from './Styles/BudgetItemStyle'

export default class BudgetItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item.title,
      cost: this.props.item.cost,
      type: this.props.item.type,
      itemId: this.props.item.id,
    }
  }

  editBudgetItem (title, type, cost) {

    var itemData = {
      id: this.state.itemId,
      type: type,
      title: title,
      cost: parseFloat(cost)
    }

    this.setState({
      item: title,
      cost: cost,
      type: type
    })

    if(!editBool) {
      BudgetService.update(itemData)
      this.props.updateBudgetOverview()
    }
  }

  navigateToEdit () {

    const {navigate} = this.props.navigation

    navigate(
      'EditItemScreen', {
        id: this.state.itemId,
        type: this.state.type,
        title: this.state.item,
        cost: this.state.cost
      }
    )
  }

  render () {

    return (
      <View>
        <TouchableHighlight onPress={() => this.navigateToEdit()} underlayColor="#34495e">
          <View style={styles.row}>
            <View style={styles.item}>
              <Text style={[styles.itemTitle, styles.label]}>{this.state.item}</Text>
            </View>
            <View style={styles.cost}>
              <Text style={[styles.itemCost, styles.label]}>${parseFloat(this.state.cost).toFixed(2)}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
