// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Comments from './Comments';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../../types';

describe('Comments', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  const props = {
    postTitle: 'test',
    postSlug: '/test'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
