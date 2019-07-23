import {Tree} from './tree';
const tree = new Tree();
const n = 50;

for (var i = 0; i < n; i++) {
    let randomId = getRandomInt(999, 10000);
    let randomValue = getRandomInt(999, 10000);
    tree.add(randomId, randomValue);
}

let nodes = tree.searchByFunc(x => x.id > 8000 && x.value < 2000);

for(var i = 0; i < nodes.length; i++) {
    let path = tree.getPath(nodes[i]);
    console.log(`ID: ${nodes[i].id}  Value: ${nodes[i].value}  ${path}`);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}