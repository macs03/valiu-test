import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Header} from 'react-native/Libraries/NewAppScreen';

import app from './lib/app';

const App = () => {
  let amount = 0;
  useEffect(() => {
    app.boot().then(() => {
      SplashScreen.hide();
    });
    // socket.on('badged', (event) => {
    //   console.log('Message: ', event);
    // });
  }, []);

  const sendMessage = () => {
    amount++;
    app.socket.emit('badged', amount);
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
