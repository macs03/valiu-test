import {Animated} from 'react-native';

export default class Animations {
  constructor(component) {
    Object.assign(this, {...component});
    this.bootAnimations();
  }

  bootAnimations() {
    const {headerHeight} = this;

    this.entryStickyAnimation = Animated.timing(headerHeight, {
      toValue: 40,
      duration: 600,
      useNativeDriver: false,
    });
    this.exitStickyAnimation = Animated.timing(headerHeight, {
      toValue: 70,
      duration: 600,
      useNativeDriver: false,
    });
  }
}
