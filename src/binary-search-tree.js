const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootThree = null
  }

  root() {
    return this.rootThree == null? null: this.rootThree;
    
  }

  add(data) {
    this.rootThree = addNode(this.rootThree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }
      
      else if (data < node.data) {
        node.left = addNode(node.left, data)
      } 
      else if (data > node.data) {
        node.right = addNode(node.right, data)
      }

      else {
        return node
      }

      return node
    }
  }

  has(data) {
    return searchNode(this.rootThree, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      } 
      else if (node.data === data) {
        return true;
      } 
      else if (node.data > data) {
        return searchNode(node.left, data);
      } 
      else if (node.data < data) {
        return searchNode(node.right, data);
      } 
      

      
    }
  }

  find(data) {
    function findRoot(node, data) {
      if (!node) {
        return null
      }

      else if (node.data === data) {
        return node
      }

      return data < node.data?findRoot(node.left, data):findRoot(node.right, data)
      
    }
    return findRoot(this.rootThree, data)
    
  
  }

  remove(data) {
    this.rootThree = removeNode(this.rootThree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } 
      else {
        if (!node.left && !node.right) {
          return null
        }
        else if (!node.left) {
          node = node.right;
          return node;
        }
        else if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootThree) {
      return;
    }
    let node = this.rootThree;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootThree) {
      return;
    }
    let node = this.rootThree;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};