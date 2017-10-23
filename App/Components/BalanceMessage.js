import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'
import styles from './Styles/BalanceMessageStyle'

const messages = {
	negative: "Damn, you're broke.",
	low: "Time to cut back on the spending...",
	medium: "Your balance is getting pretty low...",
	stable: "You're doing good, keep it up.",
	high: "You're killing it in the finance game.",
	rich: "Treat yo' self.",
	noStarting: "You should enter a starting balance..."
}

export default class BalanceMessage extends Component {

	constructor (props) {
		super(props)
	}

	_renderBalanceMessage () {
		var returnMsg = ''
		var balance = parseFloat(this.props.balance)
		var starting = parseFloat(this.props.starting)

		var percentLeft = (balance/starting * 100)

		if(starting <= 0) {
			return (
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsScreen')}>
					<Text style={[styles.messageTextError, styles.messageText]}>{messages.noStarting}</Text>
				</TouchableOpacity>
			)
		} else {
			if(percentLeft <= 0) {
				returnMsg = messages.negative
			}

			if(percentLeft > 0 && percentLeft <= 10) {
				returnMsg = messages.low
			}

			if(percentLeft > 10 && percentLeft <= 40) {
				returnMsg = messages.medium
			}

			if(percentLeft > 40 && percentLeft <= 60) {
				returnMsg = messages.stable
			}

			if(percentLeft > 60 && percentLeft <= 80) {
				returnMsg = messages.high
			}

			if(percentLeft > 80) {
				returnMsg = messages.rich
			}

			return (<Text style={[styles.messageText, styles.messageTextWhite]}>{returnMsg}</Text>)
		}
	}

	render () {
		let balanceMsg = null
		balanceMsg = this._renderBalanceMessage()

    return (
			<View style={styles.container}>
      	{balanceMsg}
			</View>
    )
  }
}
