import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.background
    },
    screenHeader: {
      flex: .25,
      paddingTop: 15,
      marginBottom: 30,
      borderBottomWidth: 0.5,
      borderBottomColor: '#FFF',
      paddingBottom: 15,
      alignItems: 'center'
    },
    screenTitle: {
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
      flex: 1,
      alignItems: 'center',
      color: '#FFF'
    },
  }
}

export default ApplicationStyles
