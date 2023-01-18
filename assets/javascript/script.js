// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // ask the user about password options and validate the first input for the password's length and the data type of the input
  let numberOfChars = Number(prompt("How many characters would you like in your password? Please enter a number between 10 and 64:"));
  if (numberOfChars < 10 || numberOfChars > 64 || isNaN(numberOfChars) || !Number.isInteger(numberOfChars)) {
    alert("Invalid input. Please enter a number between 10 and 64 including these 2 numbers.");
    getPasswordOptions();
  }
  let lowerCaseChars = confirm("Would you like lower case characters in your password?");
  let upperCaseChars = confirm("Would you like upper case characters in your password?");
  let numericChars = confirm("Would you like numeric characters in your password?");
  let specialChars = confirm("Would you like special characters in your password?");
  // checking if at least one character type is selected
  if (lowerCaseChars === false && upperCaseChars === false && numericChars ===  false && specialChars === false) {
    alert("Invalid input. Please, choose at least one character group and enter the number of characters again!");
    getPasswordOptions();
    }
    let passWordOptions = [numberOfChars, lowerCaseChars, upperCaseChars, numericChars, specialChars];
    return passWordOptions;
}

// Function for getting a random element from an array
function getRandom(randomArray) {
  let randomIndex = Math.floor(Math.random()*randomArray.length);
  return randomArray[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  // call getPasswordOptions() to get the passwordOptions array and save it in the passwordArrays variable
  let passwordArrays = getPasswordOptions();
  let arrayOptions = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters];
  // create an empty array to filter the arrayOptions array and put just the true values inside
  // so when we select a random array in order to pick a random element from there we already have just those arrays
  // that the user wants to select from
  let filteredArray = [];
  for (let i = 1; i < passwordArrays.length; i++) {
    if (passwordArrays[i]===true) {
      filteredArray.push(arrayOptions[i-1]);
    }
  }
  // pick a random element from the random array and concatenate with the password string
  for (let i = 0; i < passwordArrays[0]; i++) {
    password+=getRandom(filteredArray[Math.floor(Math.random()*filteredArray.length)]);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);