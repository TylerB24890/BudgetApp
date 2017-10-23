import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
	modalContent: {
		backgroundColor: Colors.background,
		paddingTop: 50,
	},
	closeButtonText: {
		fontSize: 22,
		color: '#FFF',
		textAlign: 'right'
	},
	closeButton: {
		fontSize: 54,
		color: '#FFF',
		textAlign: 'right',
		marginRight: 20,
	}
})
