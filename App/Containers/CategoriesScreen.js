import React, { Component } from 'react'
import { connect } from 'react-redux'

// Services
import CategoryService from '../Services/CategoryService'
import ExpenseService from '../Services/ExpenseService'

// Components
import { Container, Content, Text } from 'native-base'
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

  _deleteCategory(cid) {

    ExpenseService.deleteExpenseByCategory(cid)

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
