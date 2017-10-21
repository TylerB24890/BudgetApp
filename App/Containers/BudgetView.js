// Core
import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { connect } from 'react-redux'

// Database
import Realm from 'realm'
import { ExpenseSchema, CategorySchema, SettingsSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'

// Utilities
import BudgetCalculations from '../Utils/BudgetCalculations'
import BudgetObjectFormat from '../Utils/BudgetObjectFormat'

// Render components
import BudgetBalance from '../Components/BudgetBalance'
import BudgetItem from '../Components/BudgetItem'
import EmptyBudget from '../Components/EmptyBudget'

// Styles
import styles from './Styles/BudgetViewStyle'

let realm = new Realm({schema: [ExpenseSchema]})
let starting = 0

class BudgetView extends React.PureComponent {

  constructor(props) {

    super(props)

    this.state = {
      starting: starting,
      spending: 0,
      balance: 0,
      updated: false,
      data: [],
    }

    this.updateBudgetOverview = this.updateBudgetOverview.bind(this)
  }

  componentDidMount () {
    var startComp = 0
    var settings = {}
    var total = 0

    var data = realm.objects('BudgetItem').sorted('type')
    var formattedData = new BudgetObjectFormat(data)
    formattedData.forEach(function(item) {
      total += item.keyTotal
    })


    var settingsRealm = new Realm({path: 'SettingsScreen.realm', schema: [SettingsSchema]})
    settings = settingsRealm.objects('Settings')
    settings.forEach(function(setting) {
      startComp = setting.starting
    })

    this.setState({
      starting: startComp,
      data: formattedData,
      spending: total,
      balance: (startComp - total)
    })
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
  updateBudgetOverview() {
    this.componentDidMount()
    this.forceUpdate()
  }

  /**
   * Render the expenseItem component
   */
  renderItem ({item}) {
    return (
      <BudgetItem item={item} updateBudgetOverview={() => this.updateBudgetOverview()} navigation={this.props.navigation}/>
    )
  }

  /**
   * Render expense section header
   */
  renderSectionHeader = ({section}) => {
    var title = this._getCategoryTitle(section.key)
    var total = BudgetCalculations.sectionHeaderTotal(this.state.data, section.key)
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{title}: <Text style={styles.itemCost}>${parseFloat(total).toFixed(2)}</Text></Text>
      </View>
    )
  }

  /**
   * Render expense list header (global)
   */
  renderHeader = () => {
    return (
      <BudgetBalance starting={this.state.starting} balance={this.state.balance}/>
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
    <EmptyBudget navigation={this.props.navigation} />

  keyExtractor = (item, index) => index

  oneScreensWorth = 20

  render () {
    return (
      <View style={styles.container}>
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
      </View>
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
