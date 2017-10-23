import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import styles from './Styles/BudgetButtonStyle'

export default class BudgetButton extends Component {
  constructor (props) {
    super(props)
  }

  _setButtonStyle () {
    var btnType = this.props.type
    var style

    switch(btnType) {
      case 'go' :
        style = styles.budgetButton
        break
      case 'cancel' :
        style = styles.cancelButton
        break
      case 'cancel-full' :
        style = styles.cancelFull
        break
    }

    return style
  }

  render () {
    var style = this._setButtonStyle()
    return (
      <Button {...this.props} style={style}>
        <Text style={styles.budgetButtonText}>{this.props.text}</Text>
      </Button>
    )
  }
}
