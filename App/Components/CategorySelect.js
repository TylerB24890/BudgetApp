import React, { Component } from 'react'
import { Picker } from 'native-base'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'

import styles from './Styles/CategorySelectStyle'
import Colors from '../Themes/Colors'

const Item = Picker.Item

export default class CategorySelect extends Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      selectColor: 'rgba(255,255,255,.6)'
    }
  }

  _updateExpenseType (value) {
    this.setState({
      type: value,
      selectColor: (value === "key0" ? 'rgba(255,255,255,.6)' : '#FFF')
    }, this.props.categoryHandler(value))
  }

  _returnExpenseCategories () {
    var realm = new Realm({path: 'CategorySelect.realm', schema: [CategorySchema]})

    /*
    realm.write(() => {
      realm.create('Category', new CategoryModel('Bills'))
      realm.create('Category', new CategoryModel('Entertainment'))
      realm.create('Category', new CategoryModel('Food'))
    })
    */

    var categories = realm.objects('Category').sorted('title')
    var categoryDisplay = categories.map(catData => (
      <Item key={catData.id} value={catData.title} label={catData.title} />
    ))

    return categoryDisplay
  }

  render () {

    var val = this.state.type.length > 1 ? this.state.type : 'key0'
    categoryDisplay = this._returnExpenseCategories()

    categoryDisplay.unshift(<Item key="key0" label="Expense Category" value="key0" />)

    return (
        <Picker
          iosHeader="Category"
          mode="dropdown"
          selectedValue={val}
          onValueChange={this._updateExpenseType.bind(this)}
          textStyle={{color: this.state.selectColor}}>
          {categoryDisplay}

        </Picker>
    )
  }
}
