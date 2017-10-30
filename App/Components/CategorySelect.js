import React, { Component } from 'react'
import { Picker, InputGroup, Icon, Text, View, Button } from 'native-base'
import Metrics from '../Themes/Metrics'
import { Platform } from 'react-native'
import AddCategoryModal from './AddCategoryModal'

import CategoryService from '../Services/CategoryService'

import styles from './Styles/CategorySelectStyle'
import Colors from '../Themes/Colors'

const Item = Picker.Item

export default class CategorySelect extends Component {

  constructor (props) {
    super(props)

    this.state = {
      type: this.props.type,
      selectColor: (this.props.type === '' ? 'rgba(51,51,51,.6)' : '#333'),
      success: false,
      error: false,
			modalVisible: false
    }
  }

	_setModalVisible(visible, newCat) {
		var cat = this.state.type
		var selectColor = 'rgba(51,51,51,.6)'

		if(newCat) {
			this._updateExpenseType(newCat)
		} else {
			this.setState({
				modalVisible: visible,
				type: cat,
				selectColor: selectColor
			})
		}
	}

  _updateExpenseType (value) {

    if(value !== 'key0' && value !== '') {
      this.setState({
        type: value,
        selectColor: '#333',
        success: true,
				modalVisible: false,
      }, this.props.categoryHandler(value))
    } else {
      this.setState({
        error: true
      })
    }
  }

  _returnExpenseCategories () {

		var categories = CategoryService.getAllCategories()

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
	        style={{marginTop: 15, borderBottomWidth: 2, borderBottomColor: 'rgba(80,80,80,.25)'}}
	        error={this.state.error}
	        success={this.state.success}
	      >
	        <Picker
	          iosHeader="Categories"
						placeholder="Expense Category (optional)"
	          mode="dropdown"
	          selectedValue={val}
	          onValueChange={this._updateExpenseType.bind(this)}
	          textStyle={{color: this.state.selectColor}}
						headerStyle={{ backgroundColor: Colors.header }}
						headerTitleStyle={{ color: '#FFF' }}
						headerBackButtonTextStyle={{ color: '#FFF' }}
						style={{ width:(Platform.OS === 'ios' ? undefined : Metrics.screenWidth)}}
					>
	          {categoryDisplay}

	        </Picker>
	      </InputGroup>
				<Button iconLeft transparent onPress={() => { this._setModalVisible(true) }}>
					<Icon name="ios-add" style={{color: '#333', fontSize: 14}}/>
					<Text style={{fontSize: 14, color: '#333'}}>New category</Text>
				</Button>

				<AddCategoryModal visible={this.state.modalVisible} modalHandler={(visible, newCat) => this._setModalVisible(visible, newCat)}/>
			</View>
    )
  }
}
