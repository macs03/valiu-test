import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
      <View style={styles.header}>
        <Text style={styles.darkText}>VALIU TEST APP</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Modal')}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
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
