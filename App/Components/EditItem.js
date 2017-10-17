import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import styles from './Styles/EditItemStyle'

export default class EditItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item.title,
      cost: this.props.item.cost,
      itemId: this.props.item.id,
      type: this.props.item.type,
      editing: true
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
            onSubmitEditing={() => this.submitBudgetEdit(false, this.state.item, this.state.type, this.state.cost, this.state.itemId)}
          />
        </View>
        <View style={styles.editCost}>
          <Text style={styles.moneySign}>$</Text>
          <TextInput
            value={this.state.cost.toString()}
            editable={true}
            onChangeText={(text) => this.setState({cost: text})}
            style={styles.input}
            onSubmitEditing={() => this.submitBudgetEdit(false, this.state.item, this.state.type, this.state.cost, this.state.itemId)}
          />
        </View>
      </View>
    )
  }
}
