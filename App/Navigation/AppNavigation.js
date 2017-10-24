import React from 'react'
import { Text, Animated, View, Easing, TouchableOpacity } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import HeaderHomeIcon from '../Components/HeaderHomeIcon'
import HeaderBackIcon from '../Components/HeaderBackIcon'

import AddCategoryScreen from '../Containers/AddCategoryScreen'
import EditCategoryScreen from '../Containers/EditCategoryScreen'
import CategoriesScreen from '../Containers/CategoriesScreen'
import EditItemScreen from '../Containers/EditItemScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import BudgetView from '../Containers/BudgetView'
import AddItemScreen from '../Containers/AddItemScreen'

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

// Card Stack Navigator
// Transitions screens in as cards (left to right)
// Currently only services the 'Add Expense Item' screen
const CardStack = StackNavigator({
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
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Budget Overview</Text>
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
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Add Expense</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-add-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
}, {
	mode: 'card',
	headerMode: 'none',
})

// Slide out Drawer navigator
// Main app navigation
// Services all pages (Except add/edit categories & edit expenses)
const DrawerStack = DrawerNavigator({
  CardStack: { screen: CardStack },
	AddItemScreen: {
    screen: paramsToProps(AddItemScreen),
    navigationOptions: ({navigation}) => ({
      title: 'Add Expense',
			headerRight: (
				<HeaderHomeIcon navigation={navigation} />
			),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Add Expense</Text>
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
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Expense Categories</Text>
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
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Settings</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-settings-outline" size={30} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
}, {
  drawerWidth: 250,
	initialRouteName: 'CardStack',
})

// Main Navigator
// Transitions screens in as modals
const PrimaryNav = StackNavigator({
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
      title: 'Edit Expense',
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
    headerStyle: styles.header,
    headerTintColor: '#ecf0f1',
    headerLeft: (
			<TouchableOpacity style={styles.headerIcon} onPress={() => { if(navigation.state.index === 0) {
				navigation.navigate('DrawerOpen')
					} else {
					navigation.navigate('DrawerClose')
			}}}>
				<Icon name={navigation.state.index == 0 ? 'ios-menu' : 'ios-close'} size={30} color='#FFF' />
			</TouchableOpacity>
		)
	})
})

export default PrimaryNav
