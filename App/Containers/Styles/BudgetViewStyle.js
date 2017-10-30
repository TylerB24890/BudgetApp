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
    color: '#333',
    fontSize: 16
  },
  listContent: {
    marginTop: 0
  },
  sectionHeader: {
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  sectionFooter: {
    marginVertical: 15
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'left',
    fontWeight: 'bold'
  }
})
