import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  emptyListText: {
    color: '#FFF',
    textAlign: 'center'
  },
  welcome: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 10
  },
  help: {
    marginVertical: 15,
    fontSize: 17
  },
  blockText: {
    flex: 1,
    color: '#FFF'
  },
  button: {
    backgroundColor: '#16a085',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
	},
	small: {
		fontSize: 15,
		fontStyle: 'italic',
		color: '#FFF'
	}
})
