import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles, { positiveColor, negativeColor } from './Styles/BudgetBalanceStyle'

export default class BudgetBalance extends Component {

  constructor(props) {
    super(props)

    this.state = {
      balanceColor: positiveColor
    }
  }

  componentDidMount () {
    if(this.props.balance < 0) {
      this.setState({
        balanceColor: negativeColor
      })
    }
  }

  render () {
    return (
      <View style={styles.screenHeader}>
        <View style={styles.starting}>
          <Text style={styles.screenTitle}>Starting Balance: <Text style={styles.starting}>{CurrencyFormat.format(this.props.starting)}</Text></Text>
        </View>
        <View style={styles.available}>
          <Text style={styles.screenTitle}>Available: <Text style={{color: this.state.balanceColor}}>{CurrencyFormat.format(this.props.balance)}</Text></Text>
        </View>
      </View>
    )
  }
}
