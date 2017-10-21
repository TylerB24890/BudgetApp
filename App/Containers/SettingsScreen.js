import React, { Component } from 'react'
import Realm from 'realm'
import { SettingsSchema } from '../Fixtures/BudgetSchemas'
import SettingsModel from '../Fixtures/SettingsModel'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import SettingsForm from '../Components/SettingsForm'

// Styles
import styles from './Styles/SettingsScreenStyle'

let realm = new Realm({path: 'SettingsScreen.realm', schema: [SettingsSchema]})
let settings = realm.objects('Settings')

class SettingsScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      user: '',
      starting: 0
    }
  }

  componentDidMount () {
    var starting = 0
    var user = ''
    var id = ''

    settings.forEach(function(setting) {
      id = setting.id
      starting = setting.starting
      user = setting.name
    })

    this.setState({
      id: id,
      starting: starting,
      user: user,
    })
  }

  handleSettingsSubmission(id, user, starting) {
    if(id === '') {
      try {
        Realm.open({
          schema: [SettingsSchema]
        }).then(realm => {
          try {
            realm.write(() => {
              realm.create('Settings', new SettingsModel(id, user, starting))
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
          <SettingsForm id={this.state.id} starting={this.state.starting} user={this.state.user}/>
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
