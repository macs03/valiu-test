/**
 * @format
 */

import 'react-native';
import React from 'react';
import Tag from '../../../src/components/tag/tag';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {on, Interactions, findByTestId} from '../../../src/lib/user-simulator';

/* Mock random */
global.Math.random = () => 0;

it('renders correctly', () => {
  const tree = renderer.create(
    <Tag index={0} editTag={() => {}} deleteTag={() => {}} tag={'1,500'} />,
  );
  expect(tree).toMatchSnapshot();
});

it('calls on edit button', () => {
  const spy = jest.fn();
  const tree = renderer.create(
    <Tag index={0} editTag={spy} deleteTag={() => {}} tag={'1,500'} />,
  );
  const show = findByTestId(tree, 'showButtons');
  const button = findByTestId(tree, 'edit');

  on(show).simulate(Interactions.PRESS);
  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});

it('calls on delete button', () => {
  const spy = jest.fn();
  const tree = renderer.create(
    <Tag index={0} deleteTag={spy} editTag={() => {}} tag={'1,500'} />,
  );
  const show = findByTestId(tree, 'showButtons');
  const button = findByTestId(tree, 'delete');

  on(show).simulate(Interactions.PRESS);
  on(button).simulate(Interactions.PRESS);

  expect(spy).toHaveBeenCalled();
});
