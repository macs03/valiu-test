import PropTypes from 'prop-types';
import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './styles';
import app from '../../lib/app';
import {setInputValue} from '../../lib/helper';
import KeyboardView from '../../components/keyboard/keyboardView';

const Modal = ({navigation: {goBack}}) => {
  const [keyboardShowed, setKeyboardShowed] = useState(false);
  let inputRef = useRef(null);
  let keyboardValue = [];
  let amountTagValue = null;

  const sendMessage = () => {
    app.socket.emit('amountTag', amountTagValue);
    goBack();
  };

  const showCustomKeyboard = (flag) => {
    setKeyboardShowed(flag);
  };

  const onNumbers = (value) => {
    keyboardValue.push(value);

    if (setInputValue(keyboardValue) !== null) {
      amountTagValue = setInputValue(keyboardValue);
    } else {
      keyboardValue.pop();
    }

    inputRef.setNativeProps({text: amountTagValue});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.lightText}>Modal Screen</Text>
        <TouchableOpacity
          testID="goBack"
          style={styles.closeButton}
          onPress={() => goBack()}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Add amount'}
          onFocus={showCustomKeyboard}
          ref={(component) => (inputRef = component)}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}>
          <Text style={styles.lightText}>Send Amount</Text>
        </TouchableOpacity>
      </View>
      {keyboardShowed && (
        <KeyboardView title="Custom Keyboard" handlingPad={onNumbers} />
      )}
    </View>
  );
};

Modal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Modal;
