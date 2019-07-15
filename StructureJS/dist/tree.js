'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(id, value) {
    _classCallCheck(this, Node);

    this.id = id;
    this.value = value;
    this.left = null;
    this.right = null;
};

var Tree = function () {
    function Tree() {
        _classCallCheck(this, Tree);

        this.root = null;
    }

    _createClass(Tree, [{
        key: 'add',
        value: function add(id, value) {
            var root = this.root;

            if (root == null) {
                this.root = new Node(id, value);
                return;
            }

            var currentNode = root;
            var newNode = new Node(id, value);

            while (currentNode) {
                if (id < currentNode.id) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }, {
        key: 'find',
        value: function find(func) {
            var nodes = this.traverse(this.root);

            for (var i = 0; i < nodes.length; i++) {
                if (func(nodes[i])) {
                    var path = this.getPath(nodes[i]);
                    console.log('ID: ' + nodes[i].id + '  Value: ' + nodes[i].value + '  ' + path);
                }
            }
        }
    }, {
        key: 'getPath',
        value: function getPath(node) {
            var current = this.root;
            var path = 'Path: ';

            while (current.id != node.id) {
                path += current.id + ' -> ';

                if (node.id < current.id) {
                    current = current.left;
                } else if (node.id > current.id) {
                    current = current.right;
                }
            }

            return path + '[' + node.id + ']';
        }
    }, {
        key: 'traverse',
        value: function traverse(node) {
            var nodes = new Array();

            if (node) {
                nodes = nodes.concat(this.traverse(node.left));
                nodes.push(node);
                nodes = nodes.concat(this.traverse(node.right));
            }

            return nodes;
        }
    }]);

    return Tree;
}();

exports.Tree = Tree;
exports.Node = Node;