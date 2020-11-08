import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Tag = ({editTag, deleteTag, tag, index}) => (
  <View style={styles.container}>
    <Text style={styles.lightText}>{tag}</Text>
    <Button title="Edit" onPress={() => editTag(index)} />
    <Button title="Delete" onPress={() => deleteTag(index)} />
  </View>
);

Tag.propTypes = {
  editTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tag;
