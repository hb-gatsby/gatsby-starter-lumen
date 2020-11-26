'use strict';

const babelOptions = {
  presets: [
    '@babel/react',
    '@babel/env',
    'babel-preset-gatsby',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties'
  ],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
