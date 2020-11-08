import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Tag = ({editTag, deleteTag, tag, index}) => (
  <View style={styles.container}>
    <Text style={styles.lightText}>{tag}</Text>
    <Button title="Edit" onPress={() => editTag(index)} />
    <Button title="Delete" onPress={() => deleteTag(index)} />
  </View>
);

export default Tag;
