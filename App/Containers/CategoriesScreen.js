import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import Realm from 'realm'
import { ExpenseSchema } from '../Fixtures/BudgetSchemas'

import CategoryService from '../Services/CategoryService'

import { connect } from 'react-redux'

import BudgetButton from '../Components/BudgetButton'
import CategoryList from '../Components/CategoryList'

// Styles
import styles from './Styles/CategoriesScreenStyle'

let categories = CategoryService.getAllCategories()

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

  _deleteCategoryExpenses (catId) {
    let expenseRealm = new Realm({schema: [ExpenseSchema]})

    expenseRealm.write(() => {
      var expenses = expenseRealm.objects('BudgetItem').filtered('type = "' + catId + '"')
      expenseRealm.delete(expenses)
    })
  }

  _deleteCategory(cid) {

    this._deleteCategoryExpenses(cid)

		let categories = CategoryService.deleteCategory(cid)

		this.setState({
			categories: categories
		})
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <Content style={{marginVertical: 30, paddingHorizontal: 15}}>
            <BudgetButton
              block
              type="go"
              text="Add Category"
              onPress={() => this._navigateToAddCategory()}
            />
          </Content>

          <CategoryList
            categories={this.state.categories}
            navigation={this.props.navigation}
            deleteHandler={(cid, catTitle) => this._deleteCategory(cid, catTitle)}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)
