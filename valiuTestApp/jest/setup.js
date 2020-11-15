/* eslint-disable */
import * as ReactNative from 'react-native';

jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      // Redefine an export, like a component
      Linking: {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
      },
      Animated: {
        ...ReactNative.Animated,
        timing: (value, config) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        spring: (value, config) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        sequence: (animations) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        parallel: (animations) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        stagger: (animations) => ({
          start: (callback) => callback && callback({finished: true}),
          reset: (callback) => callback && callback(),
          stop: (callback) => callback && callback(),
        }),
        loop: (animation) => ({
          start: jest.fn(),
        }),
      },
    },
    ReactNative,
  );
});

jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  return {
    FlingGestureHandler: (props) =>
      React.createElement('FlingGestureHandler', props, props.children),
    TapGestureHandler: (props) =>
      React.createElement('TapGestureHandler', props, props.children),
    LongPressGestureHandler: (props) =>
      React.createElement('LongPressGestureHandler', props, props.children),
    Swipeable: (props) =>
      React.createElement('Swipeable', props, props.children),
    RectButton: (props) =>
      React.createElement('RectButton', props, props.children),
    Directions: {
      RIGHT: 1,
      LEFT: 2,
    },
    State: {
      ACTIVE: 4,
    },
    openRight: () => {},
  };
});

jest.mock('../src/lib/app');

// jest.mock('../src/lib/native-modules', () => ({}));

jest.mock('@react-navigation/stack', () => {
  return {createStackNavigator: () => {}};
});
