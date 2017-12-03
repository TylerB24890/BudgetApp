import React from 'react'
import { Text, Animated, View, Easing, TouchableOpacity, Image, Platform } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import SumthingIntroScreen from '../Containers/SumthingIntroScreen'

import HeaderHomeIcon from '../Components/HeaderHomeIcon'
import HeaderBackIcon from '../Components/HeaderBackIcon'

import BudgetView from '../Containers/BudgetView'
import AddItemScreen from '../Containers/AddItemScreen'
import AddCategoryScreen from '../Containers/AddCategoryScreen'
import EditCategoryScreen from '../Containers/EditCategoryScreen'
import CategoriesScreen from '../Containers/CategoriesScreen'
import EditItemScreen from '../Containers/EditItemScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import AboutScreen from '../Containers/AboutScreen'

import Icon from 'react-native-vector-icons/Ionicons'

import styles, { inactiveColor, activeColor, barColor } from './Styles/NavigationStyles'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const paramsToProps = (SomeComponent) => {
// turns this.props.navigation.state.params into this.params.<x>
    return class extends React.Component {
        static navigationOptions = SomeComponent.navigationOptions;
    	// everything else, call as SomeComponent
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}


// Slide out Drawer navigator
// Main app navigation
// Services all pages (Except add/edit categories & edit expenses)
const DrawerStack = DrawerNavigator({
	BudgetView: {
    screen: paramsToProps(BudgetView),
    navigationOptions: ({navigation}) => ({
      title: 'Budget Overview',
			headerRight: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate("AddItemScreen")}>
					<Icon name="ios-add-outline" size={30} color='#FFF' />
				</TouchableOpacity>
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={[styles.navText, {paddingTop: 5, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}]}>Budget Overview</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-home-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
	AddItemScreen: {
    screen: paramsToProps(AddItemScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Add Expense',
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={[styles.navText, {paddingTop: 5, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}]}>Add Expense</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-add-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
  CategoriesScreen: {
    screen: paramsToProps(CategoriesScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Expense Categories',
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={[styles.navText, {paddingTop: 4, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}]}>Expense Categories</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-list-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
  SettingsScreen: {
    screen: paramsToProps(SettingsScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Budget Settings',
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={[styles.navText, {paddingTop: 3, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}]}>Settings</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-settings-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
	AboutScreen: {
    screen: paramsToProps(AboutScreen),
    navigationOptions: ({navigation}) => ({
      title: 'About',
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={[styles.navText, {paddingTop: 4, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}]}>About</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-information-circle-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
	HelpScreen: {
    screen: paramsToProps(SumthingIntroScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Help',
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={[styles.navText, {paddingTop: 3, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}]}>Help</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-help-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
}, {
  drawerWidth: 250,
	initialRouteName: 'BudgetView',
})

// Main Navigator
// Transitions screens in as modals
const PrimaryNav = StackNavigator({
  SumthingIntroScreen: { screen: SumthingIntroScreen },
  AboutScreen: { screen: AboutScreen },
  HelpScreen: { screen: SumthingIntroScreen },
  AddCategoryScreen: {
    screen: paramsToProps(AddCategoryScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Add Category',
      headerLeft: (
				<HeaderBackIcon navigation={navigation} />
			),
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
    })
  },
  EditCategoryScreen: {
    screen: paramsToProps(EditCategoryScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Edit Category',
      headerLeft: (
				<HeaderBackIcon navigation={navigation} />
			),
    })
  },
  EditItemScreen: {
    screen: paramsToProps(EditItemScreen),
    navigationOptions: ({navigation}) => ({
			headerLeft: (
				<HeaderBackIcon navigation={navigation} />
			),
    })
  },
  DrawerStack: { screen: DrawerStack },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'DrawerStack',
	mode: 'modal',
  navigationOptions: ({navigation}) => ({
		gesturesEnabled: false,
    headerStyle: styles.header,
    headerTintColor: '#ecf0f1',
		headerTitle: (
			<Image style={{width: 95, height: 40, alignSelf: 'center', marginTop: (Platform.OS === 'ios' ? 0 : 5)}} source={require('../Images/app-logo.png')} />
		),
    headerLeft: (
			<TouchableOpacity style={styles.headerIcon} onPress={() => { if(navigation.state.index === 0) {
				navigation.navigate('DrawerOpen')
					} else {
					navigation.navigate('DrawerClose')
			}}}>
				<Icon name={navigation.state.index == 0 ? 'ios-menu' : 'ios-close'} size={30} color='#FFF' />
			</TouchableOpacity>
		),
	})
})

export default PrimaryNav
