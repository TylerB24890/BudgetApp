import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import BudgetButton from './BudgetButton'
import styles from './Styles/EmptyBudgetStyle'

export default class EmptyBudget extends Component {

  constructor (props) {
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
            Welcome to Sumthing!
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            A budgeting app designed to be simple{'\n'}<Text style={styles.small}>and effective</Text>
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            Simply enter a starting balance and start tracking your expenses. You can enter an expense on the go by swiping left from the main screen.
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            Take it a step further and categorize your expenses to get a total for each category.
          </Text>

          <Content style={{marginTop: 30}}>
            <BudgetButton block type="go" onPress={() => this.props.navigation.navigate('SettingsScreen', { new: this.props.new })} text="Get started" />
          </Content>
        </Content>
      </Container>
    )
  }
}
