/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../../../src/screens/home/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(<Home navigation={{}} />);
  expect(tree).toMatchSnapshot();
});

it('calls go to modal after tap button', () => {
  const spy = {navigate: jest.fn()};
  const tree = renderer.create(<Home navigation={spy} />);

  const button = findByTestId(tree, 'goToModal');

  on(button).simulate(Interactions.PRESS);

  expect(spy.navigate).toHaveBeenCalledWith('Modal');
});
