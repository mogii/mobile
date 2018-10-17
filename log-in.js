import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tourconnect}>TourConnect</Text>
        <FormLabel>Email</FormLabel>
        <FormInput placeholder="Please enter your email here..."/>
        <FormLabel>Password</FormLabel>
        <FormInput placeholder="Please enter your password here..."/>
        <Button
          raised
          buttonStyle={styles.button}
          textStyle={{ textAlign: 'center' }}
          title={`Log In`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 180,
  },
  tourconnect: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  button: {
    backgroundColor: '#00bcd4',
    borderRadius: 10,
    marginTop: 40,
  }
});