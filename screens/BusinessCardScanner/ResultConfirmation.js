import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  StatusBar,
  Modal,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import {
  update as updateAction,
  empty as emptyAction,
  addPartner as addPartnerAction,
} from '../../data/addPartner/actions';
import R from 'ramda';
import { Icon } from "expo";

class ResultConfirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      typeForPicker: {},
      pickerModalVisable: false,
    };
  }

  componentWillUnmount() {
    this.props.empty();
  }
  closePickerModal = () => {
    this.setState({
      pickerModalVisable: false,
      typeForPicker: {}
    })
  };
  openPickerModal = (type) => {
    this.setState({ pickerModalVisable: true, typeForPicker: type });
  };
  render() {
    let { processing, partnerAdded, image, PERSON, ORGANIZATION, allTextBlobs, emails, tags, message } = this.props;
    const fields = [
      {
        label: 'Company Name',
        key: 'ORGANIZATION',
      },
      {
        label: 'Contact Name',
        key: 'PERSON',
      },
      {
        label: 'Email',
        key: 'email',
      },
      {
        label: 'Phone',
        key: 'phone',
      }
    ];
    if (partnerAdded) {
      return (
        <View style={styles.container}>
          <Text
            style={{
              width: '80%',
              fontSize: 16,
              flex: 1,
              paddingTop: 140,
              alignSelf: 'center',
              color: 'rgba(0, 0, 0, 0.54)',
            }}
          >
            We have sent {PERSON} your message and added {ORGANIZATION} as your partner!
          </Text>
          <Button
            buttonStyle={styles.scanAnotherBtn}
            title="Scan another card"
            onPress={() => this.props.navigation.navigate('Scan')}
          />
        </View>
      );
    }
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        {image && image.uri && (
          <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center',
            padding: 4,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }} onPress={() => this.setState({ showBigImage: !this.state.showBigImage })}>
            <Image
              source={{uri: image.uri}}
              style={{ width: '100%', height: this.state.showBigImage ? 250 : 100, flex: 1 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {
          processing && (<ActivityIndicator size="large" color="#00bcd4" animating={processing}/>)
        }
        {
          fields.map(({ label, key }) => {
            return (
              <View key={key}>
                <FormLabel>{label}: </FormLabel>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <FormInput
                    multiline
                    containerStyle={styles.formInputContainer}
                    inputStyle={styles.formInput}
                    value={this.props[key]}
                    onChangeText={text => this.props.update({ [key]: text })}
                  />
                  <TouchableOpacity
                    style={{ width: 30 }}
                    onPress={() => this.openPickerModal({ label, key })}
                  >
                    <Icon.Ionicons name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-arrow-down`} size={25} color={'#2e78b7'}/>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
        <FormLabel>Tags:</FormLabel>
        {
          tags && tags.map((tag, i) => {
            return (
              <View
                key={i}
                style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 8 }}
              >
                <FormInput
                  multiline
                  containerStyle={styles.formInputContainer}
                  inputStyle={styles.formInput}
                  value={tag}
                  onChangeText={text => this.props.update({ tags: R.set(R.lensIndex(i), text, tags) })}
                />
                <TouchableOpacity
                  style={{ width: 60 }}
                  onPress={() => this.props.update({ tags: R.remove(i, 1, tags) })}>
                  <Text style={{ fontSize: 12, color: '#2e78b7' }}>- Remove</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
        <Button
          small
          buttonStyle={styles.addTagButton}
          textStyle={{ color: '#2e78b7' }}
          title={tags && tags.length ? '+ Add another tag' : '+ Add a tag'}
          onPress={() => this.props.update({ tags: tags ? R.append('', tags) : [''] })}
        />
        <FormLabel>Message:</FormLabel>
        <View
          style={{ flexDirection: 'row', alignItems: 'flex-end' }}
        >
          <FormInput
            multiline
            containerStyle={styles.messageInputContainer}
            inputStyle={styles.messageInput}
            value={message}
            onChangeText={text => this.props.update({ message: text })}
          />
          {
            Boolean(message) && (
              <TouchableOpacity
                style={{ width: 50  }}
                onPress={() => this.props.update({ message: '' })}>
                <Text style={{ fontSize: 12, color: '#2e78b7' }}>x Clear</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <Button
          raised
          disabled={!(emails && emails[0])}
          buttonStyle={styles.sendMsgButton}
          textStyle={{ textAlign: 'center' }}
          title="Send Message"
          onPress={this.props.addPartner}
        />

        <Modal
          visible={this.state.pickerModalVisable}
          transparent={true}
          animationType="fade"
          onRequestClose={this.closePickerModal}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              marginLeft: '10%'
            }}
          >
            <View style={{ height: 400, borderRadius: 4, width: '100%', backgroundColor: '#00bcd4', padding: 12 }}>
              <Text style={{ color: '#fafafa', fontSize: 16, marginBottom: 20 }}>Select value for {this.state.typeForPicker.label}</Text>
              <ScrollView>
                {
                  allTextBlobs.map((text, i) => (
                    <TouchableHighlight
                      key={i}
                      style={{ borderBottomColor: '#fff', borderStyle: 'solid', borderBottomWidth: 1, flex: 1, padding: 12 }}
                      onPress={() => {
                        this.props.update({ [this.state.typeForPicker.key]: text });
                        this.closePickerModal();
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: 14 }}>{text}</Text>
                    </TouchableHighlight>
                  ))
                }
              </ScrollView>
              <Button
                small
                buttonStyle={{ backgroundColor: 'transparent', alignSelf: 'flex-end', borderRadius: 3, ...border, borderColor: 'white', padding: 4 }}
                textStyle={{ color: '#fff' }}
                title={'DISMISS'}
                onPress={this.closePickerModal}
              />
            </View>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }

}
const border = {
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'red',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  form: {
    paddingBottom: 4,
  },
  formInputContainer: {
    flex: 1,
  },
  formInput: { width: '100%' },
  messageInputContainer: {
    flex: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 4,
  },
  messageInput: {
    flex: 1,
    width: '100%',
    padding: 6,
  },
  addTagButton: {
    flex: 0.6,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    padding: 4,
  },
  sendMsgButton: {
    backgroundColor: '#2e78b7',
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 24,
    width: '50%',
    alignSelf: 'center',
  },
  scanAnotherBtn: {
    backgroundColor: '#00bcd4',
    borderRadius: 10,
    marginBottom: 48,
    width: '50%',
    alignSelf: 'center',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});
const mapStateToProps = state => {
  return state.data.addPartner;
};
export default connect(mapStateToProps, {
  update: updateAction,
  empty: emptyAction,
  addPartner: addPartnerAction,
})(ResultConfirmation);
