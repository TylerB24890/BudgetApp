import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
	slide: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 30
	},
	slideHeader: {
		textAlign: 'center',
		color: '#FFF',
		marginBottom: 10
	},
	slideText: {
		color: '#FFF',
		textAlign: 'center'
	},
	slideTextBold: {
		color: '#FFF',
		fontWeight: '700'
	}
})
