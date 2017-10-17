import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  row: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: .5,
    borderBottomColor: '#7f8c8d'
  },
  item: {
    flex: .5,
    alignItems: 'flex-start'
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
    flex: 1
  },
  cost: {
    flex: .5,
    alignItems: 'flex-start'
  },
  itemCost: {
    fontWeight: 'normal',
    textAlign: 'right'
  },
  label: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16
  },
})
