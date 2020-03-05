// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Meta from './Meta';

describe('Meta', () => {
  it('renders correctly', () => {
    const props = {
      date: '2016-09-01'
    };

    const tree = renderer.create(<Meta {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
