import React, {useRef} from 'react';

import {View, Text, Animated, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../themes/colors';
import ramdom from '../../lib/helper';
import styles from './styles';
import Animations from './animations';

const Tag = ({editTag, deleteTag, tag, index}) => {
  let showButton = false;

  const buttonsPosition = useRef(new Animated.Value(1700)).current;
  const animations = new Animations({buttonsPosition});

  const toggleButtons = () => {
    if (showButton) {
      animations.hideButtonPositionAnimation.start(() => {
        showButton = false;
      });
    } else {
      animations.buttonPositionAnimation.start(() => {
        showButton = true;
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.tag, {backgroundColor: colors[ramdom(11)]}]}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton} onPress={toggleButtons}>
        <Text>...</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.buttonsContainer,
          {transform: [{translateX: buttonsPosition}]},
        ]}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => editTag(index)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTag(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

Tag.propTypes = {
  editTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tag;
