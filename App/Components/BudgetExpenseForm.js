import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
      inputColor: 'rgba(255,255,255,.6)'
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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Expense name"
            placeholderTextColor="rgba(255,255,255,.6)"
            value={this.state.title}
            editable={true}
            onChangeText={(text) => this.setState({title: text})}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputMask
            value={this.state.cost}
            type={'money'}
            options={{separator: '.', unit: '$', delimiter: ','}}
            onChangeText={(text) => this.setState({cost: text})}
            style={[styles.input, styles.costInput]}
            keyboardType="numeric"
          />
        </View>

        <CategorySelect type={this.state.type} categoryHandler={(type) => this._setExpenseCategory(type)}/>

        <View style={styles.inputContainer} keyboardShouldPersistTaps="always">
          <TouchableOpacity style={styles.submitButton} onPress={() => this._submitExpenseForm()}>
            <Text style={styles.submitText}>Save Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
