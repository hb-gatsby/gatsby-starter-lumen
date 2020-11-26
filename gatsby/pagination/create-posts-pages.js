'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: path.resolve('./src/templates/index-template.tsx'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
