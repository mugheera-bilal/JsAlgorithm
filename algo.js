// // for the summation of values 

// function summation (n){
//     let sum = 0
//     for( let i=0; i <= n ; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(summation(10))


//////////////////////////////////////////


// // for finding fibonacci sequence
// // by practice 

// function fibonacci(n) {
//     let n1 = 0
//     let n2 = 1
//     let nt = 0
//     for (let i = 0; i <= n; i++) {
//         console.log(n1)
//         nt = n1 + n2;
//         n1 = n2
//         n2 = nt
//         //  console.log(nt)
//     }
//     return n1
// }
// console.log(fibonacci(2))


// //  from watching video

// function fibo (n){
//     let fib = [0,1]
//     for(let i =2; i < n ; i++){
//         fib[i]= fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// console.log(fibo(2))
// console.log(fibo(4))
// console.log(fibo(8))

/////////////////////////////////////////////

// // for finding factorial

// function factorial(n){
//     let fact = 1
//     for (let i=2 ; i <= n ; i++){
//         fact = fact * i
//     }
//     return fact
// }

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))

/////////////////////////////////////////////

// // to find prime number

// function prime(n){
//     for (let i =0 ; i <= n ; i++){
//         for ( j = 2; j < i ; j++){
//             if(i % j == 0){
//                 console.log("not a prime number: "+ i);
//                 break;
//             }
//         }
//         if(i == j){
//             console.log("prime number : "+ i)
//         }
//     }
// }

// console.log(prime(7))



// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0)
//             return false
//     }
//     return true
// }

// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))


///////////////////////////
// //power of two


// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }

// console.log(isPowerOfTwoBitwise(1))
// console.log(isPowerOfTwoBitwise(2))
// console.log(isPowerOfTwoBitwise(5))
// console.log(isPowerOfTwoBitwise(7))
// console.log(isPowerOfTwoBitwise(16))

// // optimal solution for power of two

// function isPowerOfTwoBitwise(n){
//     if (n < 1){
//         return false
//     }
//     return (n & (n-1)) === 0

// }



/////////////////////////////////////////////////
///////////   recusrion   ///////////////////
/////////////////////////////////////////

// // fibonacci with recursion

// function recursiveFibonacci(n){
//     if (n < 2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))


// // factorial with recursion

// function recursiceFactorial(n){
//     if (n === 0){
//         return 1
//     }
//     return n * recursiceFactorial(n-1)
// }

// console.log(recursiceFactorial(0))
// console.log(recursiceFactorial(1))
// console.log(recursiceFactorial(5))



////////////////////////////////////////////////////////
////////////////// linear searchh //////////////////////
////////////////////////////////////////////////////////

// // // find the endex of the element in array

// let array = [5,2,7,8,9]
// let sortedArray = array.sort()
// console.log(sortedArray)

// function findElement (n){
//     for (let i = 0; i < array.length ; i++){
//         if (n === array[i])
//             return i
//     }
//     return -1
// }

// console.log(findElement(2))
// console.log(findElement(7))
// console.log(findElement(20))


//////////////////////////////////////////////////////////
// binary search

// let array = [1,2,3,4,5,6]
// function  binarySearch(target){
// let leftIndex = 0 
// let rightIndex = array.length - 1

//     while (leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target === array[middleIndex]){
//             return middleIndex
//         }
//         if (target < array[middleIndex]){
//             rightIndex= middleIndex - 1
//         }else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(5))
// console.log(binarySearch(6))
// console.log(binarySearch(2))
// console.log(binarySearch(-5))

//////////////////////////////////////////////////////////
// binary search with recursio

/////  my wrong code
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function rescursiveBinarySearch(target) {
//     let leftIndex = 0
//     let rightIndex = array.length - 1
//     middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (leftIndex <= rightIndex) {
//         if (target === array[middleIndex]) {
//             return middleIndex
//         }
//         if(target < array[middleIndex]){

//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//         return rescursiveBinarySearch(middleIndex)
//     }
//     return -1
// }


// console.log(rescursiveBinarySearch(5))
// console.log(rescursiveBinarySearch(6))
// console.log(rescursiveBinarySearch(2))
// console.log(rescursiveBinarySearch(-5))


// //// chat gpt code
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function recursiveBinarySearch(target, leftIndex = 0, rightIndex = array.length - 1) {
//     if (leftIndex > rightIndex) {
//         return -1; // Base case: target not found
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//     if (target === array[middleIndex]) {
//         return middleIndex; // Found the target
//     } else if (target < array[middleIndex]) {
//         return recursiveBinarySearch(target, leftIndex, middleIndex - 1); // Search in the left half
//     } else {
//         return recursiveBinarySearch(target, middleIndex + 1, rightIndex); // Search in the right half
//     }
// }

// console.log(recursiveBinarySearch(5)); // Output: 4
// console.log(recursiveBinarySearch(6)); // Output: 5
// console.log(recursiveBinarySearch(2)); // Output: 1
// console.log(recursiveBinarySearch(-5)); // Output: -1



//// video code

// function recursiveBinarySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }
//     if (target < arr[middleIndex]) {
//         return search(arr, target, leftIndex, middleIndex - 1)
//     } else {
//         return search(arr, target, middleIndex + 1, rightIndex)
//     }
// }

// console.log(recursiveBinarySearch([1, 2, 3, 5, 6, 7, 8, 9, 10], 10))
// console.log(recursiveBinarySearch([1, 2, 3, 5, 6, 7, 8, 9, 10], 6))
// console.log(recursiveBinarySearch([1, 2, 3, 5, 6, 7, 8, 9, 10], 2))
// console.log(recursiveBinarySearch([1, 2, 3, 5, 6, 7, 8, 9, 10], 20))


//////////////////////////////////////////////////////
/////////////// sorting algorithm ////////////////////
//////////////////////////////////////////////////////

// bubble sort
// let array = [9,8,-6,4,4,2]

// function bubbleSort(){
//     for (let i = 0; i < array.length; i++) {
//         for (let j =0; j < array.length - 1; j++) {
//             if (array[j]>array[j+1]){
//                 let temp = array [j]
//                 array[j]= array[j+1]
//                 array[j+1]=temp

//             }   
//         }      
//     }
// }

// bubbleSort()
// console.log(array)

// // bubble sort from video

// let array = [9, 8, -6, 4, 2, 4]

// function bubbleSort() {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i] > array[i + 1]) {
//                 let temp = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = temp
//                 swapped = true
//             }
//         }
//     }
//     while (swapped)
// }

// bubbleSort()
// console.log(array)

/////////////////////////////////////////////////
// // insertion sort

// const array = [8,20,-2,4,-6]

// function insertionSort(){
//     for (let i = 1; i < array.length; i++) {
//         let numberToInsert = array[i]
//         let j = i - 1
//         while(j>= 0 && array[j]>numberToInsert){
//             array[j + 1] = array[j]
//             j= j-1
//         }
//         array[j+1]=numberToInsert
//     }
// }

// insertionSort()
// console.log(array)


//////////////////////////////////////////////////
// quick sort

// let arr = [-6, 10, -2, -8, 20, -4]

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let leftArray = []
//     let rightArray = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             leftArray.push(arr[i])
//         }
//         else {
//             rightArray.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
// }

// let func = quickSort(arr)
// console.log(func)


//////////////////////////////////////////////////////////
// merge sort 

// let array = [8, 20, -6, -2, 4]

// function mergeSort(array) {
//     if (array.length < 2) {
//         return array
//     }

//     let midArray = Math.floor(array.length / 2)
//     let leftArray = array.slice(0, midArray)
//     console.log("left array" + leftArray)
//     let rightArray = array.slice(midArray)
//     console.log("right array" + rightArray)
//     return merge(mergeSort(leftArray), mergeSort(rightArray))

// }
// function merge(leftArray, rightArray) {
//     sortedArray = []
//     while (leftArray.length && rightArray.length) {
//         if (leftArray[0] <= rightArray[0]) {
//             sortedArray.push(leftArray.shift())
//             console.log("sorted array "+sortedArray)
//         } else {
//             sortedArray.push(rightArray.shift())
//             console.log("sorted array 2 => " + sortedArray)

//         }
//     }
//     console.log("sorted array outside " + sortedArray)
//     return [...sortedArray, ...leftArray, ...rightArray]
// }

// let func = mergeSort(array)
// console.log(func)


/////////////////////////////////////////////////////////////////////
// cartesian product

// let array1 = [1,2]
// let array2 = [3,4]

// function cartesianProduct(){
//     let cartesianArray = []
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             let insideArray = [array1[i],array2[j]]
//             cartesianArray.push(insideArray)          
//         }
//     }
//     return cartesianArray
// }

// let func = cartesianProduct()
// console.log(func)


/////////////////////////////////////////////////////////////////////
// climbing staircase

// function climbingStaircase(n) {
//     const noOfWays = [1, 2]
//     for (let i = 2; i <= n; i++) {
//         noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
//     }

//     return noOfWays[n - 1]
// }

// console.log(climbingStaircase(1))
// console.log(climbingStaircase(2))
// console.log(climbingStaircase(3))
// console.log(climbingStaircase(4))
// console.log(climbingStaircase(5))


///////////////////////////////////////////////////////////////////
// tower of hanoi


// function towerOfHanoi (n,fromRod, toRod,usingRod){
//     if(n===1){
//         console.log(`move Disk 1 from ${fromRod} to ${toRod}`)
//         return
//     }
//     towerOfHanoi(n-1, fromRod, usingRod, toRod)
//     console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
//     towerOfHanoi(n-1, usingRod, toRod, fromRod)
// }


// towerOfHanoi(4,'A', 'C', 'B')