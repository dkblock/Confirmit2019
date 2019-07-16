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
        const root = this.root;

        if(root === null) {
            this.root = new Node(id, value);
            return;
        }

        let currentNode = root;
        let newNode = new Node(id, value);

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

    searchByFunc(func) {
        return this.traverseByFunc(this.root, func);
    }    

    traverseByFunc(node, func) {
        let nodes = new Array();

        if(node) {
            nodes.push.apply(nodes, this.traverseByFunc(node.left, func));

            if(func(node)) {
                nodes.push(node);
            }
            
            nodes.push.apply(nodes, this.traverseByFunc(node.right, func));
        }

        return nodes;
    }

    getPath(node) {
        let current = this.root;
        let path = 'Path: ';

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
}

module.exports = Tree;