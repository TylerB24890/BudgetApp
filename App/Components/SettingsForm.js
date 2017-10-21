import React from 'react'
import { Container, Content, Form, InputGroup, Input, Text, Button } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/SettingsFormStyle'

export default class SettingsForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount () {
    this.setState({

    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({

    })
  }

  _submitSettingsForm () {
    this.props.handler()
  }


  render () {

    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Form style={styles.form}>
            <InputGroup>

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
