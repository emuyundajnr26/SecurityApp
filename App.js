import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { Button, ButtonGroup, } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header} />
      <Image source={require('./assets/applogo.jpg')} style={styles.logo} />
      <Text style={styles.headertext}>Wel-Safe </Text>
    <Text style={styles.textstyle}>
    welcome to [Application name]. to sign up & register on our platform click the button below. we hope you enjoy your stay.
    </Text>
    <View style={styles.button}>
      <Button title='Get Started' />
    </View>
    <Text style={styles.textstyle}>
     forgot password?
    </Text>
    <Text style={styles.footerText}>
    Terms & conditions apply
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    position: 'relative',
    padding: 20,
    flex: 0,
    marginBottom:10,
    marginTop: 10,
  },

  headertext: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 2.5,
  },

  button: {
    position: 'relative',
    padding: 20,
    flex: 0,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 2,
  },

  textstyle: {
    position: 'relative',
   fontSize: 15,
   marginTop: 20,
   marginBottom: 25,
   marginLeft: 0,
   marginRight: 0,
   color: 'green',

  },

  footerText: {
    position: 'relative',
    fontSize: 12,
    letterSpacing: 1,
  },

  logo: {
    position: 'relative',
    width: 100,
    height: 60,
    paddingBottom: 50,
    paddingTop: 50,
    justifyContent: 'center',
    marginBottom: 20,
  }
});
// Use next.js page for the mobile app
export { default } from './pages'
