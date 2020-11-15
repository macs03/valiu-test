/**
 * @format
 */

import 'react-native';
import React from 'react';
import Tag from '../../../src/components/tag/tag';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Tag index={0} editTag={() => {}} deleteTag={() => {}} tag={'1,500'} />,
  );
});
