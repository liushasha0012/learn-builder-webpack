const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('build_webpack test case', () => {
    require('./unit/webpack-base-test.js');
})
