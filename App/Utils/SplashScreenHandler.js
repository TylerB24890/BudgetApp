import SplashScreen from 'react-native-smart-splash-screen'

let SplashScreenHandler = {
  closeSplashScreen: function () {
    // Close the splash screen
		SplashScreen.close({
			animationType: SplashScreen.animationType.scale,
			duration: 850,
			delay: 500
		})
  }
}

module.exports = SplashScreenHandler