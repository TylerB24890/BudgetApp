import React, { Component } from 'react'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'
import CategoryForm from '../Components/CategoryForm'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddCategoryScreen extends Component {

  constructor(props) {
    super(props)
  }

  handleNewCategory(cid, title) {
    if(cid === '' || cid === null) {
      try {
        Realm.open({
          path: 'CategorySelect.realm',
          schema: [CategorySchema]
        }).then(realm => {
          try {
            realm.write(() => {
              realm.create('Category', new CategoryModel(null, title))
            })

            const {navigate} = this.props.navigation

            navigate(
              'CategoriesScreen', {
                updated: true
              }
            )
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
      <Container style={styles.container}>
        <Content scrollEnabled={false} keyboardShouldPersistTaps="never">
          <CategoryForm cid='' catTitle='' handler={(cid, title) => this.handleNewCategory(cid, title)}/>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryScreen)
