import React, { Component } from 'react'
import { Container, Content, Text, View, H1, Icon } from 'native-base'
import { Linking, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends Component {

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
				<Content scrollEnabled={false}>

					<View style={styles.screenHeader}>
						<View style={styles.aboutContent}>
							<H1 style={styles.screenTitle}>BudgetDown</H1>
							<View>
								<TouchableOpacity style={styles.aboutLink} onPress={() => this._handleLink('http://tylerb.me')}>
									<Text style={styles.aboutMetaText}><Text style={styles.aboutMetaTextBold}>Author:</Text> Tyler Bailey - {new Date().getFullYear()}</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.socialIcons}>
								<TouchableOpacity style={styles.aboutLink} onPress={() => this._handleLink('https://twitter.com/TyBailey23')}>
									<Icon name="logo-twitter" style={styles.aboutMetaIcon} />
								</TouchableOpacity>
								<TouchableOpacity style={styles.aboutLink} onPress={() => this._handleLink('https://github.com/TylerB24890/BudgetApp')}>
									<Icon name="logo-github" style={styles.aboutMetaIcon} />
								</TouchableOpacity>
								<TouchableOpacity style={styles.aboutLink} onPress={() => this._handleLink('https://www.linkedin.com/in/tylerb24890')}>
									<Icon name="logo-linkedin" style={styles.aboutMetaIcon} />
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={[styles.aboutContent, styles.aboutContentContainer]}>
						<Text style={styles.aboutText}>BudgetDown is 100% open source and is available for download or modification through the GitHub link (icon) provided above.</Text>
					</View>

					<View style={[styles.aboutContent, styles.aboutContentContainer]}>
						<Text style={styles.aboutText}>For comments, recommendations and suggestions please use the GitHub issues form or email me through my personal portfolio {'\n'}(click on the "Author" text at the top)</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
