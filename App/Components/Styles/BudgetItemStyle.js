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
		borderColor: '#16a085',
		backgroundColor: 'transparent',
  },
  item: {
    flex: .44,
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontWeight: '500',
    color: '#333',
    fontSize: 16,
    flex: 1,
		textAlign: 'left'
  },
  cost: {
    flex: .56,
  },
	itemDate: {
		color: '#7f8c8d',
	},
  itemCost: {
    fontWeight: '300',
    textAlign: 'right',
		color: '#e74c3c',
		fontSize: 30
  },
  label: {
    textAlign: 'left',
    color: '#333',
    fontSize: 22
  },
})
