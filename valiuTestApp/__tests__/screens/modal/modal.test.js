/**
 * @format
 */

import 'react-native';
import React from 'react';
import Modal from '../../../src/screens/modal/modal';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(<Modal navigation={{}} />);
  expect(tree).toMatchSnapshot();
});

it('calls go back after tap button', () => {
  const spy = {goBack: jest.fn()};
  const tree = renderer.create(<Modal navigation={spy} />);

  const button = findByTestId(tree, 'goBack');

  on(button).simulate(Interactions.PRESS);

  expect(spy.goBack).toHaveBeenCalled();
});
