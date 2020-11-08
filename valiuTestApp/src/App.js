import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import io from 'socket.io-client';

import config from './config';

const App = () => {
  let socket;
  let amount = 0;
  useEffect(() => {
    const server = `${config.server}:${config.port}`;
    // for test
    // eslint-disable-next-line react-hooks/exhaustive-deps
    socket = io(server, {
      forceNew: true,
    });
    socket.on('connect', () => console.info('Connection Sucessfull!!'));

    socket.on('badged', (event) => {
      console.log('Message: ', event);
    });
  });

  const sendMessage = () => {
    amount++;
    socket.emit('badged', amount);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <Button title="Press" onPress={sendMessage} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
