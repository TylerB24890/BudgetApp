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
      item: this.props.title,
      cost: this.props.cost.toFixed(2),
      type: this.props.type
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.item}
            editable={true}
            onChangeText={(text) => this.setState({item: text})}
            style={styles.input}
            onSubmitEditing={() => this.submitBudgetEdit(this.state.item, this.state.type, this.state.cost, this.props.item.id)}
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
            onSubmitEditing={() => this.submitBudgetEdit(this.state.item, this.state.type, this.state.cost, this.props.item.id)}
            keyboardType="numeric"
          />
        </View>
      </View>
    )
  }
}
