import React from 'react'
import { Container, Content, Input, Text, Icon, Label, Item } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/SettingsFormStyle'

export default class SettingsForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      id: this.props.id,
      starting: (typeof this.props.starting !== 'undefined' && this.props.starting > 0 && this.props.starting !== '' ? this.props.starting.toString() : ''),
      user: this.props.user,
			budgetName: this.props.budgetName
    }
  }

	componentDidMount () {
		this.setState({
			id: this.props.id,
			starting: (typeof this.props.starting !== 'undefined' && this.props.starting > 0 && this.props.starting !== '' ? this.props.starting.toString() : ''),
			user: this.props.user,
			budgetName: this.props.budgetName
		})
	}

  componentWillReceiveProps (nextProps) {
    if(nextProps.starting !== this.state.starting) {
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
              <Label style={{color: 'rgba(51,51,51,.6)'}}>What should we call you? <Text style={styles.smallLabel}>(optional)</Text></Label>
              <Input
									ref="user"
                  value={this.state.user}
                  editable={true}
                  onChangeText={(text) => this.setState({user: text})}
                  style={{color: '#333'}}
              />
            </Item>
						<Item floatingLabel style={{marginTop: 30}}>
              <Label style={{color: 'rgba(51,51,51,.6)'}}>Name this budget <Text style={styles.smallLabel}>(optional)</Text></Label>
              <Input
									ref="budgetName"
                  value={this.state.budgetName}
                  editable={true}
                  onChangeText={(text) => this.setState({budgetName: text})}
                  style={{color: '#333'}}
              />
            </Item>
            <Item floatingLabel style={{marginTop: 30}}>
              <Label style={{color: 'rgba(51,51,51,.6)'}}>Starting balance <Text style={styles.smallLabel}>(optional)</Text></Label>
              <Icon active name="logo-usd" style={{color: 'rgba(51,51,51,.6)', fontSize: 18}} />
              <Input
									ref="starting"
                  value={this.state.starting}
                  editable={true}
                  onChangeText={(text) => this.setState({starting: text})}
                  style={{color: '#333'}}
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
