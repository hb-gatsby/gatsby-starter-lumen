'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  title: 'Blog by John Doe',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  gitalkConf: {
    clientID: 'GITHUB_CLIENT_ID',
    clientSecret: 'GITHUB_CLIENT_SECRET',
    repo: 'GITHUB_REPO',
    admin: ['GITHUB_REPO_OWNER_AND_COLLABORATORS'],
    owner: 'GITHUB_REPO_OWNER'
  },
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'John Doe',
    photo: '/photo.jpg',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: '#',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '#',
      vkontakte: '#'
    }
  }
};
