import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  starting: {
    flex: .5,
    alignItems: 'center',
    marginBottom: 5,
  },
  available: {
    flex: .5,
    alignItems: 'center'
  },
})

export const positiveColor = Colors.positive
export const negativeColor = Colors.negative
