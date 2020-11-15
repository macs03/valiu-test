/**
 * Each "interaction" is a series of methods (props on a component) React Native would call
 * when a real user using a real device uses the application. For instance: doing a PRESS
 * on a component is actually calling the onPressIn -> onPressOut -> onPress props
 * in sequence with the proper arguments
 */
export const Interactions = {
  PRESS: ['onPressIn', 'onPressOut', 'onPress'],
  TEXT_INPUT: ['onChangeText', 'onChange'],
  FOCUS_INPUT: ['onFocus'],
  UNFOCUS_INPUT: ['onBlur'],
  SWIPE_RIGHT: [
    'onStartShouldSetResponder',
    'onResponderGrant',
    'onResponderRelease',
    'onHandlerStateChange',
  ],
  SWIPE_LEFT: [
    'onStartShouldSetResponder',
    'onResponderGrant',
    'onResponderRelease',
    'onHandlerStateChange',
  ],
  SWITCH: ['onAsyncPress'],
  SNAP_TO_INDEX: ['onSnapToItem'],
  TAP: ['onHandlerStateChange'],
};

/**
 * This methods returns the arguments for a given "interaction prop", so that the
 * component receives the parameters it's expecting as if an actual user using a real
 * device is interacting with it
 */
const eventFor = (gesture, method, arg) => {
  const mapping = {
    onChangeText: arg,
    onChange: {
      nativeEvent: {
        text: arg,
      },
    },
    onSnapToItem: arg,
    onHandlerStateChange: arg,
    onAsyncPress: arg,
  };

  mapping[Interactions.SWIPE_RIGHT] = {
    onResponderGrant: {
      nativeEvent: {
        pageX: arg,
      },
    },
    onResponderRelease: {
      nativeEvent: {
        pageX: 2 * arg,
      },
    },
    onHandlerStateChange: {
      nativeEvent: {
        state: 4,
        pageX: arg,
      },
    },
  };
  mapping[Interactions.SWIPE_LEFT] = {
    onResponderGrant: {
      nativeEvent: {
        pageX: arg,
      },
    },
    onResponderRelease: {
      nativeEvent: {
        pageX: 2 * arg,
      },
    },
    onHandlerStateChange: {
      nativeEvent: {
        state: 4,
        pageX: arg,
      },
    },
  };
  mapping[Interactions.TAP] = {
    onResponderGrant: {
      nativeEvent: {
        pageX: arg,
      },
    },
    onResponderRelease: {
      nativeEvent: {
        pageX: 2 * arg,
      },
    },
    onHandlerStateChange: {
      nativeEvent: {
        state: 4,
        pageX: arg,
      },
    },
  };

  return (mapping[gesture] || mapping)[method] || mapping[method];
};

/**
 * This methods enables the `on(component).simulate(PRESS)` syntax. it basically creates a
 * simulate method that calls a series of prop functions in sequence, the same way React Native would
 * when a user interaction is recognized
 */
export const on = (component) => {
  if (!component) {
    throw new Error(`Can't simulate gestures on null or undefined`);
  }
  return {
    simulate: (gesture, arg) => {
      gesture
        .filter((method) => component.props[method])
        .forEach((method) => {
          component.props[method](eventFor(gesture, method, arg));
        });
    },
  };
};

/**
 * This methods returns the element for the corresponding testId
 */
export const findByTestId = (tree, testID) => {
  if (tree) {
    return tree.root.findByProps({testID});
  }
};
