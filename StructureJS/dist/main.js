'use strict';

var _tree = require('./tree.js');

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _tree2.default();
var n = 50;

for (var i = 0; i < n; i++) {
    var randomId = getRandomInt(0, 10000);
    var randomValue = getRandomInt(0, 10000);
    tree.add(randomId, randomValue);
}

tree.find();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}