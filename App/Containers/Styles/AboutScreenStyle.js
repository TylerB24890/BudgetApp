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
		color: '#333',
		marginBottom: 15,
		fontSize: 15,
		textAlign: 'center'
	},
	aboutTextBold: {
		color: '#333',
		fontWeight: 'bold'
	},
	aboutLink: {
		paddingHorizontal: 7,
		paddingVertical: 10
	},
	aboutMetaText: {
		color: '#333',
		fontSize: 14,
	},
	aboutMetaTextBold: {
		fontWeight: 'bold',
		color: '#333',
		fontSize: 14
	},
	socialIcons: {
		marginTop: 5,
		flex: 1,
		flexDirection: 'row'
	},
	aboutMetaIcon: {
		color: '#e74c3c',
		marginHorizontal: 10,
		fontSize: 26
	}
})
