import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/BudgetItemStyle'

import { CurrencyFormat } from '../Utils/CurrencyFormat'

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
							<View>
								<Text style={styles.itemDate}>{this.props.item.displayDate}</Text>
							</View>
            </View>
            <View style={styles.cost}>
              <Text style={[styles.itemCost]}>-{CurrencyFormat(this.props.item.cost)}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
