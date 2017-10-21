import React, { Component } from 'react'
import { Container, Content, Form, InputGroup, Input, Icon, Text } from 'native-base'
import { Alert } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';
import CategorySelect from './CategorySelect'
import BudgetButton from './BudgetButton'

import styles from './Styles/BudgetExpenseFormStyle'

export default class BudgetExpenseForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      title: this.props.title,
      cost: parseFloat(this.props.cost).toFixed(2),
      type: this.props.type,
    }
  }

  // Set expense category to state
  _setExpenseCategory (type) {
    this.setState({
      type: type,
    })
  }

  componentDidMount () {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      cost: parseFloat(this.props.cost).toFixed(2),
      type: this.props.type,
    })
  }

  // Handle the submission of the expense form
  _submitExpenseForm() {

    var title = this.state.title
    var type = this.state.type
    var cost = this.state.cost
    var id = this.state.id

    this.props.handler(title, type, cost, id)
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

  render () {

    let deleteButton = this._renderDeleteButton()

    return (

      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Form>
            <InputGroup style={styles.inputGroup}>
              <Input
                placeholder="Expense name"
                placeholderTextColor="rgba(255,255,255,.6)"
                value={this.state.title}
                editable={true}
                onChangeText={(text) => this.setState({title: text})}
                style={{color: '#FFF'}}
                autoFocus={true}
              />
            </InputGroup>

            <InputGroup style={styles.inputGroup}>
              <Icon active name="logo-usd" style={{color: 'rgba(255,255,255,.6)', fontSize: 18}} />
              <Input
                placeholder={"0.00"}
                placeholderTextColor="rgba(255,255,255,.6)"
                value={this.state.cost !== "0.00" ? this.state.cost : ""}
                onChangeText={(text) => this.setState({cost: text})}
                keyboardType="numeric"
                style={{color: '#FFF'}}
              />
            </InputGroup>

            <CategorySelect type={this.state.type} categoryHandler={(type) => this._setExpenseCategory(type)}/>

            <Content scrollEnabled={false} style={styles.buttonContainer}>
              <BudgetButton block type="go" onPress={() => this._submitExpenseForm()} text="Save Expense" />
            </Content>

            {deleteButton}
          </Form>
        </Content>
      </Container>

    )
  }
}
