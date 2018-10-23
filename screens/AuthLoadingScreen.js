import React from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import R from 'ramda';
import TCLogo from '../assets/images/tourconnect-logo';
import * as session from '../services/session';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    // then it will try to auto-login the user.
    this.autoLogin();
  }
  autoLogin = () => {
    const _this = this;
    session.refreshToken().then(() => {
      _this.props.navigation.navigate('Main');
    }).catch(() => {
      _this.props.navigation.navigate('Auth');
    });
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <View style={styles.logo}>
          <TCLogo/>
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
  logo: {
    marginTop: 200,
    paddingLeft: 20,
  },
});
export default connect(state => {
  return {
    accessTokenExpiredAt: R.pathOr('', ['services', 'session', 'tokens', 'access', 'expiresAt'], state),
    accessToken: R.pathOr('', ['services', 'session', 'tokens', 'access', 'value'], state),
  }
})(AuthLoadingScreen);
