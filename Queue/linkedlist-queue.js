class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = null
    }

    // 入队
    push(val) {
        let currentNode = new Node(val)
        if (this.tail) {
            currentNode.next = this.tail
            this.tail = currentNode;
        } else {
            this.head = currentNode
            this.tail = currentNode
        }

        this.length++

    }
    // 出队
    pop() {
        let removeNode = this.head
        this.head = this.head.next;
        removeNode = null
        this.length--
    }
    // 大小
    size() {
        return this.length
    }
    // 清空
    clear() {
        while (this.head) {
            this.pop()
        }
    }
    // 判空
    isEmpt() {
        return this.length === 0
    }
    // 打印
    display() {
        let newHead = this.head;
        while (newHead) {
            console.log('ele', newHead.val)
            newHead = newHead.next
        }
    }
}

let queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)
queue.display();
console.log('len', queue.size());
// console.log(queue.pop());
// queue.display();
// console.log(queue.isEmpt());
// queue.clear();
// console.log(queue.isEmpt());