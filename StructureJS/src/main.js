const Tree = require('./tree.js');

var tree = new Tree();
var n = 50;

for (var i = 0; i < n; i++) {
    let randomId = getRandomInt(999, 10000);
    let randomValue = getRandomInt(999, 10000);
    tree.add(randomId, randomValue);
}

tree.find();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


