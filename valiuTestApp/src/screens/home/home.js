import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import app from '../../lib/app';
import styles from './styles';

const Home = ({navigation}) => {
  useEffect(() => {
    app.socket.on('badged', (event) => {
      console.log('Message: ', event);
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.darkText}>Hello Screen</Text>
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
    </View>
  );
};

export default Home;
