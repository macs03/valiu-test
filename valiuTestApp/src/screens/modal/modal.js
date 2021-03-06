import PropTypes from 'prop-types';
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './styles';
import app from '../../lib/app';
import {ramdom} from '../../lib/helper';
import colors from '../../themes/colors';
import {setInputValue} from '../../lib/helper';
import KeyboardView from '../../components/keyboard/keyboardView';

const Modal = ({navigation: {goBack}, route: {params}}) => {
  const [keyboardShowed, setKeyboardShowed] = useState(false);
  let inputRef = useRef(null);
  let keyboardValue = [];
  let amountTagValue = null;

  useEffect(() => {
    if (params) {
      inputRef.setNativeProps({text: params.amount});
    }
  });

  const sendMessage = () => {
    if (params) {
      app.socket.emit('editAmountTag', {
        id: params.id,
        amount: amountTagValue === null ? params.amount : amountTagValue,
        color: params.color,
      });
    } else {
      app.socket.emit('amountTag', {
        amount: amountTagValue === null ? '0' : amountTagValue,
        color: colors[ramdom(11)],
      });
    }
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
        <TouchableOpacity
          style={styles.inputTouchable}
          onPress={showCustomKeyboard}>
          <View />
        </TouchableOpacity>
        <TextInput
          placeholder={'Add amount'}
          style={styles.textInput}
          ref={(component) => (inputRef = component)}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}>
          <Text style={styles.lightText}>Send Amount</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => inputRef.clear()}>
          <Text style={styles.lightText}>Clear</Text>
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
