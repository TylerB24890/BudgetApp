import React, { Component } from 'react'
import { connect } from 'react-redux'

import SplashScreenHandler from '../Utils/SplashScreenHandler'

// Services
import CategoryService from '../Services/CategoryService'

// Components
import { Container, Content } from 'native-base'
import CategoryForm from '../Components/CategoryForm'
import AndroidBackButton from '../Components/AndroidBackButton'

// Styles
import styles from './Styles/AddItemScreenStyle'

class AddCategoryScreen extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount () {
    SplashScreenHandler.closeSplashScreen()
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
          <AndroidBackButton onPress={() => this.props.navigation.goBack()} />
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
