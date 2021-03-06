import React, {useRef} from 'react';

import {View, Text, Animated, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Animations from './animations';

const Tag = ({editTag, deleteTag, tag, index, color}) => {
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
    <View style={styles.container} key={index}>
      <View style={[styles.tag, {backgroundColor: color}]}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
      <TouchableOpacity
        testID="showButtons"
        style={styles.moreButton}
        onPress={toggleButtons}>
        <Text>...</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.buttonsContainer,
          {transform: [{translateX: buttonsPosition}]},
        ]}>
        <TouchableOpacity
          testID="edit"
          style={styles.editButton}
          onPress={() => editTag(index)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="delete"
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
  color: PropTypes.string.isRequired,
};

export default Tag;
