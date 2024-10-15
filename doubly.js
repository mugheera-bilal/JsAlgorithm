class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        console.log(this.head)
        this.tail = node;
      } else {
        node.next = this.head;
        console.log(node.next)
        this.head.prev = node;
        console.log(this.head.prev)
        this.head = node;
        console.log(this.head)
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    }
  
    removeFromFront() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  
    printReverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.tail;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.prev;
        }
        console.log(list);
      }
    }

    // toArray() {
    //     const array = [];
    //     let current = this.head;
    //     while (current) {
    //       array.push(current.value);
    //       current = current.next;
    //     }
    //     return array;
    //   }
  }
  
//   const list = new DoublyLinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.prepend(0);
//   list.print();
//   list.printReverse();
//   list.removeFromEnd();
//   list.print();
//   list.removeFromFront();
//   list.print();

// // Usage example
// const list = new DoublyLinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);

// // Convert linked list to array and then stringify
// const jsonArray = JSON.stringify(list.toArray());
// console.log(jsonArray); // Output: [30,20,10]