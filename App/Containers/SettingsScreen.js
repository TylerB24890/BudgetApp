import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>Add Settings</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
