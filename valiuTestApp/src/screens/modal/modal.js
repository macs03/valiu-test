import * as React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import app from '../../lib/app';
import styles from './styles';

const Modal = ({navigation: {goBack}}) => {
  let amount = 0;
  const sendMessage = () => {
    amount++;
    app.socket.emit('amountTag', amount);
    goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>Modal Screen</Text>
      <Button title="Send Something" onPress={() => sendMessage()} />
    </View>
  );
};

Modal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Modal;
