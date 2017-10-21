import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  form: {
    paddingTop: (Metrics.screenHeight / 7),
    paddingHorizontal: 15
  },
  buttonContainer: {
    marginTop: 60,
  },
  label: {
    color: 'rgba(255,255,255,.6)'
  }
})