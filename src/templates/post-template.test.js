// @flow strict
import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
import { markdownRemark } from '../../jest/__fixtures__/markdown-remark';
import { pathContext } from '../../jest/__fixtures__/path-context';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import PostTemplate from './post-template';
import type { RenderCallback } from '../types';

describe('PostTemplate', () => {
  const props = {
    data: {
      markdownRemark,
    },
    pathContext: {
      ...pathContext,
    },
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<PostTemplate {...props} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
