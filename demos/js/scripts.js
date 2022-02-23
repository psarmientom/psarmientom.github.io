// alert("this is js")
console.log("this is a log")

console.log('b' + 'a' + +('a') + 'a')

// =================
const car = "Ferrari",
    color = "yellow",
    model = "2022"

// ================
const year="2021"
console.log(year + " " + typeof year)

// ================
let sum = 0
console.log(sum) // 0

let num1 = 300
let num2 = 50
sum = num1 + num2
console.log(sum) // 350

// ================
function nmakePhoneCall() {
    // Look for phone, 
    // get phone,
    // unlock phone,
    // open phone app,
    // look for name in phone book,
    // make call
}

// ================
function eatVeggies(veggie){
    console.log("I'm eating a " + veggie)
}
eatVeggies("broccoli")

function eatMoreVeggies(){
    let veggie = "carrot"
    console.log("I'm eating a " + veggie)
}
eatMoreVeggies()
eatMoreVeggies()
eatVeggies("kale")

function eatManyVeggies(veg1, veg2, veg3){
    console.log("I'm eating a " + veg1 + ", a " + veg2 + " and a " + veg3)
}
eatManyVeggies("broccoli", "carrot", "cucumber")

function eatSomeVeggies(veggie){
    // let veggie = "zuchinni"
    // console.log("I'm eating a " + veggie)
    return "potato"
}
eatSomeVeggies()

// ====================
function add2(num) {
    return num + 2 
    console.log("this is a log")
  }
  
console.log(add2(4))

// ===================== 
const myFunctionExpression = function () { 
    console.log('This is a function expression!') 
  }
  myFunctionExpression() 

// ======================
const myArrowFunction = (num1, num2) => {
    console.log(num1 + num2)
}
myArrowFunction(3,5)

const myNewArrowFunction = (num1, num2) => num1 + num2

console.log(myNewArrowFunction(4, 7))

// ======================
const myDog = {
    name: 'Bernie',
    color: 'brown and white',
    breed: 'St. Bernard',
    weight: '150lb'
    }
console.log(myDog.color)
const dogName = myDog.name
console.log(dogName)

