import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Metrics.screenHeight / 7)
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.background,
    color: '#FFF',
    height: 50,
    borderBottomWidth: .5,
    borderBottomColor: '#FFF',
    marginBottom: 30,
    flex: .8,
    paddingHorizontal: 10
  },
  submitButton: {
    backgroundColor: '#16a085',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 60
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  }
})
