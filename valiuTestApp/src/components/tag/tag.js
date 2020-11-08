import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../themes/colors';
import ramdom from '../../lib/helper';
import styles from './styles';

const Tag = ({editTag, deleteTag, tag, index}) => (
  <View style={styles.container}>
    <View
      style={[styles.tag, {backgroundColor: colors[ramdom(11)]}]}
      onPress={() => () => {}}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
    <View style={styles.moreButton} onPress={() => () => {}}>
      <Text>...</Text>
    </View>
    <View style={styles.editButton} onPress={() => editTag(index)}>
      <Text>Edit</Text>
    </View>
    <View style={styles.deleteButton} onPress={() => deleteTag(index)}>
      <Text>Delete</Text>
    </View>
  </View>
);

Tag.propTypes = {
  editTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tag;
