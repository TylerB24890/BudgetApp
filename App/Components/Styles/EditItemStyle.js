import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  editTitle: {
    flex: .5,
  },
  editCost: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  input: {
    backgroundColor: Colors.background,
    color: '#FFF',
    flex: .94,
  },
  moneySign: {
    flex: .06,
    color: '#FFF',
    fontSize: 16
  }
})
