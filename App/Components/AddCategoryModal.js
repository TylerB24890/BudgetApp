import React, { Component } from 'react'
import { Button, Icon, Text, View } from 'native-base'
import { Modal } from 'react-native'
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

  render () {
    return (
      <View style={{marginTop: 22}}>
        <Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
				>
					{
						//<Icon name="ios-add-outline" style={{color: '#FFF', fontSize: 12}} onPress={() => this._handleCloseModal(false)} />
					}
					<CategoryForm cid='' catTitle='' editing={false}/>
        </Modal>
      </View>
    )
  }
}
