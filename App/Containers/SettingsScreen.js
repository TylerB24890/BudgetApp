import React, { Component } from 'react'
import { connect } from 'react-redux'

// Utilities
import SplashScreenHandler from '../Utils/SplashScreenHandler'

// Services
import SettingsService from '../Services/SettingsService'

// Components
import { Container, Content, Text } from 'native-base'
import BudgetButton from '../Components/BudgetButton'
import SettingsForm from '../Components/SettingsForm'
import AndroidBackButton from '../Components/AndroidBackButton'

// Styles
import styles from './Styles/SettingsScreenStyle'

let settings = SettingsService.getAllSettings()
let id = ''
let user = ''
let starting = 0
let budgetName = ''
let newUser = true

class SettingsScreen extends Component {

  constructor(props) {
    super(props)

		const navParams = this.props.navigation.state.params

		settings = SettingsService.getAllSettings()

		if(typeof settings !== 'undefined' && settings !== null) {
			newUser = false

			settings.forEach(function(setting) {
	      id = setting.id
	      starting = parseFloat(setting.starting).toFixed(2)
	      user = setting.name
				budgetName = setting.budgetName
	    })
		}

    this.state = {
      id: id,
      user: user,
      starting: starting,
			budgetName: budgetName,
      udpated: false,
			new: newUser
    }
  }
  
  componentDidMount () {
    // Close the splash screen
		SplashScreenHandler.closeSplashScreen()
  }

  _handleSettingsSubmission(id, user, budgetName, starting) {
    var userData = SettingsService.newSettings(id, user, budgetName, starting)
		newUser = false

		if(this.state.new && userData) {
			this.props.navigation.navigate('AddItemScreen', { new: newUser })
		}

		this.setState({
			user:user,
			budgetName: budgetName,
			starting: starting,
			updated: true,
			new: newUser
		})
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
        <Content scrollEnabled={false}>
          {updatedMessage}
          <SettingsForm id={this.state.id} budgetName={this.state.budgetName} starting={this.state.starting} user={this.state.user} handler={(id, user, budgetName, starting) => this._handleSettingsSubmission(id, user, budgetName, starting)}/>
          
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
