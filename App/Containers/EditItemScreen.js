import React, { Component } from 'react'
import { connect } from 'react-redux'

// Utilities
import SplashScreenHandler from '../Utils/SplashScreenHandler'

// Services
import ExpenseService from '../Services/ExpenseService'

// Components
import { Container, Content } from 'native-base'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'
import AndroidBackButton from '../Components/AndroidBackButton'

// Styles
import styles from './Styles/EditItemScreenStyle'

class EditItemScreen extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount () {
    // Close the splash screen
		SplashScreenHandler.closeSplashScreen()
  }

  _handleExpenseEdit(title, type, cost, id, date) {
    if(id !== '' && typeof id !== undefined) {
      if(ExpenseService.editExpense(id, title, cost, date, type)) {

	      const {navigate} = this.props.navigation

	      navigate(
	        'BudgetView', {
	          updated: true
	        }
	      )
			}
    }
  }

  _handleDeleteExpense(id) {
    if(ExpenseService.deleteExpense(id)) {

			const {navigate} = this.props.navigation

			navigate(
				'BudgetView', {
					updated: true
				}
			)
		}
  }

  render () {
    const data = this.props.navigation.state.params

    return (
      <Container style={styles.container}>
        <Content>
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
          
          <AndroidBackButton onPress={() => this.props.navigation.goBack()} />
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
