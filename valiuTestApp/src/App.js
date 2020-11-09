import React, {useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
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
      <SafeAreaView style={styles.content}>
        <StatusBar barStyle="dark-content" />
        <MainNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {height: '100%'},
});

export default App;
