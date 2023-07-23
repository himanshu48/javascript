"use strict"
function TrieNode(key) {
    // the "key" value will be the character in sequence
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
}

// iterates through the parents to get the word.
// time complexity: O(k), k = word length
TrieNode.prototype.getWord = function () {
    let output = [];
    let node = this;
    while (node !== null) {
        output.push(node.key);
        node = node.parent;
    }
    return output.reverse().join('');
};

function Trie() {
    this.root = new TrieNode(null);
}

// inserts a word into the trie.
// time complexity: O(k), k = word length
Trie.prototype.insert = function (word) {
    let node = this.root; // we start at the root 😬

    // for every character in the word
    for (let i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (!node.children[word[i]]) {
            // if it doesn't exist, we then create it.
            node.children[word[i]] = new TrieNode(word[i]);
            // we also assign the parent to the child node.
            node.children[word[i]].parent = node;
        }

        // proceed to the next depth in the trie.
        node = node.children[word[i]];

        // finally, we check to see if it's the last word.
        if (i === word.length - 1) {
            // if it is, we set the end flag to true.
            node.end = true;
        }
    }
};

// check if it contains a whole word.
// time complexity: O(k), k = word length
Trie.prototype.contains = function (word) {
    let node = this.root;

    // for every character in the word
    for (let i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (node.children[word[i]]) {
            // if it exists, proceed to the next depth of the trie.
            node = node.children[word[i]];
        } else {
            // doesn't exist, return false since it's not a valid word.
            return false;
        }
    }

    // we finished going through all the words, but is it a whole word?
    return node.end;
};

// returns every word with given prefix
// time complexity: O(p + n), p = prefix length, n = number of child paths
Trie.prototype.find = function (prefix) {
    let node = this.root;
    let output = [];

    // for every character in the prefix
    for (let i = 0; i < prefix.length; i++) {
        // make sure prefix actually has words
        if (node.children[prefix[i]]) {
            node = node.children[prefix[i]];
        } else {
            // there's none. just return it.
            return output;
        }
    }

    // recursively find all words in the node
    findAllWords(node, output);

    return output;
};

// recursive function to find all words in the given node.
function findAllWords(node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) {
        arr.push(node.getWord());
    }
    // iterate through each children, call recursive findAllWords
    for (let child in node.children) {
        findAllWords(node.children[child], arr);
    }
}
/**
 * Removes word from trie
 * Time complexity = O(nlogn)
 * Space complexity = O(n)
 * @param {string} word
 */
Trie.prototype.remove = function (word) {
    let root = this.root;

    if(!word) return;

    // recursively finds and removes a word
    const removeWord = (node, word) => {

        // check if current node contains the word
        if (node.end && node.getWord() === word) {

            // check and see if node has children
            let hasChildren = Object.keys(node.children).length > 0;

            // if has children we only want to un-flag the end node that marks end of a word.
            // this way we do not remove words that contain/include supplied word
            if (hasChildren) {
                node.end = false;
            } else {
                // remove word by getting parent and setting children to empty dictionary
                node.parent.children = {};
            }

            return true;
        }

        // recursively remove word from all children
        for (let key in node.children) {
            removeWord(node.children[key], word)
        }

        return false
    };

    // call remove word on root node
    removeWord(root, word);
};
// -----------------------------------------

// instantiate our trie
const trie = new Trie();

// insert few values
trie.insert("hello");
trie.insert("helium");

// check contains method
console.log(trie.contains("helium"));  // true
console.log(trie.contains("kickass")); // false

// console.log(trie.remove("helium")); // undefined
// console.log(trie.contains("helium")); // false

// check find method
console.log(trie.find("hel"));  // [ 'helium', 'hello' ]
console.log(trie.find("hell")); // [ 'hello' ]
