import * as React from 'react';
import {View, Text, Button} from 'react-native';
import app from '../../lib/app';
import styles from './styles';

const Modal = ({navigation: {goBack}}) => {
  let amount = 0;
  const sendMessage = () => {
    amount++;
    app.socket.emit('badged', amount);
    goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>Modal Screen</Text>
      <Button title="Send Something" onPress={() => sendMessage()} />
    </View>
  );
};

export default Modal;
