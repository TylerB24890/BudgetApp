import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import BalanceMessage from './BalanceMessage'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles, { positiveColor, negativeColor } from './Styles/BudgetBalanceStyle'

export default class BudgetBalance extends Component {

  constructor (props) {
    super(props)

    this.state = {
      balanceColor: positiveColor,
      starting: this.props.starting,
      balance: this.props.balance,
			user: this.props.user
    }
  }

  componentWillReceiveProps (nextProps) {

		var color = this.state.balanceColor

		if(nextProps.balance < 0) {
			color = negativeColor
		}

    this.setState({
      balance: nextProps.balance,
      starting: nextProps.starting,
			user: nextProps.user,
			balanceColor: color
    })
  }

  render () {
    return (
      <View style={styles.screenHeader}>
        <View style={styles.starting}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsScreen', { starting: this.state.starting })}>
						<Text style={styles.screenTitle}>Starting Balance: <Text style={styles.starting}>{CurrencyFormat.format(this.state.starting)}</Text></Text>
					</TouchableOpacity>
        </View>
        <View style={styles.available}>
          <Text style={styles.screenTitle}>Available: <Text style={{color: this.state.balanceColor}}>{CurrencyFormat.format(this.state.balance)}</Text></Text>
        </View>

				<BalanceMessage user={this.state.user} balance={this.state.balance} starting={this.state.starting} navigation={this.props.navigation} />
      </View>
    )
  }
}
