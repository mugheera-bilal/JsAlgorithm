///////////////////////////////////////////////////
// // Stacks with array

// class Stack {
//     constructor() {
//       this.items = [];
//     }

//     push(element) {
//       this.items.push(element);
//     }

//     pop() {
//       return this.items.pop();
//     }

//     peek() {
//       return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//       return this.items.length === 0;
//     }

//     size() {
//       return this.items.length;
//     }

//     print() {
//       console.log(this.items);
//     }
//   }

//   const stack = new Stack();
//   console.log(stack.isEmpty());
//   stack.push(20);
//   stack.push(10);
//   stack.push(30);
//   console.log(stack.size());
//   stack.print();
//   console.log(stack.pop());
//   console.log(stack.peek());
//   stack.print();


// // //   stacks with objects

// class Stack {
//     constructor() {
//       this.items = {};
//       this.head = 0;
//     }

//     push(element) {
//       this.items[this.head] = element;
//       this.head++;
//     }

//     pop() {
//       const item = this.items[this.head - 1];
//       delete this.items[this.head - 1];
//       this.head--;
//       return item;
//     }

//     peek() {
//       return this.items[this.head - 1];
//     }

//     size() {
//       return this.head;
//     }

//     isEmpty() {
//       return this.head === 0;
//     }

//     print() {
//       console.log(this.items);
//     }
//   }

//   const stack = new Stack();
//   console.log(stack.isEmpty());
//   stack.push(20);
//   stack.push(10);
//   stack.push(30);
//   console.log(stack.size());
//   stack.print();
//   console.log(stack.pop());
//   console.log(stack.peek());
//   stack.print();




///////////////////////////////////////////////////
// // Queue

// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue() {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.dequeue())

// queue.enqueue("mugheera")

// console.log(queue.size())
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

// // queue with objects

// class Queue {
//     constructor() {
//       this.items = {};
//       this.front = 0;
//       this.rear = 0;
//     }

//     enqueue(element) {
//       this.items[this.rear] = element;
//       this.rear++;
//     }

//     dequeue() {
//       const item = this.items[this.front];
//       delete this.items[this.front];
//       this.front++;
//       return item;
//     }

//     peek() {
//       return this.items[this.front];
//     }

//     size() {
//       return this.rear - this.front;
//     }

//     isEmpty() {
//       return this.rear - this.front === 0;
//     }

//     print() {
//       console.log(this.items);
//     }
//   }

//   const queue = new Queue();
//   console.log(queue.isEmpty());
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   console.log(queue.size());
//   queue.print();
//   console.log(queue.dequeue());
//   console.log(queue.peek());
//   console.log(queue.isEmpty());
//   queue.print();


////////////////////////////////////////////////////////
// // // circular queue

// class CircularQueue {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.rear = -1
//         this.front = -1
//     }

//     isFull() {
//         return this.currentLength === this.capacity
//     }

//     isEmpty() {
//         return this.currentLength === 0
//     }

//     enqueue(element) {
//         if (!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = element
//             this.currentLength += 1
//             if (this.front === -1) {
//                 this.front = this.rear
//             }
//         }
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength -= 1
//         if (this.isEmpty()) {
//             this.front = -1
//             this.rear = -1
//         }
//         return item
//     }

//     peek(){
//         if (!this.isEmpty()){
//             return this.items[this.front]

//         }
//         return null
//     }

//     print (){
//         if(this.isEmpty()){
//             console.log('queue is Empty')

//         }
//         else {
//             let i
//             let str = ''
//             for(i=this.front; i !== this.rear ; i = (i + 1)% this.capacity){
//                 str += this.items[i] + " "
//             }
//             str += this.items[i]
//             console.log(str)
//         }
//     }

// }
// const queue = new CircularQueue(5)
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// console.log(queue.isFull())
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())
// queue.print()
// queue.enqueue(60)
// queue.print()



/////////////////////////////////////////////////////////////////////////
///////////////////////////////// linked list ///////////////////////////
/////////////////////////////////////////////////////////////////////////


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }

//     }

//     removeFrom(index) {
//         if (index < 0 || index >= this.size) {
//             return null
//         }
//         let removeNode
//         if (index === 0) {
//             removeNode = this.head
//             this.head = this.head.next
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next

//             }
//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if (prev.next) {
//                 const removeNode = prev.next
//                 prev.next = removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value) {
//         if (this.isEmpty()) {
//             return -1
//         }
//         let i = 0
//         let curr = this.head
//         while (curr) {
//             if (curr.value === value) {
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while (curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next 
//         }
//         this.head = prev
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty')
//         } else {
//             let curr = this.head
//             let listvalues = ''
//             while (curr) {
//                 listvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues)
//         }
//     }
// }


// const list = new LinkedList()
// console.log('list is Empty?', list.isEmpty())
// console.log('list size ', list.getSize())
// list.print()

// ////// append calls

// // list.append(10)
// // list.print()

// // list.append(20)
// // list.append(30)
// // list.print()

// /////////// insert value callls

// list.insert(10, 0)
// list.print()

// list.insert(20, 0)
// list.print()

// list.insert(30, 1)
// list.print()

// list.insert(40, 2)
// list.print()
// console.log(list.getSize())

// /////// remove from index callss

// // console.log(list.removeFrom(10))
// // console.log(list.removeFrom(0))
// // list.print()

// // console.log(list.removeFrom(1))
// // list.print()
// // console.log(list.getSize())

// /////// remove from value calls

// // console.log(list.removeValue(40))
// // list.print()

// // console.log(list.removeValue(20))
// // list.print()

// // console.log(list.removeValue(60))
// // list.print()

// ////////// searching calls

// // console.log(list.search(20))
// // console.log(list.search(40))
// // console.log(list.search(60))

// // list.reverse()
// // list.print()


/////////////////////////////////////////////////////////////////
/// linked list with head and tail

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty')
//         } else {
//             let curr = this.head
//             let listvalues = ''
//             while (curr) {
//                 listvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues)
//         }
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             rhis.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++

//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++

//     }

//     removeFromFront() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     removeFromEnd() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.tail.value
//         if (this.size === 1) {
//             this.head = null
//             this.tail = null 

//         } else {
//             let prev = this.head
//             while (prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size-- 
//         return value

//     }
// }

// const list = new LinkedList()
// console.log('list is Empty?', list.isEmpty())
// console.log('list size ', list.getSize())
// list.print()

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()
// console.log('list size', list.getSize())

// list.removeFromFront()
// list.removeFromEnd()
// list.print()


////////////////////////////////////////////////////////////////////////
/////////////////////// hash table implementation //////////////////////
////////////////////////////////////////////////////////////////////////

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         // this.table[index] = value
//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const sameKeyItem = bucket.find(item =>  item[0] === key
//             )
//             console.log("same",sameKeyItem)
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         const index = this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if (sameKeyItem) {
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         const index = this.hash(key)
//         // this.table[index] = undefined
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if (sameKeyItem) {
//                 bucket.splice(bucket.indexOf(sameKeyItem), 1)
//             }
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name", "bruce")
// table.set("age", 25)
// table.set("city", "pakistan")
// table.set("address", "a123")
// table.display()

// console.log(table.get("name"))

// // table.remove("name")
// // table.display()

// table.set("mane", "wayne")

// table.set("name", "daiana")
// table.set("name", "asda")
// table.set("mean", "batman")
// table.set("mane", "wyn")

// // table.remove("name")
// table.display()

/////////////////////////////////////////////////////////
////////////// binary search treee ////////////////////////
/////////////////////////////////////////////////////////////

// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const newNode = new Node(value)
//         if (this.isEmpty()) {
//             this.root = newNode
//             const jsonString = JSON.stringify(this.root);
//             console.log("root isEmpty => " + jsonString)
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//                 const jsonString = JSON.stringify(root.left);
//                 console.log("root left ---=> " + jsonString)
//             } else {
//                 this.insertNode(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//                 const jsonString = JSON.stringify(root.right);
//                 console.log("root right +++=> " + jsonString)
//             } else {
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false;
//         }
//         if (root.value === value) {
//             return true;
//         } else if (value < root.value) {
//             return this.search(root.left, value);
//         } else {
//             return this.search(root.right, value);
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder() {
//         // use the optimised queue implementation
//         const queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let curr = queue.shift()
//             console.log(curr.value)
//             if (curr.left) {
//                 queue.push(curr.left)
//             }
//             if (curr.right) {
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }

//     }

//     max(root) {
//         if (!root.right) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }

//     delete(value) {
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value) {
//         if (root === null) {
//             console.log(root)
//             console.log("This is 1")
//             return root
//         }
//         if (value < root.value) {
//             console.log("This is 2")
//             root.left = this.deleteNode(root.left, value)
            
//         } else if (value > root.value) {
//             root.right = this.deleteNode(root.right, value)
//             console.log("This is 3")

//         } else {
//             if (!root.left && !root.right) {
//                 console.log("This is 4")
//                 return null
//             }
//             if (!root.left) {
//                 console.log("This is 5")
//                 return root.right

//             } else if (!root.right) {
//                 console.log("This is 6")
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             console.log("This is 7")
//             root.right = this.deleteNode(root.right, root.value)
//             console.log("This is 8")

//         }
//         return root
//     }
// }

// const bst = new BinarySearchTree()
// console.log('tree is empty?', bst.isEmpty())

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(7)
// bst.insert(3)
// // bst.insert(9)
// bst.insert(11)
// // bst.insert(12)

// console.log('tree is empty?', bst.isEmpty())

// // console.log(bst.search(bst.root, 10))
// // console.log(bst.search(bst.root, 5))
// // console.log(bst.search(bst.root, 15))
// // console.log(bst.search(bst.root, 20))

// /////// depth first search
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)

// /////// breadth first seacrch
// bst.levelOrder(bst.root)

// // console.log(bst.min(bst.root))
// // console.log(bst.max(bst.root))


// bst.delete(10)
// bst.levelOrder(bst.root)

///////////////////////////////////////////////////////////////////
///////////////////// graph ./////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex (vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set ()
        }
    }

    addEdge (vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    

    removeEdge (vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge (vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " => " + [...this.adjacencyList[vertex]])

        }
    }

    
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()
console.log(graph.hasEdge("A","C"))

graph.removeVertex("B")
graph.display()

