require('isomorphic-fetch');
require('@babel/register')({
    presets: ['@babel/preset-env']
});
require('babel-polyfill');

require('./main.js');