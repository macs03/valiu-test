import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import app from '../../lib/app';
import styles from './styles';
import KeyboardView from '../../components/keyboard/keyboardView';

const Modal = ({navigation: {goBack}}) => {
  const [keyboardShowed, setKeyboardShowed] = useState(false);
  let amount = 0;

  const sendMessage = () => {
    amount++;
    app.socket.emit('amountTag', amount);
    goBack();
  };

  const showCustomKeyboard = (flag) => {
    setKeyboardShowed(flag);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.lightText}>Modal Screen</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => goBack()}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder={'Add amount'} onFocus={showCustomKeyboard} />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}>
          <Text style={styles.lightText}>Send Amount</Text>
        </TouchableOpacity>
      </View>
      {keyboardShowed && <KeyboardView title="Custom Keyboard" />}
    </View>
  );
};

Modal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Modal;
