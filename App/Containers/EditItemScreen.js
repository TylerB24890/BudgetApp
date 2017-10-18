import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'

// Styles
import styles from './Styles/EditItemScreenStyle'

class EditItemScreen extends Component {

  constructor(props) {
    super(props)
  }

  handleExpenseEdit() {
    
  }

  render () {
    const data = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <BudgetExpenseForm title={data.title} cost={data.cost} type={data.type} id={data.id} handler={() => this.handleExpenseEdit()}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditItemScreen)
