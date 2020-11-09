import {Animated} from 'react-native';

export default class Animations {
  constructor(component) {
    Object.assign(this, {...component});
    this.bootAnimations();
  }

  bootAnimations() {
    const {buttonsPosition} = this;

    this.buttonPositionAnimation = Animated.timing(buttonsPosition, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    });
    this.hideButtonPositionAnimation = Animated.timing(buttonsPosition, {
      toValue: 1700,
      duration: 600,
      useNativeDriver: true,
    });
  }
}
