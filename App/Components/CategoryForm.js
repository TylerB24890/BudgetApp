import React from 'react'
import { Container, Content, Form, InputGroup, Input, Text, Button } from 'native-base'
import styles from './Styles/CategoryFormStyle'

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      category: '',
      editing: false
    }
  }

  componentDidMount () {
    this.setState({
      category: this.props.category,
      editing: this.props.editing
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      category: nextProps.category
    })
  }

  _submitCategoryForm () {

  }

  _cancelCategoryEdit () {
    const {navigate} = this.props.navigation

    navigate(
      'CategoriesScreen', {
        category: this.state.category
      }
    )
  }

  render () {

    let buttons = null;

    if(this.state.editing) {
      buttons = (
        <Container style={styles.buttonContainer}>
          <Button style={styles.submitButton} onPress={() => this._submitCategoryForm()}>
            <Text style={styles.submitText}>Save Category</Text>
          </Button>

          <Button style={styles.cancelButton} onPress={() => this._cancelCategoryEdit()}>
            <Text style={styles.submitText}>Cancel</Text>
          </Button>
        </Container>
      )
    } else {
      buttons = (
        <Button style={styles.submitButton} onPress={() => this._submitCategoryForm()}>
          <Text style={styles.submitText}>Save Category</Text>
        </Button>
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
                value={this.state.category}
                editable={true}
                onChangeText={(text) => this.setState({category: text})}
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
