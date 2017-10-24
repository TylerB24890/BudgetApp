import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import styles from './Styles/HeaderIconStyle'

export default class HeaderHomeIcon extends Component {

	constructor(props) {
		super(props)
	}

	render () {

		const {navigate} = this.props.navigation

    return (
			<TouchableOpacity style={styles.headerIcon} onPress={() => { navigate('BudgetView') }}>
				<Icon name="ios-home" style={{color: '#FFF', fontSize: 30}}/>
			</TouchableOpacity>
    )
  }
}
