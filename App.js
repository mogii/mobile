import React from 'react';
import { Platform, AsyncStorage, StyleSheet, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { AppLoading, Asset, Font, Icon } from 'expo';
import { SignedOut, SignedIn } from "./router";
import { Provider } from 'react-redux';
import * as session from './services/session';
import { store, persistor } from './configureStore';
import R from 'ramda';

import AppNavigator from './navigation/AppNavigator';
// sagaMiddleware.run(sagas);

const routeStack = [
  { name: 'SignedOut', component: SignedOut },
  { name: 'SignedIn', component: SignedIn },
];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
      initialRoute: null,
    };
  }

  async componentDidMount() {
    // Waits for the redux store to be populated with the previously saved state,
    // then it will try to auto-login the user.
    const unsubscribe = store.subscribe(() => {
      if (store.getState().services.persist.isHydrated) {
        unsubscribe();
        this.autoLogin();
      }
    });
  }
  autoLogin = () => {
    const _this = this;
    session.refreshToken().then(() => {
      _this.setState({ initialRoute: routeStack[1] });
    }).catch(() => {
      _this.setState({ initialRoute: routeStack[0] });
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      console.log({ bbbb: R.path(['services', 'session', 'tokens'], store.getState()) });
      return (
        <View style={styles.container}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator/>
            </PersistGate>
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App;