import React, { Component } from 'react'
import Realm from 'realm'
import { SettingsSchema } from '../Fixtures/BudgetSchemas'
import SettingsModel from '../Fixtures/SettingsModel'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import SettingsForm from '../Components/SettingsForm'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {

  constructor(props) {
    super(props)
  }

  handleSettingsSubmission(title, type, cost, id) {
    if(id === '') {
      try {
        Realm.open({
          schema: [SettingsSchema]
        }).then(realm => {
          try {
            realm.write(() => {
              realm.create('Settings', new SettingsModel())
            })
          } catch (e) {
            console.log('Error saving settings: ' + e)
          }
        })

      } catch (e) {
        console.log('Error opening Settings table: ' + e)
      }
    }
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false} keyboardShouldPersistTaps="never">
          <SettingsForm />
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
