import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
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
import Colors from "../../constants/Colors";
import {Camera, Icon} from "expo";

class ResultConfirmation extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillUnmount() {
    this.props.empty();
  }

  render() {
    let { processing, partnerAdded, image, PERSON, ORGANIZATION, emails, tags, message } = this.props;
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
        <FormLabel>Organization</FormLabel>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <FormInput
            multiline
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput}
            value={ORGANIZATION}
            onChangeText={text => this.props.update({ ORGANIZATION: text })}
          />
          {
            Boolean(ORGANIZATION) && (
              <TouchableOpacity
                style={{ width: 50 }}
                onPress={() => this.props.update({ ORGANIZATION: '' })}>
                <Text style={{ fontSize: 12, color: '#2e78b7' }}>x Clear</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <FormLabel>Person:</FormLabel>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <FormInput
            multiline
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput}
            value={PERSON}
            onChangeText={text => this.props.update({ PERSON: text })}
          />
          {
            Boolean(PERSON) && (
              <TouchableOpacity
                style={{ width: 50 }}
                onPress={() => this.props.update({ PERSON: '' })}>
                <Text style={{ fontSize: 12, color: '#2e78b7' }}>x Clear</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <FormLabel>Email:</FormLabel>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <FormInput
            multiline
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput}
            value={emails[0]}
            onChangeText={text => this.props.update({ emails: [text] })}
          />
          {
            Boolean(emails[0]) && (
              <TouchableOpacity
                style={{ width: 50 }}
                onPress={() => this.props.update({ emails: [] })}>
                <Text style={{ fontSize: 12, color: '#2e78b7' }}>x Clear</Text>
              </TouchableOpacity>
            )
          }
        </View>
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
      </KeyboardAwareScrollView>
    );
  }

}
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
const mapStateToProps = state => {
  return state.data.addPartner;
};
export default connect(mapStateToProps, {
  update: updateAction,
  empty: emptyAction,
  addPartner: addPartnerAction,
})(ResultConfirmation);
