import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Metrics.screenHeight / 6)
  },
  inputContainer: {
    flexDirection: 'row',
    position: 'relative'
  },
  input: {
    backgroundColor: Colors.background,
    color: '#FFF',
    height: 50,
    borderBottomWidth: .5,
    borderBottomColor: '#FFF',
    marginBottom: 30,
    flex: .8
  },
  moneySign: {
    color: '#FFF',
    fontSize: 16,
    display: 'none'
  }
})
