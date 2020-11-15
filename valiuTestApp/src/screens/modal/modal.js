import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
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
      <TextInput placeholder={'Add amount'} onFocus={showCustomKeyboard} />
      <Text style={styles.darkText}>Modal Screen</Text>
      <Button title="Send Amount" onPress={() => sendMessage()} />
      {keyboardShowed && <KeyboardView title="Custom Keyboard" />}
    </View>
  );
};

Modal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Modal;
