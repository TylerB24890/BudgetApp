import React, { Component } from 'react'
import { Picker, InputGroup, Icon, Text, View, Button } from 'native-base'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'

import styles from './Styles/CategorySelectStyle'
import Colors from '../Themes/Colors'

const Item = Picker.Item

export default class CategorySelect extends Component {

  constructor (props) {
    super(props)

    this.state = {
      type: this.props.type,
      selectColor: 'rgba(255,255,255,.6)',
      success: false,
      error: false
    }
  }

  _updateExpenseType (value) {

    if(value !== 'key0') {
      this.setState({
        type: value,
        selectColor: '#FFF',
        success: true,
      }, this.props.categoryHandler(value))
    } else {
      this.setState({
        error: true
      })
    }
  }

  _returnExpenseCategories () {
    var realm = new Realm({path: 'CategorySelect.realm', schema: [CategorySchema]})

    var categories = realm.objects('Category').sorted('title')
    var categoryDisplay = categories.map(catData => (
      <Item key={catData.id} value={catData.id} label={catData.title} />
    ))

    return categoryDisplay
  }

  render () {

    var val = this.state.type.length > 1 ? this.state.type : 'key0'
    categoryDisplay = this._returnExpenseCategories()

    return (
			<View>
				<InputGroup
	        style={{marginTop: 15}}
	        error={this.state.error}
	        success={this.state.success}
	      >
	        <Picker
	          iosHeader="Categories"
						placeholder="Expense Category"
	          mode="dropdown"
	          selectedValue={val}
	          onValueChange={this._updateExpenseType.bind(this)}
	          textStyle={{color: this.state.selectColor}}
						headerStyle={{ backgroundColor: Colors.header }}
						headerTitleStyle={{ color: '#FFF' }}
						headerBackButtonTextStyle={{ color: '#FFF' }}
					>
	          {categoryDisplay}

	        </Picker>
	      </InputGroup>
				<Button iconLeft transparent>
					<Icon name="ios-add" style={{color: '#FFF', fontSize: 14}}/>
					<Text style={{fontSize: 14, color: '#FFF'}}>New category</Text>
				</Button>
			</View>
    )
  }
}
