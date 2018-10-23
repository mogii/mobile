import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements'
import TCLogo from '../assets/images/tourconnect-logo';

export default class InitialScreen extends React.Component {

  onPressLogin = () => {
    this.props.navigation.navigate("LogIn");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tourconnect}>
          <TCLogo/>
        </View>
        <View style={styles.buttons}>
          <Button
            raised
            buttonStyle={styles.signUpButton}
            textStyle={{ textAlign: 'center', color: '#fff' }}
            title={`Sign Up`}
            onPress={this.onPressLogin}
          />
          <Button
            raised
            buttonStyle={styles.loginButton}
            textStyle={{ textAlign: 'center', color: '#00bcd4' }}
            title={`Log In`}
            onPress={this.onPressLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bcd4',
  },
  tourconnect: {
    marginTop: 40,
    alignItems: 'center',
    flex: 1,
    height: 70,
  },
  buttons: {
    flex: 4,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 30,
    marginTop: 200,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 30,
  }
});