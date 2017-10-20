import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  form: {
    paddingTop: (Metrics.screenHeight / 7),
    paddingHorizontal: 15
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  submitButton: {
    backgroundColor: '#16a085',
    marginTop: 50,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  cancelButton: {
    backgroundColor: '#c0392b',
    marginTop: 50,
    marginLeft: 15,
  }
})
