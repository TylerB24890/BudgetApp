import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native'
import styles from './Styles/EditItemStyle'

export default class EditItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      item: this.props.title,
      cost: this.props.cost
    }
  }

  submitBudgetEdit (title, cost) {
    this.props.editHandler(false, title, cost)
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
            onSubmitEditing={this.submitBudgetEdit.bind(this, this.state.item, this.state.cost)}
          />
        </View>
        <View style={styles.editCost}>
          <Text style={styles.moneySign}>$</Text>
          <TextInput
            value={this.state.cost.toString()}
            editable={true}
            onChangeText={(text) => this.setState({cost: text})}
            style={styles.input}
            onSubmitEditing={this.submitBudgetEdit.bind(this, this.state.item, this.state.cost)}
          />
        </View>
      </View>
    )
  }
}
