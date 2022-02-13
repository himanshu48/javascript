class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.prev = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.top;
    this.top = temp.prev;
    temp.prev = null;
    this.length--;
    return temp;
  }
}
