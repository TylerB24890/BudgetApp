import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Image, TouchableOpacity } from 'react-native'
import { Container, View, Text, H1, Footer } from 'native-base'
import AppIntro from 'react-native-app-intro'

// Styles
import styles from './Styles/SumthingIntroScreenStyle'

class SumthingIntroScreen extends Component {

	constructor(props) {
		super(props)
	}

	_onSkipBtnHandle = () => {
		this._onDoneBtnHandle()
  }

  _onDoneBtnHandle = () => {
		var newUser = false

		if(typeof this.props.navigation.state.params !== 'undefined' && typeof this.props.navigation.state.params.new !== 'undefined') {
			newUser = this.props.navigation.state.params.new
		}

    this.props.navigation.navigate('BudgetView', {new: newUser})
  }

  _onnextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }

  _onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    return (
			<AppIntro>

        <View style={[styles.slide,{ backgroundColor: '#1abc9c' }]}>
					<View level={15} style={styles.slideImageContainer}>
						<Image style={styles.slideImage} source={require('../Images/intro-screen1.png')} />
					</View>
          <View level={10}>
						<H1 style={styles.slideHeader}>Manage your expenses</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}><Text style={styles.slideTextBold}>on the go</Text> by swiping left from the home screen. Edit or delete an expense by tapping it.</Text>
					</View>
					<View style={styles.skipContainer}>
						<TouchableOpacity onPress={() => this._onSkipBtnHandle()}>
							<Text style={styles.skip}>Skip <Text style={styles.swipe}>(1/4)</Text></Text>
						</TouchableOpacity>
					</View>
        </View>


				<View style={[styles.slide,{ backgroundColor: '#2ecc71' }]}>
					<View level={15} style={styles.slideImageContainer}>
						<Image style={styles.slideImage} source={require('../Images/intro-screen2.png')} />
					</View>
					<View level={10}>
						<H1 style={styles.slideHeader}>Create categories</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}>to see where your money is going and how much. Categories give you the ability to delete a group of expenses in one click. Perfect for one time expenses!</Text>
					</View>
					<View style={{marginTop: 8}}>
						<TouchableOpacity onPress={() => this._onSkipBtnHandle()}>
							<Text style={styles.skip}>Skip <Text style={styles.swipe}>(2/4)</Text></Text>
						</TouchableOpacity>
					</View>
        </View>


				<View style={[styles.slide,{ backgroundColor: '#3498db' }]}>
					<View level={15} style={styles.slideImageContainer}>
						<Image style={styles.slideImage} source={require('../Images/intro-screen3.png')} />
					</View>
					<View level={10}>
						<H1 style={styles.slideHeader}>Set a starting balance</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}>to keep track of how much money you have left. Try setting your starting balance to your paycheck and budget from there.</Text>
					</View>
					<View style={styles.skipContainer}>
						<TouchableOpacity onPress={() => this._onSkipBtnHandle()}>
							<Text style={styles.skip}>Skip <Text style={styles.swipe}>(3/4)</Text></Text>
						</TouchableOpacity>
					</View>
        </View>


				<View style={[styles.slide,{ backgroundColor: '#9b59b6' }]}>
					<View level={15} style={styles.slideImageContainer}>
						<Image style={styles.slideImage} source={require('../Images/intro-screen4.png')} />
					</View>
					<View level={10}>
						<H1 style={styles.slideHeader}>Track your expenses</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}><Text style={styles.slideTextBold}>your way.</Text> Sumthing gives you the freedom and flexibility to categorize and manage your expenses how you see fit. <Text style={styles.slideTextBold}>Get creative!</Text></Text>
					</View>
					<View style={styles.skipContainer}>
						<TouchableOpacity onPress={() => this._onDoneBtnHandle()} style={{paddingHorizontal: 10, paddingVertical: 5}}>
							<Text style={styles.skip}>Done</Text>
						</TouchableOpacity>
					</View>
        </View>
      </AppIntro>
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

export default connect(mapStateToProps, mapDispatchToProps)(SumthingIntroScreen)