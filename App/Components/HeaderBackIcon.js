import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import styles from './Styles/HeaderIconStyle'

export default class HeaderBackIcon extends Component {

	constructor(props) {
		super(props)
	}

	render () {

		return (
			<TouchableOpacity style={styles.headerIcon} onPress={() => { this.props.navigation.goBack() }}>
				<Icon name="ios-close" style={{color: '#FFF', fontSize: 30}}/>
			</TouchableOpacity>
    )
  }
}
