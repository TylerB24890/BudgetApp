import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  form: {
    paddingTop: (Metrics.screenHeight * .05),
    paddingHorizontal: 15
  },
  buttonContainer: {
    marginTop: 60,
  },
	smallLabel: {
		fontSize: 12.5,
		color: 'rgba(255,255,255,.6)'
	},
  label: {
    color: 'rgba(255,255,255,.6)'
  }
})
