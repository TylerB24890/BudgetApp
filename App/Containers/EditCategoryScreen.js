import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import CategoryService from '../Services/CategoryService'

import CategoryForm from '../Components/CategoryForm'

// Styles
import styles from './Styles/EditCategoryScreenStyle'

class EditCategoryScreen extends Component {

  constructor(props) {
    super(props)
  }

  _handleCategoryEdit(cid, title) {
    if(cid !== '' && typeof id !== undefined) {
      if(CategoryService.editCategory(cid, title)) {
				const {navigate} = this.props.navigation

	      navigate(
	        'CategoriesScreen', {
	          updated: true
	        }
	      )
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
