import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import * as session from '../services/session';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  onPressLogout = () => {
    session.revoke()
    .then(() => {
      this.props.navigation.navigate('Auth');
    })
  };
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <Button title="Log Out" onPress={this.onPressLogout}/>
      </View>
    );
  }
}
