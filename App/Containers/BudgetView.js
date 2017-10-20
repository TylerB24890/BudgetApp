import React from 'react'
import { View, SectionList, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Realm from 'realm'
import { CategorySchema, ExpenseSchema } from '../Fixtures/BudgetSchemas'
import ExpenseModel from '../Fixtures/ExpenseModel'
import BudgetBalance from '../Components/BudgetBalance'
import BudgetObjectFormat from '../Utils/BudgetObjectFormat'
import BudgetItem from '../Components/BudgetItem'

// More info here: https://facebook.github.io/react-native/docs/sectionlist.html

// Styles
import styles from './Styles/BudgetViewStyle'
let monthly = []
let daily = []
let misc = []

let realm = new Realm({schema: [ExpenseSchema]})

class BudgetView extends React.PureComponent {

  constructor(props) {

    super(props)

    this.state = {
      starting: 4182,
      spending: 0,
      balance: 0,
      updated: false,
      data: [],
    }

    this.updateBudgetOverview = this.updateBudgetOverview.bind(this)
  }

  /**
   * Calculate section totals
   */
  _calculateTotals (data, totalKey) {
    if(!data)
      data = this.state.data

    var sectionTotal = 0

    data.forEach( function (item) {

      if(item.key === totalKey) {
        var itemData = item.data
        itemData.forEach( function(lineItem) {
          sectionTotal += parseFloat(lineItem.cost)
        })
      }
    })

    return sectionTotal
  }

  componentDidMount () {
    this._setBudgetState()
  }

  componentWillReceiveProps(nextProps) {
    const data = this.props.navigation.state.params
    this.setState({updated: nextProps.updated})
  }

  /**
   * Set the expense application state
   */
  _setBudgetState () {
    var data = realm.objects('BudgetItem').sorted('type')
    var catTotals = []
    var total = 0

    this.setState({
      data: new BudgetObjectFormat(data),
    })

    this.setState({
      spending: total,
      balance: (this.state.starting - total),
    })
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
    var total = this._calculateTotals(false, section.key)

    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{section.key}: <Text style={styles.itemCost}>${parseFloat(total).toFixed(2)}</Text></Text>
      </View>
    )
  }

  /**
   * Render expense list header (global)
   */
  renderHeader = () => {
    var monthTotal = this._calculateTotals(false, 'Monthly')
    var dailyTotal = this._calculateTotals(false, 'Daily')
    var miscTotal = this._calculateTotals(false, 'Misc')
    var total = (monthTotal + dailyTotal + miscTotal)
    var balance = (this.state.starting - total)
    return (
      <BudgetBalance starting={this.state.starting} balance={balance}/>
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
    <Text style={styles.label}> - Nothing to See Here - </Text>

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
