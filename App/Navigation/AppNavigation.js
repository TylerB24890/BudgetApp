import React from 'react'
import { Text, Animated, View, Easing, TouchableOpacity } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

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


const DrawerStack = DrawerNavigator({
  BudgetView: {
    screen: BudgetView,
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
    screen: AddItemScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Expense',
			headerRight: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.navigate('BudgetView')}}>
					<Icon name="ios-home" size={30} color="#FFF"/>
				</TouchableOpacity>
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
    screen: CategoriesScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Expense Categories',
			headerRight: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.navigate('BudgetView')}}>
					<Icon name="ios-home" size={30} color="#FFF"/>
				</TouchableOpacity>
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
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Budget Settings',
			headerRight: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.navigate('BudgetView')}}>
					<Icon name="ios-home" size={30} color="#FFF"/>
				</TouchableOpacity>
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
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AddCategoryScreen: {
    screen: AddCategoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Category',
      headerLeft: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.goBack()}}>
					<Icon name='ios-close' size={30} color='#FFF' />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.navigate('BudgetView')}}>
					<Icon name="ios-home" size={30} color="#FFF"/>
				</TouchableOpacity>
			),
    })
  },
  EditCategoryScreen: {
    screen: EditCategoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Category',
      headerLeft: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.goBack()}}>
					<Icon name='ios-close' size={30} color='#FFF' />
				</TouchableOpacity>
			),
    })
  },
  EditItemScreen: {
    screen: EditItemScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Expense',
			headerLeft: (
				<TouchableOpacity style={styles.headerIcon} onPress={() => { navigation.goBack()}}>
					<Icon name='ios-close' size={30} color='#FFF' />
				</TouchableOpacity>
			),
    })
  },
  DrawerStack: { screen: DrawerStack }
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
