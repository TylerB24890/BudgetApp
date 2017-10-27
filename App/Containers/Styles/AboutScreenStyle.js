import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
	aboutContent: {
		paddingHorizontal: 15,
		alignItems: 'center'
	},
	aboutContentContainer: {
		marginTop: 15
	},
	aboutText: {
		color: '#FFF',
		marginBottom: 15,
		fontSize: 15,
		textAlign: 'center'
	},
	aboutTextBold: {
		color: '#FFF',
		fontWeight: 'bold'
	},
	aboutLink: {
		paddingHorizontal: 7,
		paddingVertical: 10
	},
	aboutMetaText: {
		color: '#FFF',
		fontSize: 14,
	},
	aboutMetaTextBold: {
		fontWeight: 'bold',
		color: '#FFF',
		fontSize: 14
	},
	socialIcons: {
		marginTop: 5,
		flex: 1,
		flexDirection: 'row'
	},
	aboutMetaIcon: {
		color: '#bdc3c7',
		marginHorizontal: 10,
		fontSize: 26
	}
})
