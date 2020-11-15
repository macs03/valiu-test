/**
 * @format
 */

import 'react-native';
import React from 'react';
import KeyboardView from '../../../src/components/keyboard/keyboardView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

it('renders correctly', () => {
  const tree = renderer.create(
    <KeyboardView handlingPad={() => {}} title={'Test'} />,
  );
  expect(tree).toMatchSnapshot();
});

it('calls on handlingPad button', () => {
  const spy = jest.fn();
  const tree = renderer.create(
    <KeyboardView handlingPad={spy} title={'Test'} />,
  );

  const button = findByTestId(tree, '3');

  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});
