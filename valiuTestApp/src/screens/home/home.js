import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import app from '../../lib/app';
import Tag from '../../components/tag/tag';
import styles from './styles';
import Animations from './animations';

const Home = ({navigation}) => {
  const [tags, setTags] = useState([]);
  const headerHeight = useRef(new Animated.Value(70)).current;
  const animations = new Animations({headerHeight});

  useEffect(() => {
    app.socket.on('amountTag', (event) => {
      setTags(event);
    });
  });

  const onScroll = (event) => {
    const divisor = Platform.OS === 'android' ? 7 : 8;
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    if (contentOffset.y >= layoutMeasurement.height / divisor) {
      animations.entryStickyAnimation.start();
    } else {
      animations.exitStickyAnimation.start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Text style={styles.darkText}>VALIU TEST APP</Text>
        <TouchableOpacity
          testID="goToModal"
          style={styles.addButton}
          onPress={() => navigation.navigate('Modal')}>
          <Text>+</Text>
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        scrollEventThrottle={16}
        onScroll={onScroll}>
        {tags.map((tag, index) => (
          <Tag
            index={tag.id}
            tag={tag.amount}
            editTag={() => {}}
            deleteTag={() => {}}
            key={index}
            color={tag.color}
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
