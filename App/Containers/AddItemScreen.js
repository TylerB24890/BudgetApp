import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddItemScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <BudgetExpenseForm id='' title='' cost='0.00' type='' />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemScreen)
