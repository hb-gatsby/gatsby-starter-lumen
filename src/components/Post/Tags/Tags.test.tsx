import React from 'react';
import renderer from 'react-test-renderer';
import Tags from './Tags';

describe('Tags', () => {
  it('renders correctly', () => {
    const props = {
      tags: [
        'test_0',
        'test_1'
      ],
      tagSlugs: [
        '/test_0',
        '/test_1'
      ]
    };

    const tree = renderer.create(<Tags {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
