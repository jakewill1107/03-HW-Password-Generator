// Assignment Code Below

// Assigns the generate html button as a variable to work with in js
var generateBtn = document.querySelector("#generate");

// Creating arrays of possible inputs and misc. variables to be used later in js
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "x",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "X",
  "Z",
];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
];
var numericChoice;
var upperCaseChoice;
var lowerCaseChoice;
var specialCharacterChoice;

/* Instigates a prompt window, checks to make sure that an input is entered, that input is a number value, and that number value is between 8 and 128 */
function generatePassword() {
  var userInput = prompt(
    "Please choose a password length between 8 and 128 characters"
  );
  var length = userInput;
  if (!userInput) {
    alert("Input is required");
    return;
  } else if (isNaN(length)) {
    alert("Number value is required");
    return;
  } else if (length < 8 || length > 128) {
    alert("Must be between 8 and 128");
    return
  } else if (length >= 8 && length <= 128) {
    
    numericChoice = window.confirm("Should the password include numbers?");
    lowerCaseChoice = window.confirm(
      "Should the password include lowercase letters?"
    );
    upperCaseChoice = window.confirm(
      "Should the password include uppercase letters?"
    );
    specialCharacterChoice = window.confirm(
      "Should the password include special characters?"
    );

     if (
      !numericChoice &&
      !lowerCaseChoice &&
      !upperCaseChoice &&
      !specialCharacterChoice
    ) {alert("Inputs are required for password generation");
  return   
  }

 

  var userChoices = [];
  if (numericChoice) {
    userChoices = userChoices.concat(numbers);
  }
  if (lowerCaseChoice) {
    userChoices = userChoices.concat(lowerCaseLetters);
  }
  if (upperCaseChoice) {
    userChoices = userChoices.concat(upperCaseLetters);
  }
  if (specialCharacterChoice) {
    userChoices = userChoices.concat(specialCharacters);
  }

  var newPassword = [];
  for (var i = 0; i < length; i++) {
    newPassword.push(
      userChoices[Math.floor(Math.random() * userChoices.length)]
    );
  }
  return newPassword.join('')
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


