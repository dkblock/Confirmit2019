const Tree = require('./tree.js');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var tree = new Tree();
var n = 50;

for(var i=0;i<n;i++) {
    var randomId = getRandomInt(0,10000);
    var randomValue = getRandomInt(0,10000);
    tree.add(randomId, randomValue);
}

tree.find();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


