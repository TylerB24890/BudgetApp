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
            So, you're broke too, huh?
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            Have a hard time managing your expenses?{"\n"}
            <Text style={styles.small}>So do we.</Text>
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            This application is designed to help you get your shit together, financially.
          </Text>

          <Text style={[styles.emptyListText, styles.help]}>
            Categorize your expenses and{"\n"}let the app do the math.{"\n"}{"\n"}<Text style={styles.small}>Because math is hard.</Text>
          </Text>

          <Content style={{marginTop: 30}}>
            <BudgetButton block type="go" onPress={() => this._openNavDrawer()} text="Let's do this." />
          </Content>
        </Content>
      </Container>
    )
  }
}
