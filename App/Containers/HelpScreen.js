import React, { Component } from 'react'
import { Container, Content, Text, View, H1, Icon } from 'native-base'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/HelpScreenStyle'

class HelpScreen extends Component {

	_handleLink (url) {
		Linking.canOpenURL(url).then(supported => {
			if(!supported) {
				return null
			} else {
				return Linking.openURL(url)
			}
		}).catch(err => console.error('An error occurred opening link', err))
	}

  render () {
    return (
      <Container style={styles.container}>
				<Content>
					<View style={styles.helpContent}>
						
					</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen)
