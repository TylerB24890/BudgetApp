import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import Realm from 'realm'
import { CategorySchema } from '../Fixtures/BudgetSchemas'
import CategoryModel from '../Fixtures/CategoryModel'
import { connect } from 'react-redux'

import CategoryList from '../Components/CategoryList'

// Styles
import styles from './Styles/CategoriesScreenStyle'

let realm = new Realm({path: 'CategorySelect.realm', schema: [CategorySchema]})
let categories = []

class CategoriesScreen extends Component {

  constructor(props) {
    super(props)

    categories = realm.objects('Category').sorted('title')

    this.state = {
      categories: categories
    }
  }

  componentDidMount () {


  }

  render () {
    return (
      <Container style={styles.container}>
        <Content>
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
