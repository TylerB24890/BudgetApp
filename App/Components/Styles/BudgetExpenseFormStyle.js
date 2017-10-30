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
		borderBottomColor: 'rgba(80,80,80,.5)'
  },
  input: {
    backgroundColor: Colors.background,
    color: '#333',
  },
	smallLabel: {
		fontSize: 12.5,
		color: 'rgba(51,51,51,.6)'
	},
	datePickerLabel: {
		paddingBottom: 15,
		marginTop: 15,
		marginBottom: 15,
		borderBottomWidth: 1.5,
		borderBottomColor: 'rgba(80,80,80,.3)'
	},
  buttonContainer: {
    marginTop: 15,
  },
	errorText: {
		color: Colors.error,
		marginBottom: 5
	}
})
