import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import styles from './Styles/EmptyBudgetStyle'

export default class EmptyBudget extends Component {

  constructor(props) {
    super(props)
  }

  _openNavDrawer () {
    const {navigate} = this.props.navigation

    navigate('DrawerOpen')
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <Text style={[styles.emptyListText, styles.welcome]}>
            Welcome to your budget!
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            This application is designed to help you get your shit together, financially.
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            First, enter your starting balance.{"\n"}
            Then, create some "Expense Categories"{"\n"}
            Lastly, create some Expenses.{"\n"}{"\n"}
            Let the app do the math.
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            To edit an expense, you can simply tap on the expense item in the overview list.
          </Text>

          <Button block style={styles.button} onPress={() => this._openNavDrawer()}>
            <Text style={styles.buttonText}>Get Started!</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
