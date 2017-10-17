import React from 'react'
import { View, SectionList, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import BudgetService from '../Services/BudgetService'
import BudgetBalance from '../Components/BudgetBalance'
import BudgetItem from '../Components/BudgetItem'
import { CurrencyFormat } from '../Utils/CurrencyFormat'

// More info here: https://facebook.github.io/react-native/docs/sectionlist.html

// Styles
import styles from './Styles/BudgetViewStyle'
let budgetData = BudgetService.findAll()
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

    budgetData.forEach( function(item) {

      if(item.type === 'Monthly') {
        monthly.push({title: item.title, cost: item.cost.toFixed(2), type: item.type, id: item.id})
      }

      if(item.type === 'Daily') {
        daily.push({title: item.title, cost: item.cost.toFixed(2), type: item.type, id: item.id})
      }

      if(item.type === 'Misc') {
        misc.push({title: item.title, cost: item.cost.toFixed(2), type: item.type, id: item.id})
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
    })

    var monthTotal = this._calculateTotals(this.state.data, 'Monthly')
    var dailyTotal = this._calculateTotals(this.state.data, 'Daily')
    var miscTotal = this._calculateTotals(this.state.data, 'Misc')
    var total = (monthTotal + dailyTotal + miscTotal)

    this.setState({
      spending: total,
      balance: (this.state.starting - total),
      monthly: monthTotal,
      daily: dailyTotal,
      misc: miscTotal,
    })
  }

  updateBudgetOverview() {
    this.componentDidMount()
  }

  renderItem ({item}) {
    return (
      <BudgetItem item={item} updateBudgetOverview={() => this.updateBudgetOverview()}/>
    )
  }

  renderSectionHeader = ({section}) => {
    var total = this._calculateTotals(false, section.key)

    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{section.key}: <Text style={styles.itemCost}>{CurrencyFormat.format(total)}</Text></Text>
      </View>
    )
  }

  // Render a header?
  renderHeader = () =>
    <BudgetBalance starting={this.state.starting} balance={this.state.balance}/>

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
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetView)
