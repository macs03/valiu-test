import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import app from '../../lib/app';
import Tag from '../../components/tag/tag';
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
      <Text style={styles.darkText}>VALIU TEST APP</Text>
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {tags.map((tag, index) => (
          <Tag
            tag={tag}
            index={index}
            editTag={() => {}}
            deleteTag={() => {}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
