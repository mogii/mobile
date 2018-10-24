import React from 'react';
import { Text, View, TouchableOpacity, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import {Camera, Permissions, Icon, ImagePicker} from 'expo';
import { connect } from 'react-redux';
import R from 'ramda';
import {
  update as updateAction,
  empty as emptyAction,
  processWithOCRNLP as processWithOCRNLPAction
} from '../../data/addPartner/actions';

class CameraScan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      hasCameraRollPermission: null,
      type: Camera.Constants.Type.back,
    };
  }

  async componentWillMount() {
    if (this.props.user.plan !== 'connected' && this.props.user.plan !== 'unlimited') {
      Alert.alert(
        'Sorry',
        'Please upgrade to use this premium feature. If you just upgraded, please try log out and log back in',
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
        ],
        { cancelable: false }
      )
    } else {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    }
  }

  snapAndScan = async () => {
    if (this.camera) {
      this.props.navigation.navigate('ResultConfirmation');
      let photo = await this.camera.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      this.props.processWithOCRNLP(photo);
    }
  };

  _pickImage = async () => {
    //
    // this.props.navigation.navigate('ResultConfirmation');
    // this.props.processWithOCRNLP({});

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await this.setState({ hasCameraRollPermission: status === 'granted' });
    if (this.state.hasCameraRollPermission) {
      let image = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 0.5,
        aspect: [4, 3],
        base64: true,
      });
      if (!image.cancelled) {
        this.props.navigation.navigate('ResultConfirmation');
        this.props.processWithOCRNLP(image);
      }
    }
  };

  render() {
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar
            barStyle="light-content"
          />
          <Camera
            style={{ flex: 1 }}
            type={type}
            ref={ref => this.camera = ref}
            onCameraReady={this.scan}
          >
            <View style={styles.headerContainer}>
              <Text style={styles.titleText}>Scanner</Text>
            </View>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Icon.Ionicons
                name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-arrow-back`}
                color={'#fff'}
                size={40}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-reverse-camera' : 'md-reverse-camera'} size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.snapAndScan}>
                <Icon.Ionicons name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-radio-button-on`} size={80} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  position: 'relative',
                  top: -8,
                }}
                onPress={this._pickImage}>
                <Icon.Ionicons name="md-photos" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 64,
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
  },
  backBtn: {
    position: 'relative',
    top: 18,
    left: 12,
    flex: 1,
    width: 40,
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'relative',
    top: 24,
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => {
  return {
    prevScreen: R.last(state.services.routeHistory.items),
    user: state.services.session.user,
  };
};
export default connect(mapStateToProps, {
  update: updateAction,
  empty: emptyAction,
  processWithOCRNLP: processWithOCRNLPAction,
})(CameraScan);

