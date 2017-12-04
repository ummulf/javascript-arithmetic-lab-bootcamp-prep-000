var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(5) // 3.333333333335

add5()

console.log(10) // 8.333333333335

// reset number
number = 10
