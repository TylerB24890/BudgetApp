import React, { Component } from 'react'
import { Container, Content, Item, Label, Input, Icon, Text, View } from 'native-base'
import { Alert, KeyboardAvoidingView, DatePickerIOS } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';
import DatePicker from 'react-native-datepicker'

import CategorySelect from './CategorySelect'
import BudgetButton from './BudgetButton'

import styles from './Styles/BudgetExpenseFormStyle'

export default class BudgetExpenseForm extends Component {

  constructor (props) {
    super(props)

		var date = new Date()

    this.state = {
      id: this.props.id,
      title: this.props.title,
      cost: parseFloat(this.props.cost).toFixed(2),
      type: this.props.type,
			date: this.props.date,
			autoFocus: this.props.autoFocus,
			titleError: false,
			costError: false,
			titleSuccess: false,
			costSuccess: false
    }
  }

  // Set expense category to state
  _setExpenseCategory (type) {
    this.setState({
      type: type,
    })
  }

	componentWillReceiveProps (nextProps) {
		if(nextProps.title !== this.state.title || nextProps.cost !== this.state.cost || nextProps.type !== this.state.type || nextProps.date !== this.state.date) {
			this.setState({
				title: nextProps.title,
				cost: parseFloat(nextProps.cost).toFixed(2),
				type: nextProps.type,
				date: nextProps.date,
			})
		}

		this.setState({
			autoFocus: nextProps.autoFocus
		})
	}

  // Handle the submission of the expense form
  _submitExpenseForm () {

    var title = this.state.title
    var type = this.state.type
    var cost = this.state.cost
    var id = this.state.id
		var date = this.state.date
		var titleError = false
		var costError = false

		if(title == '' || typeof title == 'undefined') {
			titleError = true

			if(cost == '' || cost == 0 || typeof cost == 'undefined') {
				costError = true
			}

			this.setState({
				titleError: titleError,
				costError: costError
			})
		} else {
			this.props.handler(title, type, cost, id, date)
		}
  }

  _deleteExpenseItem () {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Continue', onPress: () => this.props.deleteHandler(this.state.id)}
      ],
      { cancelable: false }
    )
  }

  _renderDeleteButton () {
    if(this.state.id !== '') {
      return (
        <Content scrollEnabled={false} style={{marginTop: 15}}>
          <BudgetButton block type="cancel-full" onPress={() => this._deleteExpenseItem()} text="Delete Expense" />
        </Content>
      )
    }
  }

	_renderErrorMessages () {

		let errorMsg = []

		if(this.state.titleError) {
			errorMsg.push(<Text key="titleError" style={styles.errorText}>Enter a title for this expense.</Text>)

			if(this.state.costError) {
				errorMsg.push(<Text key="costError" style={styles.errorText}>Enter a cost for this expense.</Text>)
			}

			return (
				<View style={styles.errorContainer}>
					{errorMsg}
				</View>
			)
		} else {
			return null
		}
	}

  render () {

    let deleteButton = this._renderDeleteButton()
		let errors = this._renderErrorMessages()

    return (

      <KeyboardAvoidingView behavior="padding">
        <Container style={styles.container}>
          <Content>
							{errors}
              <Item floatingLabel style={styles.inputGroup} error={this.state.titleError} success={this.state.titleSuccess}>
                <Label style={{color: 'rgba(255,255,255,.6)'}}>What are you buying?</Label>
                <Input
                  value={this.state.title}
                  editable={true}
                  onChangeText={(text) => this.setState({title: text})}
                  style={{color: '#FFF'}}
									autoFocus={this.state.autoFocus}
                />
              </Item>

              <Item floatingLabel style={styles.inputGroup} error={this.state.costError} success={this.state.costSuccess}>
                <Label style={{color: 'rgba(255,255,255,.6)'}}>How much does it cost?</Label>
                <Icon active name="logo-usd" style={{color: 'rgba(255,255,255,.6)', fontSize: 16}} />
                <Input
                  value={this.state.cost !== "0.00" ? this.state.cost : ""}
                  onChangeText={(text) => this.setState({cost: text})}
                  keyboardType="numeric"
                  style={{color: '#FFF'}}
                />
              </Item>

							<Item style={[styles.inputGroup, styles.datePickerLabel]}>
								<DatePicker
						        style={{width: 200}}
						        date={this.state.date}
						        mode="date"
						        placeholder="Expense Date (optional)"
						        format="MMMM D, YYYY"
						        confirmBtnText="Confirm"
						        cancelBtnText="Cancel"
										showIcon={false}
						        onDateChange={(date) => {this.setState({date: date})}}
										customStyles={{
											dateInput: {
												borderWidth: 0,
												borderColor: 'transparent',
												alignItems: 'flex-start',
												justifyContent: 'flex-end'
											},
											placeholderText: {
												color: 'rgba(255,255,255,.6)',
												fontSize: 17,
												textAlign: 'left',
											},
											dateText: {
												color: '#FFF',
												textAlign: 'left',
												fontSize: 17
											}
										}}
						     />
	            </Item>

              <CategorySelect type={this.state.type} categoryHandler={(type) => this._setExpenseCategory(type)}/>
	              <Content scrollEnabled={false} style={styles.buttonContainer}>
	                <BudgetButton block type="go" onPress={() => this._submitExpenseForm()} text="Save Expense" />
	              </Content>
	              {deleteButton}
          </Content>
        </Container>
      </KeyboardAvoidingView>

    )
  }
}
