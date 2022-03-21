// Q1:
let testScore = prompt('Level2, Q1', 'Enter your Test score')
if (testScore <= 49) {
    alert('You got An F')
    console.log('You got An F')
} else if(testScore > 49, testScore <= 59) {
    alert('You got a D')
    console.log('You got a D')
} else if(testScore > 59, testScore <= 69){
    alert('You got a C')
    console.log('You got a C')
} else if(testScore > 69, testScore <= 79){
    alert('You got a B')
    console.log('You got a B')
} else if(testScore > 79, testScore <= 100){
    alert('You got an A')
    console.log('You got an A')
} else{
    alert('Input is not a number')
    console.log('Input is not a number')
}

// Q2:
let UserInput= prompt ('Level2, Q2: Check the weather', 'Insert month')
let userInputMnth = UserInput.toLowerCase()
switch (userInputMnth) {
    case 'september':
    case 'october':
    case 'november':    
        alert('The season is Autumn')
        break;
    case 'december':
    case 'january':
    case 'february': 
        console.log('The season is Winter')   
        alert('The season is Winter')
        break; 
    case 'march':
    case 'april':
    case 'may':  
    console.log('The season is Spring')  
        alert('The season is Spring')
        break; 
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Spring')    
        alert('The season is Summer')
        break; 
    default:
        console.log('Invalid request')    
        alert('Invalid request')
        break;
}
 
// Q3: 
let day = prompt('Level2, Q2: What is the day today?', 'e.g friday or friDay')
let daySwitch = day.toLowerCase()
switch (day) {
    case 'saturday':
    case 'saturDay':
    case 'sunday':
    case 'sunDay':
        alert(`${daySwitch} is a weekend`)
        console.log(`${daySwitch} is a weekend`)    
        break;
    case 'monday':
    case 'monDay':
    case 'tuesday':
    case 'tuesDay':
    case 'wednesday':
    case 'wednesDay':
    case 'thursday':
    case 'thursDay':
    case 'friday':
    case 'friDay':
        alert(`${daySwitch} is a working day`)
        console.log(`${daySwitch} is a working day`)
        break;       
    default:
        alert(`${daySwitch} is not valid`)
        console.log(`${daySwitch} is not valid`)  
}