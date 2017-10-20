import React from 'react'
import { Container, Content, Form, InputGroup, Input, Text, Button } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/CategoryFormStyle'

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cid: '',
      catTitle: '',
      editing: false
    }
  }

  componentDidMount () {
    this.setState({
      cid: this.props.cid,
      catTitle: this.props.catTitle,
      editing: this.props.editing
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      cid: nextProps.cid,
      catTitle: nextProps.catTitle,
      editing: nextProps.editing
    })
  }

  _submitCategoryForm () {

    if(this.state.editing) {
      // Edit Category
    } else {
      // Save new category
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

  render () {

    let buttons = null;

    if(this.state.editing) {
      buttons = (
        <Container style={styles.buttonContainer}>
          <BudgetButton type="go" onPress={() => this._submitCategoryForm()} text="Save Category" />
          <BudgetButton type="cancel" onPress={() => this._cancelCategoryEdit()} text="Cancel Edit" />
        </Container>
      )
    } else {
      buttons = (
        <BudgetButton type="go" onPress={() => this._submitCategoryForm()} text="Save Category" />
      )
    }

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Form style={styles.form}>
            <InputGroup>
              <Input
                placeholder="Category name"
                placeholderTextColor="rgba(255,255,255,.6)"
                value={this.state.catTitle}
                editable={true}
                onChangeText={(text) => this.setState({catTitle: text})}
                style={{color: '#FFF'}}
                autoFocus={true}
              />
            </InputGroup>

            {buttons}
          </Form>
        </Content>
      </Container>
    )
  }
}
