import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemCost: {
    fontWeight: 'normal',
    textAlign: 'right'
  },
  label: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16
  },
  listContent: {
    marginTop: 0
  },
  sectionHeader: {
    marginTop: 0,
    marginBottom: 5,
    backgroundColor: '#34495e',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  sectionFooter: {
    marginVertical: 20
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'left',
    fontWeight: 'bold'
  }
})
