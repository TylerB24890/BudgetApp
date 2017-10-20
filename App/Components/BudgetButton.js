import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import styles from './Styles/BudgetButtonStyle'

export default class BudgetButton extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Button {...this.props} style={this.props.type == 'go' ? styles.budgetButton : styles.cancelButton}>
        <Text style={styles.budgetButtonText}>{this.props.text}</Text>
      </Button>
    )
  }
}
