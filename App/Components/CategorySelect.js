import React, { Component } from 'react'
import { View, Text, Keyboard } from 'react-native'
import CategoryService from '../Services/BudgetService'
import DropDown, { Select, Option, OptionList } from 'react-native-option-select'

import styles from './Styles/CategorySelectStyle'
import Colors from '../Themes/Colors'


export default class CategorySelect extends Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      selectColor: 'rgba(255,255,255,.6)'
    }
  }

  componentDidMount () {
    if(this.props.type !== '') {
      this.setState({
        selectColor: '#FFF'
      })
    }
  }

  _getOptionList () {
    return this.refs['OPTIONLIST']
  }

  _updateExpenseType (type) {
    Keyboard.dismiss

    this.setState({
      type: type,
      selectColor: '#FFF'
    }, this.props.categoryHandler(type))
  }

  render () {

    var val = this.state.type.length > 1 ? this.state.type : 'Expense Category'

    return (
      <View style={styles.container}>
        <Select
          style={styles.select}
          optionListRef={this._getOptionList.bind(this)}
          defaultValue={val}
          onSelect={this._updateExpenseType.bind(this)}
          styleText={{color: this.state.selectColor, fontSize: 16}}
        >
          <Option style={styles.option} value="Monthly">Monthly</Option>
          <Option style={styles.option} value="Daily">Daily</Option>
          <Option style={styles.option} value="Misc">Misc</Option>
        </Select>

        <OptionList
          ref="OPTIONLIST"
          overlayStyles={{backgroundColor: Colors.backgroundTransparent}}
        />
      </View>
    )
  }
}
