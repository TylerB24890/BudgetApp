import React, { Component } from 'react'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'
import { Button, Icon, Text } from 'native-base'
import { View, Modal, TouchableOpacity } from 'react-native'
import CategoryForm from './CategoryForm'
import styles from './Styles/AddCategoryModalStyle'

export default class AddCategoryModal extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalVisible: this.props.visible
		}
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.visible !== this.state.visible) {
			this.setState({
				modalVisible: nextProps.visible
			})
		}
	}

	_handleCloseModal (visible) {
		this.props.modalHandler(visible)
	}

	_handleNewCategory(id, title) {
		if(id === '' || id === null) {
			try {
				Realm.open({
					path: 'CategorySelect.realm',
					schema: [CategorySchema]
				}).then(realm => {
					try {
						realm.write(() => {
							realm.create('Category', new CategoryModel(null, title))
						})

						this._handleCloseModal(false)
					} catch (e) {
						console.log('Error category: ' + e)
					}
				})

			} catch (e) {
				console.log('Error opening Category table: ' + e)
			}
		}
	}

  render () {
    return (
      <View style={{marginTop: 34}}>
        <Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
				>
					<View style={{marginTop: 64, flex: 1}}>
						<TouchableOpacity onPress={() => this._handleCloseModal(false)}>
							<Icon name="ios-close-outline" style={styles.closeButton} />
						</TouchableOpacity>
						<CategoryForm cid='' catTitle='' editing={false} handler={(id, title) => this._handleNewCategory(id, title)}/>
					</View>
        </Modal>
      </View>
    )
  }
}
