import React, { Component } from 'react'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'
import { Button, Icon, Text } from 'native-base'
import { View, Modal } from 'react-native'
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

	_handleCloseModal (visible, cat = false) {
		this.props.modalHandler(visible, cat)
	}

	_handleNewCategory(id, title) {
		var newCat = ''

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

						var categories = realm.objects('Category').filtered('title = "' + title + '"')
						categories.forEach(function(cat) {
							newCat = cat.id
						})

						this._handleCloseModal(false, newCat)
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
					<View style={[styles.modalContent, {flex: 1}]}>
						<Button iconRight transparent onPress={() => this._handleCloseModal(false)} style={{alignSelf: 'flex-end', paddingTop: 10}}>
							<Icon name="ios-close-outline" style={styles.closeButton} />
						</Button>
						<CategoryForm cid='' catTitle='' editing={false} handler={(id, title) => this._handleNewCategory(id, title)}/>
					</View>
        </Modal>
      </View>
    )
  }
}
