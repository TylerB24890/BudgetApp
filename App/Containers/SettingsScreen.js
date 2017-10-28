import React, { Component } from 'react'
import { connect } from 'react-redux'

// Services
import SettingsService from '../Services/SettingsService'
import BudgetNotifications from '../Services/BudgetNotifications'

// Components
import { Container, Content, Text } from 'native-base'
import BudgetButton from '../Components/BudgetButton'
import SettingsForm from '../Components/SettingsForm'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      user: '',
      starting: 0,
			budgetName: '',
      udpated: false,
			new: false
    }
  }

  componentDidMount () {
    var starting = 0
    var user = ''
    var id = ''
		var budgetName = ''
		var updated = false

		let settings = SettingsService.getAllSettings()

    settings.forEach(function(setting) {
      id = setting.id
      starting = parseFloat(setting.starting).toFixed(2)
      user = setting.name
			budgetName = setting.budgetName
    })

    this.setState({
      id: id,
      starting: starting,
      user: user,
			budgetName: budgetName,
			new: this.props.new
    })
  }

	componentWillReceiveProps (nextProps) {
		if(nextProps.new !== this.state.new) {
			this.setState({
				new: nextProps.new
			})
		}
	}

  _handleSettingsSubmission(id, user, budgetName, starting) {
    var newUser = SettingsService.newSettings(id, user, budgetName, starting)

		if(this.state.new && newUser) {
			new BudgetNotifications('morning', starting, starting, user)
			this.props.navigation.navigate('AddItemScreen', { new: false })
		}

		this.setState({
			user:user,
			updated: true,
			new: false
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
