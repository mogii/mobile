import React from 'react';
import { Platform, AsyncStorage, StyleSheet, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { AppLoading, Asset, Font, Icon } from 'expo';
import { SignedOut, SignedIn } from "./router";
import { Provider } from 'react-redux';
import * as routeHistoryActions from './services/routeHistory/actions';
import { store, persistor } from './configureStore';
import R from 'ramda';

import AppNavigator from './navigation/AppNavigator';
// sagaMiddleware.run(sagas);

const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
      initialRoute: null,
    };
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
      return (
        <View style={styles.container}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator
                onNavigationStateChange={(prevState, newState, action) => {
                  const prevScreen = getActiveRouteName(prevState);
                  const newScreen = getActiveRouteName(newState);
                  if (newScreen && prevScreen !== newScreen) {
                    if (action.type === 'Navigation/BACK') store.dispatch(routeHistoryActions.pop());
                    else store.dispatch(routeHistoryActions.push(prevScreen))
                  }
                }}
              />
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