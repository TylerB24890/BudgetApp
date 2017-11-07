import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'
import ArrayHelper from '../Utils/ArrayHelper'
import { NewUserMessages, NegativeMessages, LowMessages, MediumMessages, StableMessages, HighMessages } from '../Fixtures/BalanceMessages'
import styles from './Styles/BalanceMessageStyle'

export default class BalanceMessage extends Component {

	constructor (props) {
		super(props)

		this.state = {
			balance: parseFloat(this.props.balance),
			starting: parseFloat(this.props.starting),
			percent: 0,
			message: ''
		}
	}

	componentDidMount () {
		var percentLeft = (this.state.balance/this.state.starting * 100)

		var returnMsg = this._returnMessage(percentLeft)

		this.setState({
			percent: percentLeft,
			message: returnMsg
		})
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.balance !== this.state.balance || nextProps.starting !== this.state.starting) {
			var balance = parseFloat(nextProps.balance)
			var starting = parseFloat(nextProps.starting)
			var percentLeft = (balance/starting * 100)

			this.setState({
				balance: balance,
				starting: starting,
				percent: percentLeft
			})
		}
	}

	_returnMessage (percentLeft) {

		if(percentLeft <= 0) {
			return ArrayHelper.randomValue(NegativeMessages)
		}

		if(percentLeft > 0 && percentLeft <= 20) {
			return ArrayHelper.randomValue(LowMessages)
		}

		if(percentLeft > 20 && percentLeft <= 50) {
			return ArrayHelper.randomValue(MediumMessages)
		}

		if(percentLeft > 50 && percentLeft <= 80) {
			return ArrayHelper.randomValue(StableMessages)
		}

		if(percentLeft > 80) {
			return ArrayHelper.randomValue(HighMessages)
		}
	}

	_renderBalanceMessage () {
		if(this.state.starting <= 0) {
			return (
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsScreen')}>
					<Text style={[styles.messageTextError, styles.messageText]}>{ArrayHelper.randomValue(NewUserMessages)}</Text>
				</TouchableOpacity>
			)
		} else {
			return (<Text style={[styles.messageText, styles.messageTextWhite]}>{this.state.message}</Text>)
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
