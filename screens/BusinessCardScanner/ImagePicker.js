import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import { scanBusinessCard } from '../../data/rootApi';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    hasCameraRollPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: status === 'granted' });
  }
  render() {
    let { image, hasCameraRollPermission } = this.state;
    if (hasCameraRollPermission === null) {
      return <View />;
    } else if (hasCameraRollPermission === false) {
      return <Text>No access to camera roll</Text>;
    } else {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
          {image &&
          <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
        </View>
      );
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [4, 3],
      base64: true,
    });
    let newres = await scanBusinessCard({ image: result.base64 });
    console.log(newres);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}