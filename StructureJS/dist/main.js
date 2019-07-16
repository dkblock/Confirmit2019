'use strict';

var Tree = require('./tree.js');
var tree = new Tree();
var n = 50;

for (var i = 0; i < n; i++) {
    var randomId = getRandomInt(999, 10000);
    var randomValue = getRandomInt(999, 10000);
    tree.add(randomId, randomValue);
}

var nodes = tree.searchByFunc(function (x) {
    return x.id > 5000 && x.value < 3000;
});

for (var i = 0; i < nodes.length; i++) {
    var path = tree.getPath(nodes[i]);
    console.log('ID: ' + nodes[i].id + '  Value: ' + nodes[i].value + '  ' + path);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}