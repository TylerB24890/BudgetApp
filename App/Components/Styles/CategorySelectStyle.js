import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: .3,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 2,
    marginTop: 10
  },
  select: {
    backgroundColor: Colors.background,
    height: 50,
    borderBottomWidth: .5,
    borderBottomColor: '#FFF',
    marginBottom: 30,
    flex: .8,
    zIndex: 1,
  },
  option: {
    borderBottomWidth: .5,
    borderBottomColor: Colors.background
  }
})
