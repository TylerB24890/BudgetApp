import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
	modalContent: {
		backgroundColor: Colors.background,
	},
	closeButtonText: {
		fontSize: 22,
		color: '#333',
		textAlign: 'right'
	},
	closeButton: {
		fontSize: 54,
		color: '#333',
		textAlign: 'right',
		marginRight: 20,
	}
})
