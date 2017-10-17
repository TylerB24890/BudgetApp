import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CurrentDateStyle'

const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default class CurrentDate extends Component {

  constructor(props) {
    super(props)

    this.state = {
      budgetDate: ''
    }
  }

  componentDidMount() {
    var t = new Date()

    this.setState({
      budgetDate: MonthNames[t.getMonth()] + ', ' + t.getFullYear()
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{this.state.budgetDate}</Text>
      </View>
    )
  }
}
