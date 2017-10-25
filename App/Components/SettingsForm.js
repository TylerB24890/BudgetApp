import React from 'react'
import { Container, Content, Input, Text, Icon, Label, Item } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/SettingsFormStyle'

export default class SettingsForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      id: '',
      starting: '',
      user: '',
			budgetName: ''
    }
  }

	componentDidMount () {
		this.setState({
			id: this.props.id,
			starting: (typeof this.props.starting !== 'undefined' && this.props.starting > 0 ? this.props.starting.toString() : ''),
			user: this.props.user,
			budgetName: this.props.budgetName
		})
	}

  componentWillReceiveProps (nextProps) {
    if(nextProps.starting !== this.props.starting) {
      this.setState({
        id: nextProps.id,
        starting: nextProps.starting.toString(),
        user: nextProps.user,
				budgetName: nextProps.budgetName
      })
    }
  }

  _submitSettingsForm () {
		this.props.handler(this.state.id, this.state.user, this.state.budgetName, parseFloat(this.state.starting))
  }


  render () {

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Container style={styles.form}>
            <Item floatingLabel>
              <Label style={{color: 'rgba(255,255,255,.6)'}}>What does your mom call you?</Label>
              <Input
									ref="user"
                  value={this.state.user}
                  editable={true}
                  onChangeText={(text) => this.setState({user: text})}
                  style={{color: '#FFF'}}
              />
            </Item>
						<Item floatingLabel style={{marginTop: 30}}>
              <Label style={{color: 'rgba(255,255,255,.6)'}}>Name this budget</Label>
              <Input
									ref="budgetName"
                  value={this.state.budgetName}
                  editable={true}
                  onChangeText={(text) => this.setState({budgetName: text})}
                  style={{color: '#FFF'}}
              />
            </Item>
            <Item floatingLabel style={{marginTop: 30}}>
              <Label style={{color: 'rgba(255,255,255,.6)'}}>Starting balance?</Label>
              <Icon active name="logo-usd" style={{color: 'rgba(255,255,255,.6)', fontSize: 18}} />
              <Input
									ref="starting"
                  value={this.state.starting}
                  editable={true}
                  onChangeText={(text) => this.setState({starting: text})}
                  style={{color: '#FFF'}}
                  keyboardType="numeric"
                />
            </Item>

            <Container style={styles.buttonContainer}>
              <BudgetButton block type="go" onPress={() => this._submitSettingsForm()} text='Save Settings' />
            </Container>
          </Container>
        </Content>
      </Container>
    )
  }
}
