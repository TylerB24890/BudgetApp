import React from 'react'
import { Text, Animated, View, Easing } from 'react-native'
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
			headerRight: (<Icon name="ios-add-outline" size={25} color='#FFF' onPress={() => navigation.navigate("AddItemScreen")} />),
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Budget Overview</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-home-outline" size={25} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
  AddItemScreen: {
    screen: AddItemScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Expense',
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Add Expense</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-add-outline" size={25} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
  CategoriesScreen: {
    screen: CategoriesScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Expense Categories',
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Expense Categories</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-list-outline" size={25} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Budget Settings',
      drawerLabel: ({ focused }) => (
        <View style={styles.navElement}>
          <Text style={{color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Settings</Text>
        </View>
      ),
      drawerIcon: ({ focused }) => (
        <Icon name="ios-settings-outline" size={25} color={focused ? activeColor : inactiveColor} />
      )
    })
  },
}, {
  drawerWidth: 250,
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
	AddItemScreen: {screen: AddItemScreen},
  AddCategoryScreen: {
    screen: AddCategoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Category',
      headerLeft: <Icon name='ios-close' size={30} color='#FFF' onPress={() => { navigation.navigate('CategoriesScreen')}} />
    })
  },
  EditCategoryScreen: {
    screen: EditCategoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Category',
      headerLeft: <Icon name='ios-close' size={30} color='#FFF' onPress={() => { navigation.navigate('CategoriesScreen')}} />
    })
  },
  EditItemScreen: {
    screen: EditItemScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Expense'
    })
  },
  BudgetView: {
    screen: BudgetView,
    navigationOptions: ({navigation}) => ({
      title: 'Budget Overview',
    })
  },
  DrawerStack: { screen: DrawerStack }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'DrawerStack',
  transitionConfig: noTransitionConfig,
  navigationOptions: ({navigation}) => ({
    headerStyle: styles.header,
    headerTintColor: '#ecf0f1',
    headerLeft: <Icon name={navigation.state.index == 0 ? 'ios-menu' : 'ios-close'} size={30} color='#FFF' onPress={() => { if(navigation.state.index === 0) {
      navigation.navigate('DrawerOpen')
    } else {
      navigation.navigate('DrawerClose')
    }}} />
  })
})

export default PrimaryNav
