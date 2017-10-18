import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles from './Styles/EditItemStyle'

export default class EditItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: this.props.title,
      cost: parseFloat(this.props.cost).toFixed(2),
      itemId: this.props.id,
      type: this.props.type,
    }
  }

  submitBudgetEdit (title, type, cost, id) {
    this.props.editHandler(title, type, cost, id)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.editTitle}>
          <TextInput
            value={this.state.item}
            editable={true}
            onChangeText={(text) => this.setState({item: text})}
            style={styles.input}
            onSubmitEditing={() => this.submitBudgetEdit(this.state.item, this.state.type, this.state.cost, this.props.item.id)}
          />
        </View>
        <View style={styles.editCost}>
          <Text style={styles.moneySign}>$</Text>
          <TextInput
            value={this.state.cost.toString()}
            editable={true}
            onChangeText={(text) => this.setState({cost: text})}
            style={styles.input}
            onSubmitEditing={() => this.submitBudgetEdit(this.state.item, this.state.type, this.state.cost, this.props.item.id)}
          />
        </View>
      </View>
    )
  }
}
