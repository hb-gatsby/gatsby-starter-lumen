'use strict';

module.exports = {
  pathContext: {
    isCreatedByStatefulCreatePages: false,
    next: {
      fields: {
        slug: '/posts/test-3',
      },
      frontmatter: {
        template: 'post',
        title: 'Test 3',
      },
    },
    prev: {
      fields: {
        slug: '/posts/test-1',
      },
      frontmatter: {
        template: 'post',
        title: 'Test 1',
      },
    },
    slug: '/posts/test-2',
  },
};
