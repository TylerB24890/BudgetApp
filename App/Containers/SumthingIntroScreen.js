import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Image } from 'react-native'
import { Container, View, Text, H1, Footer } from 'native-base'
import AppIntro from 'react-native-app-intro'

// Styles
import styles from './Styles/SumthingIntroScreenStyle'

class SumthingIntroScreen extends Component {

	constructor(props) {
		super(props)
	}

	_onSkipBtnHandle = (index) => {
		const data = this.props.navigation.state.params
    this.props.navigation.navigate('BudgetView', {new: data.new})
  }

  _ondoneBtnHandle = () => {
		const data = this.props.navigation.state.params
    this.props.navigation.navigate('BudgetView', {new: data.new})
  }

  _onnextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }

  _onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    const pageArray = [
			{
	      title: 'Manage your expenses',
	      description: 'on the go and instantly by swiping left on the main screen',
	      img: 'https://goo.gl/Bnc3XP',
	      imgStyle: {
	        height: 80 * 2.5,
	        width: 109 * 2.5,
	      },
	      backgroundColor: '#16a085',
	      fontColor: '#fff',
	      level: 10,
	    },
			{
	      title: 'Assign categories',
	      description: 'to see how and where you are spending money',
				img: 'https://goo.gl/Bnc3XP',
	      imgStyle: {
	        height: 80 * 2.5,
	        width: 109 * 2.5,
	      },
	      backgroundColor: '#2ecc71',
	      fontColor: '#fff',
	      level: 10,
	    },
		]


    return (
			<AppIntro>

        <View style={[styles.slide,{ backgroundColor: '#1abc9c' }]}>
          <View level={10}>
						<H1 style={styles.slideHeader}>Manage your expenses</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}><Text style={styles.slideTextBold}>on the go</Text> by swiping left from the home screen. Edit or delete an expense by tapping it.</Text>
					</View>
        </View>


				<View style={[styles.slide,{ backgroundColor: '#2ecc71' }]}>
					<View level={10}>
						<H1 style={styles.slideHeader}>Create categories</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}>to see where your money is going and how much. Categories give you the ability to delete a group of expenses in one click. Perfect for one time expenses!</Text>
					</View>
        </View>


				<View style={[styles.slide,{ backgroundColor: '#3498db' }]}>
					<View level={10}>
						<H1 style={styles.slideHeader}>Set a starting balance</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}>to keep track of how much money you have left. Try setting your starting balance to your paycheck and budget from there.</Text>
					</View>
        </View>


				<View style={[styles.slide,{ backgroundColor: '#9b59b6' }]}>
					<View level={10}>
						<H1 style={styles.slideHeader}>Track your expenses</H1>
					</View>
          <View level={5}>
						<Text style={styles.slideText}><Text style={styles.slideTextBold}>your way.</Text> Sumthing gives you the freedom and flexibility to categorize and manage your expenses how you see fit. <Text style={styles.slideTextBold}>Get creative!</Text></Text>
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
