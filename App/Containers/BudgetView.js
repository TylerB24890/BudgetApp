import React from 'react'
import { View, SectionList, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Realm from 'realm'
import ExpenseSchema from '../Fixtures/ExpenseModel'
import BudgetBalance from '../Components/BudgetBalance'
import BudgetItem from '../Components/BudgetItem'
import { CurrencyFormat } from '../Utils/CurrencyFormat'

// More info here: https://facebook.github.io/react-native/docs/sectionlist.html

// Styles
import styles from './Styles/BudgetViewStyle'
let monthly = []
let daily = []
let misc = []

class BudgetView extends React.PureComponent {

  constructor(props) {

    super(props)

    this.state = {
      starting: 4182,
      spending: 0,
      balance: 0,
      monthly: 0,
      daily: 0,
      misc: 0,
      data: [
        {
          key: 'Monthly',
          data: monthly
        }, {
          key: 'Daily',
          data: daily
        }, {
          key: 'Misc',
          data: misc
        }
      ],
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

  /**
   * Set the expense application state
   */
  _setBudgetState () {

    var realm = new Realm({schema: ExpenseSchema})
    let expenseData = realm.objects('BudgetItem').sorted('type')

    expenseData.forEach( function(item) {

      if(item.type === 'Monthly') {
        monthly.push({title: item.title, cost: item.cost, type: item.type, id: item.id})
      }

      if(item.type === 'Daily') {
        daily.push({title: item.title, cost: item.cost, type: item.type, id: item.id})
      }

      if(item.type === 'Misc') {
        misc.push({title: item.title, cost: item.cost, type: item.type, id: item.id})
      }
    })

    this.setState({
      data: [
        {
          key: 'Monthly',
          data: monthly
        }, {
          key: 'Daily',
          data: daily
        }, {
          key: 'Misc',
          data: misc
        }
      ],
    }, this._setTotals())
  }

  /**
   * Set the section totals to state + get available balance
   */
  _setTotals () {
    var monthTotal = this._calculateTotals(this.state.data, 'Monthly')
    var dailyTotal = this._calculateTotals(this.state.data, 'Daily')
    var miscTotal = this._calculateTotals(this.state.data, 'Misc')
    var total = (monthTotal + dailyTotal + miscTotal)

    monthly = []
    daily = []
    misc = []

    this.setState({
      spending: total,
      balance: (this.state.starting - total),
      monthly: monthTotal,
      daily: dailyTotal,
      misc: miscTotal,
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
