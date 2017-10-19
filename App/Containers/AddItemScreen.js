import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddItemScreen extends Component {

  constructor(props) {
    super(props)
  }

  handleNewExpense(title, cost) {
    console.log(title, cost)
  }

  render () {
    return (
      <ScrollView scrollEnabled={false} style={styles.container} keyboardShouldPersistTaps="never">
        <BudgetExpenseForm id='' title='' cost='0.00' type='' handler={(title, cost) => this.handleNewExpense(title, cost)}/>
      </ScrollView>
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
