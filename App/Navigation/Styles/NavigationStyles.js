import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.header,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 0
  },
  navElement: {
    paddingVertical: 15,
    flex: 1,
    alignItems: 'flex-start'
  }
})

export const barColor = Colors.header
export const activeColor = Colors.active
export const inactiveColor = Colors.inactive
