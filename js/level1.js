alert('Hello User')
// Q1"
let userAge = prompt('Q1: Please, Enter your age below', 'e.g 30')
let userAgeDiff = 18 - userAge

if (userAge > 18) {
    console.log('You are old enough to drive')
    alert('You are old enough to drive')
} else {
    console.log(`you are left with ${userAgeDiff} to drive`)
    alert(`you are left with ${userAgeDiff} to drive`)
}

// Q2:
alert('Q2: I am 20 yrs old')
let myAge = 20
let yourAge = prompt('Q2: How old are you?', 'Enter your age e.g 30')
let ageDifference = parseInt(myAge) - parseInt(yourAge)
let ageDifferenceCOrection = -ageDifference

if (parseInt(myAge) < parseInt(yourAge)) {
    console.log(`You are ${ageDifferenceCOrection} years older than me`)
    alert(`You are ${ageDifferenceCOrection} years older than me`)
} else {
    console.log(`I am ${ageDifference} years older than you `)
    alert(`I am ${ageDifference} years older than you `)
}

//Q3:
let a = 4
let b = 3
if (a > b) {                                         //If..else method
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}
a > b                                               //Ternary operator
? console.log(`${a} is greater than ${b}`)
: console.log(`${b} is greater than ${a}`)

// Q4:
let evenNum = prompt('Q4: Test to see if a num is even or not', 'Enter number ')

if (evenNum % 2 == 0) {
    console.log('The number is even')
    alert('The number is even')
} else {
    console.log('The number is odd')
    alert('The number is odd')
}



