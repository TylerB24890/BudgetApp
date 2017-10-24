import React, { Component } from 'react'
import Realm from 'realm'
import { ExpenseSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddItemScreen extends Component {

  constructor(props) {
    super(props)
  }


  _handleNewExpense(title, type, cost, id) {
    if(id === '') {
      try {
        Realm.open({
          schema: [ExpenseSchema]
        }).then(realm => {
          try {
            realm.write(() => {
              realm.create('BudgetItem', new ExpenseModel(null, type, title, parseFloat(cost)))
            })

            const {navigate} = this.props.navigation

            navigate(
              'BudgetView', {
                updated: true,
								new: false
              }
            )
          } catch (e) {
            console.log('Error saving budget item: ' + e)
          }
        })

      } catch (e) {
        console.log('Error opening Expense table: ' + e)
      }
    }
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <BudgetExpenseForm id='' title='' cost='0.00' type='' handler={(title, type, cost, id) => this._handleNewExpense(title, type, cost, id)}/>
        </Content>
      </Container>
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
