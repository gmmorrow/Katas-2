function add(a, b) {
    return a + b
}

function multiply(a, b) {
    let result = 0
    for (i = 0; i < b; i++) {
        result = add(result, a)
    }
    return result
}

function power(a, b) {
    let result = 1
    for (let i = 0; i < b; i++) {
        result = multiply(result, a)
    }
    return result
}

function factorial(x) {
    let result = 1
    for (let i = x; i >= 1; i--) {
        result = multiply(result, i)
    }
    return result
}
console.log(add(2, 4))
console.log(multiply(6, 8))
console.log(power(3, 4))
console.log(factorial(4))