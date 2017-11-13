import React, { Component } from 'react'

// Services
import CategoryService from '../Services/CategoryService'

// Components
import { Button, Icon, Text } from 'native-base'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import CategoryForm from './CategoryForm'

// Styles
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
			newCat = CategoryService.addCategory(title)
			this._handleCloseModal(false, newCat)
		}
	}

  render () {
    return (
      <View style={{marginTop: 34}}>
        <Modal
					isVisible={this.state.modalVisible}
					onModalShow={() => this.setState({modalVisible: true})}
					onModalHide={() => this._handleCloseModal(false)}
					onBackButtonPress={() => this._handleCloseModal(false)}
					animationOut={'zoomOutUp'}
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
