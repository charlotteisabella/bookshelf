require('must');
const app = require('../src/app');
const doubleagent = require('doubleagent');

exports.agent = doubleagent(app);
