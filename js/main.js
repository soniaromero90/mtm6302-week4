console.log("JS File added")

// if statement

const region = "Canada"

if(region === "Canada")

console.log("You're seeing Canadian ver of this site")

// if else statement

let price = 20
const shippingFee = 15

let cartTotal 

if(price >= 50) {
cartTotal = price
}

else {
    cartTotal = price + shippingFee
}

console.log(cartTotal)

document.getElementById("cart1").innerHTML += "Your cart total is " + cartTotal

// if, else if, else

price = 105

const discount = 0.15

if(price >= 100) {
    cartTotal = price - (price * discount)
}

else if(price >= 50) {
    cartTotal = price
}

else {
    cartTotal = price + shippingFee
}

console.log(cartTotal)

document.getElementById("cart2").innerHTML += "Your cart total is " + cartTotal

// switch statement

let planet = "Jupiter"
let message 

switch(planet) {
    case "Earth":
        message = "Welcome to the Earth Planet!"
        break

    case "Mars":
        message = "Welcome to the red planet!"
        break
    case "Jupiter":
        message = "Welcome to the largest planet!"
        
    default:
        message = `You're on ${planet}. We don't service  ${planet} yet.`
}

console.log(message)

document.getElementById("planet").innerHTML += message

// switch stacking cases

let answer = "c"

switch(answer) {
    case "a":
    case "b":
    case "d":
        console.log("Incorrect Answer. Please try again.")

    document.getElementById("quiz").innerHTML += "Incorrect Answer. Please try again."

    break

    case "c":
        console.log("You got the right answer!")

    document.getElementById("quiz").innerHTML += "You got the right answer!"
}

// Functions

function myName() {
    return "Sonia"
}
let firstName = myName()
console.log("firstName")

document.querySelector(".container h1").innerHTML += firstName

function changeBg(bgColor){
    document.querySelector("body").style.backgroundColor = bgColor
}