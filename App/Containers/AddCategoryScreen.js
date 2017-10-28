import React, { Component } from 'react'
import CategoryForm from '../Components/CategoryForm'

import CategoryService from '../Services/CategoryService'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddCategoryScreen extends Component {

  constructor(props) {
    super(props)
  }

  _handleNewCategory(cid, title) {
    if(cid === '' || cid === null) {

			if(CategoryService.addCategory(title)) {
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
    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <CategoryForm cid='' catTitle='' handler={(cid, title) => this._handleNewCategory(cid, title)}/>
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
