import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import EditItem from '../Components/EditItem'

// Styles
import styles from './Styles/EditItemScreenStyle'

class EditItemScreen extends Component {
  render () {
    const data = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <EditItem title={data.title} cost={data.cost} type={data.type} id={data.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditItemScreen)
