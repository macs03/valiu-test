import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const KeyboardView = ({title}) => {
  const pad = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];

  return (
    <View style={styles.container}>
      <Text style={styles.darkText}>{title}</Text>
      <View style={styles.pad}>
        {pad.map((item) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

KeyboardView.prototype = {
  title: PropTypes.string.isRequire,
};

export default KeyboardView;
