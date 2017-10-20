import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'
import { connect } from 'react-redux'

import BudgetButton from '../Components/BudgetButton'
import CategoryList from '../Components/CategoryList'

// Styles
import styles from './Styles/CategoriesScreenStyle'

let realm = new Realm({path: 'CategorySelect.realm', schema: [CategorySchema]})
let categories = realm.objects('Category').sorted('title')

class CategoriesScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: categories
    }
  }

  _navigateToAddCategory () {
    const {navigate} = this.props.navigation
    navigate('AddCategoryScreen')
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <Content style={{marginVertical: 30, paddingHorizontal: 15}}>
            <BudgetButton block type="go" text="Add Category" onPress={() => this._navigateToAddCategory()}/>
          </Content>

          <CategoryList categories={this.state.categories} navigation={this.props.navigation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)
