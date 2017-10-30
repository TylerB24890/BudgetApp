import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  updated: {
    paddingVertical: 15,
    marginHorizontal: 15,
    marginTop: 15,
  },
  updatedText: {
    textAlign: 'center',
    color: '#27ae60',
    fontSize: 16,
    fontWeight: 'bold'
  },
})
