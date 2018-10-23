import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import { WebBrowser } from 'expo';


import { MonoText } from '../components/StyledText';
import TCLogo from '../assets/images/tourconnect-logo-for-white-bg';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TCLogo/>
          </View>

          <View style={styles.getStartedContainer}>
            {this._showIntro()}

            {/*<Text style={styles.getStartedText}>Get started by opening</Text>*/}

            {/*<View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>*/}
              {/*<MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>*/}
            {/*</View>*/}

            <Text style={styles.getStartedText}>
              TourConnect has made over 25,000 connections between travel trade companies while providing a suite of tools that make doing business with industry partners easier and more efficient.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpTextPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Having questions? We can help!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Tap here to scan a business card and connect with your partner</Text>
          <View style={{ marginTop: 15 }}>
            <Icon.Ionicons
              name={`${Platform === 'ios' ? 'ios' : 'md'}-arrow-round-down`}
              color={'rgba(0, 0, 0, 0.54)'}
              size={40}
            />
          </View>
          {/*<View style={[styles.codeHighlightContainer, styles.navigationFilename]}>*/}
            {/*<MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>*/}
          {/*</View>*/}
        </View>
      </View>
    );
  }

  _showIntro() {
    const learnMoreButton = (
      <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.introText}>
        TourConnect is an online partner management tool specifically designed for the travel and tourism industry. {learnMoreButton}
      </Text>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://www.tourconnect.com/');
  };

  _handleHelpTextPress = () => {
    WebBrowser.openBrowserAsync(
      'http://support.tourconnect.com/'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  introText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
