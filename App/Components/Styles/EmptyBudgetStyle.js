import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  emptyListText: {
    color: '#333',
    textAlign: 'center'
  },
  welcome: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'normal',
    marginBottom: 10
  },
  help: {
    marginVertical: 15,
    fontSize: 17
  },
  blockText: {
    flex: 1,
    color: '#333'
  },
  button: {
    backgroundColor: '#c0392b',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
	},
	small: {
		fontSize: 15,
		fontStyle: 'italic',
		color: '#333'
	}
})
