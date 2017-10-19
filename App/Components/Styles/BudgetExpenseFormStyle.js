import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    paddingTop: (Metrics.screenHeight / 7),
    paddingHorizontal: 30
  },
  inputGroup: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: Colors.background,
    color: '#FFF',
  },
  submitButton: {
    backgroundColor: '#16a085',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
    borderBottomWidth: 0,
    alignSelf: 'center'
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  }
})
