import React, { Component } from 'react'
import { connect } from 'react-redux'

// Services
import ExpenseService from '../Services/ExpenseService'

// Components
import { Container, Content } from 'native-base'
import BudgetExpenseForm from '../Components/BudgetExpenseForm'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddItemScreen extends Component {

  constructor(props) {
    super(props)

		this.state = {
			autoFocus: false,
			type: ''
		}
  }

	componentWillReceiveProps (nextProps) {
		if(nextProps.type !== this.state.type) {
			this.setState({
				type: nextProps.type
			})
		}
	}


  _handleNewExpense(title, type, cost, id, date) {
    if(id === '') {

			if(ExpenseService.addNewExpense(title, cost, date, type)) {
				const {navigate} = this.props.navigation

				navigate(
					'BudgetView', {
						updated: true,
						new: false,
					}
				)
			}
    }
  }

  render () {

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <BudgetExpenseForm autoFocus={this.state.autoFocus} id='' title='' cost='0.00' type={this.state.type} date='' handler={(title, type, cost, id, date) => this._handleNewExpense(title, type, cost, id, date)}/>
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
