import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  form: {
    paddingTop: (Metrics.screenHeight * .05),
    paddingHorizontal: 15
  },
  buttonContainer: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'center'
  },
})
