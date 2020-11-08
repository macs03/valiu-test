import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import app from './lib/app';
import MainNavigator from './navigation/mainNavigator';

const App = () => {
  // let amount = 0;
  useEffect(() => {
    app.boot().then(() => {
      SplashScreen.hide();
    });
    // socket.on('badged', (event) => {
    //   console.log('Message: ', event);
    // });
  }, []);

  // const sendMessage = () => {
  //   amount++;
  //   app.socket.emit('badged', amount);
  // };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </>
  );
};

export default App;
