import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
	slide: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 30,
		position: 'relative'
	},
	slideHeader: {
		textAlign: 'center',
		color: '#FFF',
		marginBottom: 10,
		alignSelf: 'center'
	},
	slideImageContainer: {
		marginBottom: 15,
	},
	slideImage: {
		width: 181,
		height: 350,
		alignSelf: 'center'
	},
	slideText: {
		color: '#FFF',
		textAlign: 'center',
		alignSelf: 'center'
	},
	slideTextBold: {
		color: '#FFF',
		fontWeight: '700'
	},
	skipContainer: {
		marginTop: 12,
		justifyContent: 'center'
	},
	skip: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: '700',
		alignSelf: 'center'
	},
	swipe: {
		color: '#7f8c8d',
		fontSize: 12,
		alignSelf: 'center',
		marginLeft: 5
	},
})
