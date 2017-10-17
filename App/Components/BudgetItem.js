import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import EditItem from './EditItem'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles from './Styles/BudgetItemStyle'

export default class BudgetItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: null,
      cost: null,
      editing: false
    }
  }

  componentDidMount () {
    this.setState({
      item: this.props.item.title,
      cost: this.props.item.cost,
      itemId: this.props.item.id,
      editing: false
    })
  }

  editBudgetItem (editBool, title, cost, id) {
    this.setState({
      editing: editBool,
      item: title,
      cost: cost
    })
  }

  render () {

    if(!this.state.editing) {
      return (
        <View>
          <TouchableHighlight onPress={() => this.editBudgetItem(true, this.state.item, this.state.cost, this.state.itemId)} underlayColor="#34495e">
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
          <EditItem title={this.state.item} cost={this.state.cost} editHandler={this.editBudgetItem.bind(this)}/>
        </View>
      )
    }
  }
}
