// Create a function that takes an array of number and will return an array of Boolean specifying if a number is prime

let array = [2,3,4,5,6,7,8,9,11]

function primeFunction (x){

    return ((x/2) % 2 != 0)
}

let primeNumber = array.map(primeFunction)
console.log(primeNumber)


