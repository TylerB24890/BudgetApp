// Core
import React from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'

// Utilities
import BudgetCalculations from '../Utils/BudgetCalculations'
import BudgetObjectFormat from '../Utils/BudgetObjectFormat'
import { CurrencyFormat } from '../Utils/CurrencyFormat'

// Services
import ExpenseService from '../Services/ExpenseService'
import CategoryService from '../Services/CategoryService'
import SettingsService from '../Services/SettingsService'
import NotificationService from '../Services/NotificationService'

// Components
import SplashScreen from 'react-native-smart-splash-screen'
import { View, Text } from 'react-native'
import GestureRecognizer from '../Components/GestureRecognizer'
import BudgetBalance from '../Components/BudgetBalance'
import BudgetItem from '../Components/BudgetItem'
import EmptyBudget from '../Components/EmptyBudget'

// Styles
import styles from './Styles/BudgetViewStyle'

// Get the intital user settings
let settings = SettingsService.getAllSettings()
// Get the intital expenses (formatted)
let expenses = new BudgetObjectFormat(ExpenseService.getAllExpenses(), 'cost')
let starting = 0
let total = 0
let balance = 0
let user = ''
let budgetName = ''
let newUser = true

class BudgetView extends React.PureComponent {

  constructor (props) {

    super(props)

		// Check if the user has been on the app before
		AsyncStorage.getItem('newUser').then(value => {
			// If not, redirect them to the app intro slider
			if(value == undefined || typeof value == 'undefined' || value == null) {
				AsyncStorage.setItem('newUser', "false")
				this.props.navigation.navigate('SumthingIntroScreen', {new: true})
			} else {
				newUser = false
			}
		})

		// Get the total for the expenses
    total = BudgetCalculations.expenseTotals(expenses)

		// Parse the settings and get initial data
		if(typeof settings !== 'undefined' && settings !== null) {
			settings.forEach(function(setting) {
	      starting = setting.starting
				user = setting.name
				budgetName = setting.budgetName
	    })
		}

		balance = (starting - total)

		// Set initial app state (calculate the balance)
    this.state = {
      starting: starting,
      spending: total,
      balance: balance,
      updated: false,
			budgetName: budgetName,
      data: expenses,
			user: user,
			new: newUser,
			sort: 'cost'
    }

    this._updateBudgetOverview = this._updateBudgetOverview.bind(this)
  }

  componentDidMount () {
		// Close the splash screen
		SplashScreen.close({
			animationType: SplashScreen.animationType.scale,
			duration: 850,
			delay: 500
		})

		this._setupBudgetView()
  }

	/**
	 * Setup the app state and budget overview data
	 */
	_setupBudgetView () {

		// Get the current settings
    settings = SettingsService.getAllSettings()
    settings.forEach(function(setting) {
      starting = setting.starting
			user = setting.name
			budgetName = setting.budgetName
    })

		// Is this user new?
		const navParams = this.props.navigation.state.params
		if(typeof navParams !== 'undefined' && typeof navParams.new !== 'undefined') {
			newUser = navParams.new
		} else {
			if(parseFloat(starting) <= 0) {
				newUser = true
			}
		}

		// Get new/updated expenses
  	expenses = new BudgetObjectFormat(ExpenseService.getAllExpenses(), this.state.sort)
  	total = BudgetCalculations.expenseTotals(expenses)
		balance = (starting - total)

		// Set the state
    this.setState({
      starting: starting,
      data: expenses,
      spending: total,
      balance: balance,
			user: user,
			budgetName: budgetName,
			new: newUser,
    }, NotificationService.scheduleNotificationMessage(user, balance))
	}

  /**
   * Re-rerun the componentDidMount function to update state
   */
  _updateBudgetOverview () {
    this._setupBudgetView()
    this.forceUpdate()
  }

  /**
   * Render the expenseItem component
   */
  renderItem ({item}) {
    return (
      <BudgetItem item={item} updateBudgetOverview={() => this._updateBudgetOverview()} navigation={this.props.navigation}/>
    )
  }

  /**
   * Render expense section header
   */
  renderSectionHeader = ({section}) => {
    var title = CategoryService.getCategoryTitle(section.key)
    var catTotal = BudgetCalculations.sectionHeaderTotal(this.state.data, section.key)

		if(title.length > 1) {
			return (
	      <View style={styles.sectionHeader}>
	        <Text style={styles.headerText}>{title}: <Text style={styles.itemCost}>{CurrencyFormat(catTotal)}</Text></Text>
	      </View>
	    )
		} else {
			return (
				<View></View>
			)
		}
  }

  /**
   * Render expense list header (global)
   */
  renderHeader = () => {
    return (
      <BudgetBalance user={this.state.user} budgetName={this.state.budgetName} navigation={this.props.navigation} starting={this.state.starting} balance={this.state.balance}/>
    )
  }

  // Does each section need a footer?
  renderSectionFooter = () =>
    <View style={styles.sectionFooter}></View>

  // Show this when data is empty
  renderEmpty = () =>
		<EmptyBudget navigation={this.props.navigation} new={this.state.new} />

  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  render () {

		const quickAddConfig = {
			velocityThreshold: .3,
			directionOffsetThreshold: 110
		}
    return (
			<GestureRecognizer
				onSwipeLeft={() => this.props.navigation.navigate('AddItemScreen', { autoFocus: true })}
				config={quickAddConfig}
				style={styles.container}
				renderSectionHeader={this.renderSectionHeader}
				sections={this.state.data}
				contentContainerStyle={styles.listContent}
				data={this.state.data}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={this.keyExtractor}
				initialNumToRender={this.oneScreensWorth}
				ListHeaderComponent={this.renderHeader}
				ListEmptyComponent={this.renderEmpty}
				renderSectionFooter={this.renderSectionFooter}
			/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BudgetView)
