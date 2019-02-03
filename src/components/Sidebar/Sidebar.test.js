import React from 'react';
import renderer from 'react-test-renderer';
import { PureSidebar as Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const props = {
      data: {
        site: {
          siteMetadata: {
            author: {
              name: 'name',
              photo: '/photo.jpg',
              bio: 'bio',
              contacts: {
                email: '#',
                twitter: '#',
                vkontakte: '#',
                github: '#',
                rss: '#',
                telegram: '#',
                facebook: '#',
              }
            },
            copyright: 'copyright',
            menu: [
              {
                label: 'Item 0',
                path: '/#0/'
              },
              {
                label: 'Item 1',
                path: '/#1/'
              }
            ]
          }
        }
      }
    };

    const tree = renderer.create(<Sidebar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
