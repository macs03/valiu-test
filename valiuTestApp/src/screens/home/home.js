import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import app from '../../lib/app';
import styles from './styles';

const Home = ({navigation}) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    app.socket.on('amountTag', (event) => {
      setTags(event);
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.darkText}>Hello Screen</Text>
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
      {tags.map((tag) => (
        <Text>{tag}</Text>
      ))}
    </View>
  );
};

export default Home;
