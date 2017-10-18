import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>

      </View>
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
