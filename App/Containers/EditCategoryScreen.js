import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'
import CategoryForm from '../Components/CategoryForm'

// Styles
import styles from './Styles/EditCategoryScreenStyle'

class EditCategoryScreen extends Component {

  constructor(props) {
    super(props)
  }

  _handleCategoryEdit(cid, title) {
    if(cid !== '' && typeof id !== undefined) {
      try {
        Realm.open({
          path: 'CategorySelect.realm',
          schema: [CategorySchema]
        }).then(realm => {
          try {
            realm.write(() => {
              realm.create('Category', new CategoryModel(cid, title), true)
            })

            const {navigate} = this.props.navigation

            navigate(
              'CategoriesScreen', {
                updated: true
              }
            )
          } catch (e) {
            console.log('Error saving category: ' + e)
          }
        })

      } catch (e) {
        console.log('Error opening Category table: ' + e)
      }
    }
  }

  render () {
    const data = this.props.navigation.state.params

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <CategoryForm
            catTitle={data.catTitle}
            cid={data.cid}
            handler={(cid, title) => this._handleCategoryEdit(cid, title)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryScreen)
