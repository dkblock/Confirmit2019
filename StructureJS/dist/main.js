'use strict';

var Tree = require('./tree.js');

var tree = new Tree();
var n = 50;

for (var i = 0; i < n; i++) {
    var randomId = getRandomInt(999, 10000);
    var randomValue = getRandomInt(999, 10000);
    tree.add(randomId, randomValue);
}

tree.find();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}