import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    paddingTop: (Metrics.screenHeight * .05),
    paddingHorizontal: 15
  },
  inputGroup: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: Colors.background,
    color: '#FFF',
  },
	smallLabel: {
		fontSize: 12.5,
		color: 'rgba(255,255,255,.6)'
	},
	datePickerLabel: {
		paddingBottom: 15,
		marginTop: 15,
		marginBottom: 15,
		borderBottomWidth: 2,
		borderBottomColor: '#777E8B'
	},
  buttonContainer: {
    marginTop: 15,
  },
	errorText: {
		color: Colors.error,
		marginBottom: 5
	}
})
