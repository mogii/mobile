import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import * as session from '../services/session';
import * as api from '../services/api';
import R from 'ramda';
import TCLogoGlobe from '../assets/images/tourconnect-logo-globe';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.initialState = {
      isLoading: false,
      error: null,
      email: 'moliexx@live.cn',
      password: '!QAZ2wsx',
    };
    this.state = this.initialState;
  }

  onPressLogin = () => {
    this.setState({
      isLoading: true,
      error: '',
    });
    dismissKeyboard();

    session.authenticate(this.state.email, this.state.password)
    .then(() => {
      this.setState(this.initialState);
      this.props.navigation.navigate('Main');
    })
    .catch((exception) => {
      // Displays only the first error message
      const error = api.exceptionExtractError(exception);
      this.setState({
        isLoading: false,
        ...(error ? { error } : {}),
      });

      if (!error) {
        throw exception;
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tourconnect}>
          <TCLogoGlobe/>
        </View>
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          raised
          buttonStyle={styles.button}
          textStyle={{ textAlign: 'center' }}
          title={`Log In`}
          onPress={this.onPressLogin}
        />
      </View>
    );
  }
}
export default connect(state => {
  return (state || {}).services || {};
})(Login);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tourconnect: {
    alignItems: 'center',
    paddingLeft: 50,
    marginTop: 100,
  },
  button: {
    backgroundColor: '#00bcd4',
    borderRadius: 10,
    marginTop: 40,
  }
});