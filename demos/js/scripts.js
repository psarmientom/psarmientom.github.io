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
// let sum = 0
// console.log(sum) // 0

let num1 = 300
let num2 = 50
num2 = 40
const sum = num1 + num2
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

// DOM 
console.log(document)
console.log(document.head)
console.log(document.body)
// Talk about the difference with the defer on the javascript link

const useIdName = document.getElementById("bestIceCream")
const useIdSelector = document.querySelector("#bestIceCream")
console.log(useIdName)
console.log(useIdSelector)

const selectId = document.querySelector(".plainIceCream")
console.log(selectId)

const slectp = document.querySelector('p')
console.log(slectp)

const selectAllp = document.querySelectorAll("p")
console.log(selectAllp)

slectp.classList.add("red")

// Always selects the first instance 
const selectBox = document.querySelector(".box")
const selectBox2 = document.querySelector(".section2 .box")
console.log(selectBox)

// arrays

const myArray = ["item1", "item2", "item3"]
console.log(myArray)
const myArrayLong = [
    "item1",
    "item2",
    "item3",
    "item4"
]
console.log(myArrayLong)

const arrayArrays = [
    [1, 2, 3],
    [1, 2, 3]
  ]
console.log(arrayArrays)

const arrayObject = [
    { firstName: 'Patricia', lastName: 'Sarmiento' },
    { firstName: 'John', lastName: 'Doe' }
  ]
console.log(arrayObject)

// Array to get objects values
const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }
  const keys = Object.keys(fruits)
  const keysValues = Object.values(fruits)
  console.log(keys) 
  console.log(keysValues) 
  console.log(fruits) 

// Get the specific element on an array 
const paragraphs = document.querySelectorAll( "p" ),
      firstParagraph = paragraphs[ 0 ]
firstParagraph.innerHTML = "I'm changing the text"

// Count the number of elements on an array (zero based array)
function countArray(){
console.log("The total number of paragraphs is : " + paragraphs.length);
}
countArray()

// Calculate the last paragraph automatically 
const lastParagraph = paragraphs[paragraphs.length -2]
console.log(lastParagraph)
lastParagraph.innerHTML = "<b>I'm the last <br> paragraph</b>"

// changing the names of the array elements 
const myNewArray = ["item1", "item2", "item3"]
myNewArray[0] = "I'm different"
myNewArray[9] = "I'm new"
console.log(myNewArray)
console.log(myNewArray.length)

// Array Methods 
const shopphingList = ["eggs", "milk", "cheese", "apples", "grapes", "strawberries", "tomatoes", "bread"]
// getting the index of a value 
const applePos = shopphingList.indexOf("apples")
// Adding a value at the beginning 
shopphingList.unshift("butter", "flour")
// adding an item at the end 
shopphingList.push("lettuce", "broccoli")
// Removing an item from the beginning 
shopphingList.shift()
// Removing an item from the end 
shopphingList.pop()
// Adding removing with splice
shopphingList.splice(2, 0, "beans", "peppers")
// Removing items with splice
shopphingList.splice(2, 3)


console.log(applePos)
console.log(shopphingList)
// console.log(addOne)

// const myList = document.querySelector("#shoppingList")
document.querySelector("#shoppingList").innerHTML = shopphingList.join("<br>");
// Change the length- 1 above 
// myList.innerHTML = shopphingList

const myOtherList = shopphingList.slice()
myOtherList.unshift("detergent")
console.log(myOtherList)

// FOR Loops

// This loop will run ten times
for (let i = 0; i < 10; i++) {
    const timesBounced = i + 1
    console.log('The is logged ' + timesBounced + ' times')
  }


// add class to all the elements on an array
paragraphs.forEach(item => item.classList.add("blue"));