// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Author from './Author';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../../types';

describe('Author', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Author />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
