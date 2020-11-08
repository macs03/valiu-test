import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import app from '../../lib/app';
import styles from './styles';

const Home = ({navigation}) => {
  const [badges, setBadges] = useState([]);
  useEffect(() => {
    app.socket.on('badged', (event) => {
      console.log('Message: ', event);
      setBadges(event);
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.darkText}>Hello Screen</Text>
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
      {badges.map((badge) => (
        <Text>{badge}</Text>
      ))}
    </View>
  );
};

export default Home;
