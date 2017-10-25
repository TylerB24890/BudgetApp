import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/BudgetItemStyle'

export default class BudgetItem extends React.Component {

  constructor (props) {
    super(props)
  }

  _navigateToEdit () {

    const {navigate} = this.props.navigation

    navigate(
      'EditItemScreen', {
        id: this.props.item.id,
        type: this.props.item.type,
        title: this.props.item.title,
        cost: this.props.item.cost,
				displayDate: this.props.item.displayDate
      }
    )
  }

  render () {

    return (
      <View>
        <TouchableHighlight onPress={() => this._navigateToEdit()} underlayColor="#34495e">
          <View style={styles.row}>
            <View style={styles.item}>
              <Text style={[styles.itemTitle, styles.label]}>
								{this.props.item.title}
							</Text>
            </View>
            <View style={styles.cost}>
              <Text style={[styles.itemCost, styles.label]}>${parseFloat(this.props.item.cost).toFixed(2)}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
