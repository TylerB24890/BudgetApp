import React from 'react'
import { Container, Content, Form, InputGroup, Input, Text, Icon } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/SettingsFormStyle'

export default class SettingsForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      starting: "0",
      user: ''
    }
  }

  componentDidMount () {
    this.setState({
      id: this.props.id,
      starting: this.props.starting,
      user: this.props.user
    })
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.starting !== this.props.starting) {
      this.setState({
        id: nextProps.id,
        starting: nextProps.starting.toString(),
        user: nextProps.user
      })
    }
  }

  _submitSettingsForm () {
    this.props.handler(this.state.id, this.state.user, this.state.starting)
  }


  render () {

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Form style={styles.form}>
            <InputGroup>
              <Input
                placeholder="What should we call you?"
                placeholderTextColor="rgba(255,255,255,.6)"
                value={this.state.user}
                editable={true}
                onChangeText={(text) => this.setState({user: text})}
                style={{color: '#FFF'}}
                autoFocus={true}
              />
            </InputGroup>
            <InputGroup>
              <Icon active name="logo-usd" style={{color: 'rgba(255,255,255,.6)', fontSize: 18}} />
              <Input
                placeholder="Starting Balance"
                placeholderTextColor="rgba(255,255,255,.6)"
                value={this.state.starting}
                editable={true}
                onChangeText={(text) => this.setState({starting: text})}
                style={{color: '#FFF'}}
                autoFocus={true}
              />
            </InputGroup>

            <Container style={styles.buttonContainer}>
              <BudgetButton block type="go" onPress={() => this._submitSettingsForm()} text="Save Settings" />
            </Container>
          </Form>
        </Content>
      </Container>
    )
  }
}
