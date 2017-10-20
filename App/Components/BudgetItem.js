import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/BudgetItemStyle'

export default class BudgetItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: this.props.item.title,
      cost: this.props.item.cost,
      type: this.props.item.type,
      id: this.props.item.id,
    }
  }

  navigateToEdit () {

    const {navigate} = this.props.navigation

    navigate(
      'EditItemScreen', {
        id: this.state.id,
        type: this.state.type,
        title: this.state.title,
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
              <Text style={[styles.itemTitle, styles.label]}>{this.state.title}</Text>
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
