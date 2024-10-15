
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next

    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.next = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            // console.log("append 1 " + this.head)
        } else {
            let prev = this.head
            // console.log("append 2 " + prev)
            while (prev.next) {
                prev = prev.next
                // console.log("append 3 " + prev)
            }
            prev.next = node
            // console.log("append 4 " + prev.next)
        }
        this.size++
    }

    merge(L1, L2) {
        const l3 = new Node(null, null)
        let prev = l3

        while (L1 !== null && L2 !== null) {
            if (L1.value <= L2.value) {
                prev.next = L1
                L1 = L1.next
            }
            else {
                prev.next = L2
                L2 = L2.next
            }
            prev = prev.next;
        }

        if (L1 === null) { prev.next = L2; }
        if (L2 === null) { prev.next = L1; }

        return l3.next

        // let mergeList = list1.concat(list2)

        // let mergeArray = []
        // console.log(mergeArray)
        // for (let i = 0; i < list1.length; i++) {
        //     for (let j = 0; j < list2.length; j++) {
        //         // spliceList = list1.splice(i,0,list2[j])

        //         if (list1[i] < list2[j]) {
        //             mergeArray.push(list1[i])
        //             console.log("merge array -->" + mergeArray)
        //         }
        //         else (list1[i] > list2[j])
        //         {
        //             console.log("merge array ++>" + mergeArray)
        //             mergeArray.push(list2[j])
        //         }
        //     }
        // }
        // console.log(mergeArray)
    }

    // sort() {
    //     for (let i = 0; i < array.length; i++) {
    //         for (let j = 0; j < array.length - 1; j++) {
    //             if (array[j] > array[j + 1]) {
    //                 let temp = array[j]
    //                 array[j] = array[j + 1]
    //                 array[j + 1] = temp
    //             }

    //         }

    //     }
    // }

    traversing() {
        let counter = 0
        let currentNode = this.head
        while (counter < this.size) {
            console.log(currentNode)
            currentNode = currentNode.next
            counter++
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let curr = this.head
            let listvalues = ''
            while (curr) {
                listvalues += `${curr.value}`
                curr = curr.next
            }
            return listvalues
        }
    }
}


const LL = new LinkedList()
const list1 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(4)
// list1.append(3)

const list2 = new LinkedList()
list2.append(1)
list2.append(3)
list2.append(4)
// list2.append(5)

let l1 = list1.traversing()
let l2 = list2.traversing()
LL.merge(list1, list2)

// console.log(LL.print())

// // list1.print()
// // list2.print()

// let variable_aese_hi = list1.print()
// let variable_aese_hi2 = list2.print()
// let variableConcat = variable_aese_hi + variable_aese_hi2

// const myArray = variableConcat.split("")

// console.log(variableConcat)

// console.log(myArray)
// console.log(typeof (myArray[0]))

// for (i = 0; i < myArray.length; i++) {
//     Number(myArray)
//     console.log(myArray[i])
//     LL.append(myArray[i])
// }


// // LL.append(variable_aese_hi)
// // LL.append(variable_aese_hi2)
// console.log(typeof (variable_aese_hi))

// console.log(LL.print())

// // let jsonArray = JSON.stringify(list1)
// // console.log(jsonArray)

// LL.merge(list1, list2)
// // LL.sort(LL.merge)

