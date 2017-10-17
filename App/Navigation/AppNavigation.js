import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import BudgetView from '../Containers/BudgetView'
import AddItemScreen from '../Containers/AddItemScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { inactiveColor, activeColor, barColor } from './Styles/NavigationStyles'

const TabStack = TabNavigator({
  BudgetView: {
    screen: BudgetView,
    navigationOptions: ({navigation}) => ({
      title: 'Budget Overview',
      tabBarLabel: ({ focused }) => (
        <Text style={{textAlign: 'center', fontSize: 12, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Budget Overview</Text>
      ),
      tabBarIcon: ({ focused }) => (
        <Icon name="ios-list-outline" size={30} color={focused ? '#FFF' : inactiveColor} />
      ),
      headerRight: <TouchableHighlight underlayColor="transparent" onPress={() => { navigation.navigate('AddItemScreen') }}><Icon name="ios-add" size={30} color="#ecf0f1" /></TouchableHighlight>
    })
  },
  AddItemScreen: {
    screen: AddItemScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Item',
      tabBarLabel: ({ focused }) => (
        <Text style={{textAlign: 'center', fontSize: 12, color: focused ? activeColor : inactiveColor, fontWeight: focused ? '500' : 'normal'}}>Add Item</Text>
      ),
      tabBarIcon: ({ focused }) => (
        <Icon name="ios-add-circle-outline" size={30} color={focused ? '#FFF' : inactiveColor} />
      ),
      headerLeft: <TouchableHighlight underlayColor="transparent" onPress={() => { navigation.navigate('BudgetView') }}><Icon name="ios-arrow-back" size={30} color="#ecf0f1" /></TouchableHighlight>
    })
  },
}, {
  swipeEnabled: false,
  lazy: false,
  tabBarOptions: {
    showIcon: true,
    tabStyle: {
      flex: 1,
      justifyContent: 'center'
    },
  },
  tabBarComponent: props => {
    return (
      <TabBarBottom
        {...props}
        style={{ backgroundColor: barColor }}
      />
    )
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TabStack: { screen: TabStack }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'TabStack',
  navigationOptions: ({navigation}) => ({
    headerStyle: styles.header,
    headerTintColor: '#ecf0f1',
  })
})

export default PrimaryNav
