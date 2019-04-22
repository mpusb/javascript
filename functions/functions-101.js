let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let value2 = square(10)

console.log(value)
console.log(value2)

// Challenge area

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)
