import React, { Component } from 'react'
import { Container, Content, InputGroup, Input, Icon, Text, Button } from 'native-base'
import { TextInputMask } from 'react-native-masked-text';
import CategorySelect from './CategorySelect'

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
      type: type
    })
  }

  // Handle the submission of the expense form
  _submitExpenseForm() {

    var title = this.state.title
    var type = this.state.type
    var cost = this.state.cost
    var id = this.state.id

    // Send to parent component for processing
    this.props.handler(title, cost)
  }

  render () {
    return (

      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <InputGroup style={styles.inputGroup}>
            <Input
              placeholder="Expense name"
              placeholderTextColor="rgba(255,255,255,.6)"
              value={this.state.title}
              editable={true}
              onChangeText={(text) => this.setState({title: text})}
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
            />
          </InputGroup>

          <InputGroup style={styles.inputGroup}>
            <CategorySelect type={this.state.type} categoryHandler={(type) => this._setExpenseCategory(type)}/>
          </InputGroup>

          <Button style={styles.submitButton} onPress={() => this._submitExpenseForm()}>
            <Text style={styles.submitText}>Save Expense</Text>
          </Button>
        </Content>
      </Container>

    )
  }
}
