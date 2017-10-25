import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  row: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
		marginHorizontal: 10,
		marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
		borderWidth: .5,
		borderColor: '#2ecc71',
		backgroundColor: 'transparent',
  },
  item: {
    flex: .5,
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
    flex: 1,
		textAlign: 'left'
  },
  cost: {
    flex: .5,
  },
	itemDate: {
		color: '#bdc3c7',
	},
  itemCost: {
    fontWeight: 'normal',
    textAlign: 'right',
		color: '#ecf0f1',
		fontSize: 30
  },
  label: {
    textAlign: 'left',
    color: '#ecf0f1',
    fontSize: 22
  },
})
