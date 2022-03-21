// Q1 and Q2:
let monthInput = prompt('Level3, Q1: Check number of days in a month', 'Insert month')
let monthInputTextCase = monthInput.toLowerCase()
switch (monthInputTextCase) {
    case 'january':
    case 'january'.toUpperCase():
    case 'march':
    case 'march'.toUpperCase():
    case 'may':
    case 'may'.toUpperCase():
    case 'july':
    case 'july'.toUpperCase():
    case 'august':
    case 'august'.toUpperCase():
    case 'october':
    case 'october'.toUpperCase():
    case 'december':
    case 'december'.toUpperCase():
        alert(`${monthInputTextCase} has 31 Days`)
        console.log(`${daySwitch} has 31 Days`)  
        break;
    case 'september':
    case 'september'.toUpperCase():
    case 'april':
    case 'april'.toUpperCase():
    case 'june':
    case 'june'.toUpperCase():
    case 'november':
    case 'november'.toUpperCase():
        alert(`${monthInputTextCase} has 30 Days`)
        console.log(`${daySwitch} has 30 Days`)  
        break;
    case 'february':
    case 'february'.toUpperCase():
        alert(`${monthInputTextCase} has 28 Days, except on leap years (29)`)
        console.log(`${daySwitch} has 28 Days, except on leap years (29)`)  
        break;
    default:
        alert(`${monthInputTextCase} is not a month`)
        console.log(`${daySwitch} is not a month`)  
}

