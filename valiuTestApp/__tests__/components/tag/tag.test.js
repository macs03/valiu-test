/**
 * @format
 */

import 'react-native';
import React from 'react';
import enzyme, {shallow, mount} from 'enzyme';
import Tag from '../../../src/components/tag/tag';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});

it('renders correctly', () => {
  const tree = renderer.create(
    <Tag index={0} editTag={() => {}} deleteTag={() => {}} tag={'1,500'} />,
  );
  expect(tree).toMatchSnapshot();
});

it('calls on edit button', () => {
  const spy = jest.fn();
  const wrapper = mount(
    <Tag index={0} editTag={spy} deleteTag={() => {}} tag={'1,500'} />,
  );
  wrapper.find('edit').first().props().onPress();
  expect(spy).toHaveBeenCalled();
});
