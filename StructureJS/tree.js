class Node {
    constructor(id, value) {
        this.id = id;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {    
    constructor() {
        this.root = null;
    }

    add(id, value) {
        var root = this.root;

        if(root == null) {
            this.root = new Node(id, value);
            return;
        }

        var currentNode = root;
        var newNode = new Node(id, value);

        while(currentNode){
            if(id < currentNode.id) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
            else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find() {
        var nodes = this.traverse(this.root);
        
        for(var i = 0; i < nodes.length; i++) {
            var path = this.getPath(nodes[i]);
            console.log('ID: ' + nodes[i].id + '  Value: ' + nodes[i].value + '  ' + path);
        }
    }

    getPath(node) {
        var current = this.root;
        var path = 'Path: ';

        while(current.id != node.id) {
            path += current.id + ' -> ';

            if(node.id < current.id) {
                current = current.left;
            }
            else if(node.id > current.id) {
                current = current.right;
            }
        }

        return path + '[' + node.id + ']';
    }

    traverse(node) {
        var nodes = new Array();

        if(node) {
            nodes = nodes.concat(this.traverse(node.left));
            nodes.push(node);
            nodes = nodes.concat(this.traverse(node.right));
        }

        return nodes;
    }
}

module.exports = Tree;