import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import {TextInputMask} from 'react-native-masked-text';
import styles from './Styles/BudgetExpenseFormStyle'

export default class BudgetExpenseForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      title: this.props.title,
      cost: parseFloat(this.props.cost).toFixed(2),
      type: this.props.type
    }
  }

  submitExpenseForm(title, type, cost, id) {
    if(id === '' || id.length < 2) {
      // Save new realm object
    } else {
      // Update existing realm object
    }

    this.props.handler
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Expense name"
            placeholderTextColor="rgba(255,255,255,.6)"
            value={this.state.title}
            editable={true}
            onChangeText={(text) => this.setState({item: text})}
            style={styles.input}
            onSubmitEditing={() => this.submitExpenseForm(this.state.title, this.state.type, this.state.cost, this.state.id)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.moneySign}>$</Text>
          <TextInputMask
            value={this.state.cost}
            type={'money'}
            options={{separator: '.', unit: '$'}}
            onChangeText={(text) => this.setState({cost: text})}
            style={[styles.input, styles.costInput]}
            onSubmitEditing={() => this.submitExpenseForm(this.state.title, this.state.type, this.state.cost, this.state.id)}
            keyboardType="numeric"
          />
        </View>
      </View>
    )
  }
}
