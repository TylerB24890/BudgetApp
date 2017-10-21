import React, { Component } from 'react'
import Realm from 'realm'
import { SettingsSchema } from '../Fixtures/BudgetSchemas'
import SettingsModel from '../Fixtures/SettingsModel'
import { Container, Content, Text } from 'native-base'
import BudgetButton from '../Components/BudgetButton'
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
      starting: 0,
      udpated: false,
    }
  }

  componentDidMount () {
    var starting = 0
    var user = ''
    var id = ''
		var updated = false

    settings.forEach(function(setting) {
      id = setting.id
      starting = parseFloat(setting.starting).toFixed(2)
      user = setting.name
    })

    this.setState({
      id: id,
      starting: starting,
      user: user,
    })
  }

  _handleSettingsSubmission(id, user, starting) {
    try {
      realm.write(() => {
        realm.create('Settings', new SettingsModel(id, user, starting), true)
      })

			this.setState({
				user: user,
				updated: true
			})
    } catch (e) {
      console.log('Error opening Settings table: ' + e)
    }
  }

  render () {

    let updatedMessage = null

    if(this.state.updated) {
      updatedMessage = (
        <Content style={styles.updated}>
          <Text style={styles.updatedText}>Settings updated</Text>
        </Content>
      )
    }

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false} keyboardShouldPersistTaps="never">
          {updatedMessage}
          <SettingsForm id={this.state.id} starting={this.state.starting} user={this.state.user} handler={(id, user, starting) => this._handleSettingsSubmission(id, user, starting)}/>
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
