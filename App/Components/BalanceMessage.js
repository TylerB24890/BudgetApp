import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'
import ArrayHelper from '../Utils/ArrayHelper'
import { NewUserMessages, NegativeMessages, LowMessages, MediumMessages, StableMessages, HighMessages } from '../Fixtures/BalanceMessages'
import styles from './Styles/BalanceMessageStyle'

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
					<Text style={[styles.messageTextError, styles.messageText]}>{ArrayHelper.randomValue(NewUserMessages)}</Text>
				</TouchableOpacity>
			)
		}

		if(percentLeft <= 0) {
			returnMsg = ArrayHelper.randomValue(NegativeMessages)
		}

		if(percentLeft > 0 && percentLeft <= 15) {
			returnMsg = ArrayHelper.randomValue(LowMessages)
		}

		if(percentLeft > 15 && percentLeft <= 40) {
			returnMsg = ArrayHelper.randomValue(MediumMessages)
		}

		if(percentLeft > 40 && percentLeft <= 75) {
			returnMsg = ArrayHelper.randomValue(StableMessages)
		}

		if(percentLeft > 75) {
			returnMsg = ArrayHelper.randomValue(HighMessages)
		}

		return (<Text style={[styles.messageText, styles.messageTextWhite]}>{returnMsg}</Text>)
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
