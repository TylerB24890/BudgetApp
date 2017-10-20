import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import CategoryForm from '../Components/CategoryForm'

// Styles
import styles from './Styles/EditCategoryScreenStyle'

class EditCategoryScreen extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const data = this.props.navigation.state.params

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <CategoryForm category={data.category} editing={data.editing} navigation={this.props.navigation} />
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
