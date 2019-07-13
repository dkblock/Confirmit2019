import Tree from './tree.js';

var tree = new Tree();
var n = 50;

for (var i = 0; i < n; i++) {
    var randomId = getRandomInt(0,10000);
    var randomValue = getRandomInt(0,10000);
    tree.add(randomId, randomValue);
}

tree.find();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


