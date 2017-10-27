import React from 'react'
import { Container, Content, View, Item, Label, Input, Text, Button } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/CategoryFormStyle'

export default class CategoryForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      cid: this.props.cid,
      catTitle: this.props.catTitle,
      editing: false,
			error: false,
			success: false
    }
  }

  componentWillReceiveProps (nextProps) {
		this.setState({
	    cid: nextProps.cid,
	    catTitle: nextProps.catTitle,
	    editing: nextProps.editing,
	  })
  }

  _submitCategoryForm () {

		if(this.state.catTitle === '' || typeof this.state.catTitle == 'undefined') {
			this.setState({
				error: true
			})
		} else {
			this.props.handler(this.state.cid, this.state.catTitle)
		}
  }

  _cancelCategoryEdit () {
    const {navigate} = this.props.navigation

    navigate(
      'CategoriesScreen', {
        cid: this.state.cid,
        catTitle: this.state.catTitle
      }
    )
  }

	_renderErrorMessage () {
		if(this.state.error) {
			return (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>Please enter a category name.</Text>
				</View>
			)
		} else {
			return null
		}
	}

  render () {

    let buttons = null
		let errorMessage = this._renderErrorMessage()

    if(this.state.editing) {
      buttons = (
        <Container style={styles.buttonContainer}>
          <BudgetButton type="go" onPress={() => this._submitCategoryForm()} text="Save Category" />
          <BudgetButton type="cancel" onPress={() => this._cancelCategoryEdit()} text="Cancel Edit" />
        </Container>
      )
    } else {
      buttons = (
        <Container style={styles.buttonContainer}>
          <BudgetButton block type="go" onPress={() => this._submitCategoryForm()} text="Save Category" />
        </Container>
      )
    }

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Container style={styles.form}>
						{errorMessage}
            <Item floatingLabel error={this.state.error} success={this.state.success}>
              <Label style={{color: 'rgba(255,255,255,.6)'}}>Category name</Label>
              <Input
                value={this.state.catTitle}
                editable={true}
                onChangeText={(text) => this.setState({catTitle: text})}
                style={{color: '#FFF'}}
                autoFocus={true}
              />
            </Item>

            {buttons}
          </Container>
        </Content>
      </Container>
    )
  }
}
