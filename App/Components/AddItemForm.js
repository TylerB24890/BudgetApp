import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles from './Styles/AddItemFormStyle'

export default class AddItemForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: '',
      cost: '',
      type: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        
      </View>
    )
  }
}
