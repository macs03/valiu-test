import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import io from 'socket.io-client';

import config from './config';

const App = () => {
  useEffect(() => {
    const server = `${config.server}:${config.port}`;
    const socket = io(server, {
      forceNew: true,
    });
    socket.on('connect', () => console.info('Connection Sucessfull!!'));

    socket.on('badged', (event) => {
      console.log('Message: ', event);
    });

    socket.emit('badged', '20.000');
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
