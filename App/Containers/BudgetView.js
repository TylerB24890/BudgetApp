// Core
import React from 'react'
import SplashScreen from 'react-native-smart-splash-screen'
import { View, SectionList, Text } from 'react-native'
import { connect } from 'react-redux'

// Database
import Realm from 'realm'
import { ExpenseSchema, SettingsSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'
import CategoryService from '../Services/CategoryService'

// Utilities
import BudgetCalculations from '../Utils/BudgetCalculations'
import BudgetObjectFormat from '../Utils/BudgetObjectFormat'
import { CurrencyFormat } from '../Utils/CurrencyFormat'
import moment from 'moment'

// Services
import BudgetNotifications from '../Services/BudgetNotifications'

// Render components
import GestureRecognizer, { swipeDirections } from '../Components/GestureRecognizer'
import BudgetBalance from '../Components/BudgetBalance'
import BudgetItem from '../Components/BudgetItem'
import EmptyBudget from '../Components/EmptyBudget'

// Styles
import styles from './Styles/BudgetViewStyle'

let realm = new Realm({schema: [ExpenseSchema]})
let starting = 0

class BudgetView extends React.PureComponent {

  constructor (props) {

    super(props)

    this.state = {
      starting: starting,
      spending: 0,
      balance: 0,
      updated: false,
      data: [],
			user: '',
			new: true,
			sort: 'cost'
    }

    this._updateBudgetOverview = this._updateBudgetOverview.bind(this)
  }

  componentDidMount () {

		SplashScreen.close({
			animationType: SplashScreen.animationType.scale,
			duration: 850,
			delay: 500
		})

    this._setupBudgetView()
  }

	componentWillReceiveProps (nextProps) {
		if(typeof nextProps.sort !== 'undefined' && nextProps.sort !== this.state.sort) {
			this.setState({
				sort: nextProps.sort
			}, this._setupBudgetView())
		}
	}

	_setupBudgetView () {
		var startComp = 0
		var user = ''
    var settings = {}
    var total = 0
		var budgetName = ''
		var newUser = false

		var settingsRealm = new Realm({path: 'SettingsScreen.realm', schema: [SettingsSchema]})
    settings = settingsRealm.objects('Settings')
    settings.forEach(function(setting) {
      startComp = setting.starting
			user = setting.name
			budgetName = setting.budgetName
    })

		if(parseFloat(startComp) <= 0) {
			newUser = true
		}

    var data = realm.objects('BudgetItem').sorted('type')
    var formattedData = new BudgetObjectFormat(data, this.state.sort)

    formattedData.forEach(function(item) {
			var itemData = item.data
			itemData.forEach(function(expense) {
				total += expense.cost
			})
    })

    this.setState({
      starting: startComp,
      data: formattedData,
      spending: total,
      balance: (startComp - total),
			user: user,
			budgetName: budgetName,
			new: newUser,
    })

		if(startComp !== 0 && (((startComp - total) / startComp) * 100) < 20) {
			new BudgetNotifications('low', (startComp - total), user)
		}

		if(moment().isoWeekday() == 5 && moment().hour() >= 15) {
			new BudgetNotifications('friday', false, false, false, true)
			new BudgetNotifications('evening', false, false, false, true)
			new BudgetNotifications('morning', (startComp - total), user)
		} else if(moment().isoWeekday() == 4 && moment().hour() >= 15){
			new BudgetNotifications('thursday', false, false, false, true)
		} else {
			new BudgetNotifications('thursday', (startComp - total), user)
			new BudgetNotifications('friday', (startComp - total), user)
		}
	}

  _getCategoryTitle (catId) {
    let cat = {}
    var catTitle = ''

    var catRealm = new Realm({path: 'CategorySelect.realm', schema: [CategorySchema]})
    cat = catRealm.objects('Category').filtered('id = "' + catId + '"')

    cat.forEach(function(item) {
      catTitle = item.title
    })

    return catTitle
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
    var total = BudgetCalculations.sectionHeaderTotal(this.state.data, section.key)

		if(title.length > 1) {
			return (
	      <View style={styles.sectionHeader}>
	        <Text style={styles.headerText}>{title}: <Text style={styles.itemCost}>{CurrencyFormat(total)}</Text></Text>
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

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}></Text>

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
			directionOffsetThreshold: 80
		}
    return (
			<GestureRecognizer
				onSwipeLeft={() => this.props.navigation.navigate('AddItemScreen', { autoFocus: true })}
				config={quickAddConfig}
				style={styles.container}
			>
				<SectionList
					renderSectionHeader={this.renderSectionHeader}
					sections={this.state.data}
					contentContainerStyle={styles.listContent}
					data={this.state.data}
					renderItem={this.renderItem.bind(this)}
					keyExtractor={this.keyExtractor}
					initialNumToRender={this.oneScreensWorth}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					ListEmptyComponent={this.renderEmpty}
					renderSectionFooter={this.renderSectionFooter}
				/>
			</GestureRecognizer>
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
