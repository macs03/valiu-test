import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import app from './lib/app';
import MainNavigator from './navigation/mainNavigator';
import Splash from './screens/splash/splash';

const App = () => {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    app.boot().then(() => {
      SplashScreen.hide();
      setIsBooting(false);
    });
  }, []);

  if (isBooting) {
    return <Splash />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </>
  );
};

export default App;
