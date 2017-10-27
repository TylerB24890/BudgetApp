import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import Realm from 'realm'
import { ExpenseSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'

// Services
import BudgetNotifications from '../Services/BudgetNotifications'

// Styles
import styles from './Styles/EditItemScreenStyle'

class EditItemScreen extends Component {

  constructor(props) {
    super(props)
  }

  _handleExpenseEdit(title, type, cost, id, date) {
    if(id !== '' && typeof id !== undefined) {
      try {
        Realm.open({
          schema: [ExpenseSchema]
        }).then(realm => {
          try {
            realm.write(() => {
              realm.create('BudgetItem', new ExpenseModel(id, type, title, parseFloat(cost), date), true)
            })

						new BudgetNotifications('evening')

            const {navigate} = this.props.navigation

            navigate(
              'BudgetView', {
                updated: true
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

  _handleDeleteExpense(id) {

    try {
      Realm.open({
        schema: [ExpenseSchema]
      }).then(realm => {
        try {
          realm.write(() => {
            var expense = realm.objects('BudgetItem').filtered('id = "' + id + '"')
            realm.delete(expense)
          })

          const {navigate} = this.props.navigation

          navigate(
            'BudgetView', {
              updated: true
            }
          )
        } catch (e) {
          console.log('Error deleting budget item: ' + e)
        }
      })

    } catch (e) {
      console.log('Error opening Expense table: ' + e)
    }
  }

  render () {
    const data = this.props.navigation.state.params

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <BudgetExpenseForm
            title={data.title}
            cost={data.cost}
            type={data.type}
            id={data.id}
						date={data.displayDate}
						navigation={this.props.navigation}
            handler={(title, type, cost, id, date) => this._handleExpenseEdit(title, type, cost, id, date)}
            deleteHandler={(id) => this._handleDeleteExpense(id)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditItemScreen)
