import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    paddingTop: (Metrics.screenHeight / 7),
    paddingHorizontal: 15
  },
  inputGroup: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: Colors.background,
    color: '#FFF',
  },
  buttonContainer: {
    marginTop: 60,
  },
})
