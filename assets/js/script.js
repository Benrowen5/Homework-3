// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array that includes each character array
var allCharactersSelected = [];

// set global variables
var length = "";
var lowerCaseConfirm = "";
var upperCaseConfirm = "";
var numericConfirm = "";
var specialConfirm = "";

// empty array for setting password characters to.
var pass = []; 

// Regexp to check for matching criteria in password created
const regexForDigit = /(\d{1})/;
const regexForSpecial = /(\W{1})/
const regexForLowerCase = /([a-z]{1})/;
const regexForUpperCase = /([A-Z]{1})/;

// function to get desired password length.
var getLength = function() {
  length = parseInt(prompt("Please enter desired password length. Value must be between 8 and 128."));
  if (length < 8 || length > 128) {
    alert("Please enter a value between 8 and 128.")
    getLength();
  }
  if (Number.isNaN(length)) {
      alert("A numeric value must be entered.");
      getLength();
  }
};

// function to set desired character types
var getCriteria = function () {

  // resets selection confirmation if page is not refreshed;
  lowerCaseConfirm = false;
  upperCaseConfirm = false;
  numericConfirm = false;
  specialConfirm = false;

  // confirmations for characters to be used.
  lowerCaseConfirm = confirm("Do you want to include lower case characters?");
  upperCaseConfirm = confirm("Do you want to include upper-case characters?");
  numericConfirm = confirm("Do you want to include numeric characters?");
  specialConfirm = confirm("Do you want to include special characters?");
  
  // check to ensure at least 1 type of character was selected. 
  if (!lowerCaseConfirm && !upperCaseConfirm && !numericConfirm && !specialConfirm) {
    alert("You must use at least one type of character!")
    getCriteria();
  }

  // combine selected characters into 1 array.
  // resets selected characters array if page is not refreshed.
  allCharactersSelected = [];
  if (lowerCaseConfirm) {
    allCharactersSelected = allCharactersSelected.concat(lowerCasedCharacters);
  }
  if (upperCaseConfirm) {
    allCharactersSelected = allCharactersSelected.concat(upperCasedCharacters);
  }
  if (numericConfirm) {
    allCharactersSelected = allCharactersSelected.concat(numericCharacters);
  }
  if (specialConfirm) {
    allCharactersSelected = allCharactersSelected.concat(specialCharacters)
  }
};

// function to generate password string.
function passwordLoop() {
  // reset pass array.
  pass = [];
  for (var i = 0; i < length; i++) {
    // generates a random index and stores the character from the allCharacters array to a new array.
    pass += allCharactersSelected[Math.floor(Math.random()*allCharactersSelected.length)];
    }
  return pass;
};

// function to ensure all characters selected to be included are present in generated password.
function regexCheck() {
  if (lowerCaseConfirm) {
    if (!pass.match(regexForLowerCase)){
      passwordLoop(); 
      regexCheck();
    }
  };

  if (upperCaseConfirm) {
    if (!pass.match(regexForUpperCase)) {
      passwordLoop();
      regexCheck();
    }
  }; 
  
  if (numericConfirm) {
    if (!pass.match(regexForDigit)) {
      passwordLoop();
      regexCheck();
    }
   };

  if (specialConfirm) {
    if (!pass.match(regexForSpecial)) {
      passwordLoop();
      regexCheck();      
    }
   };
};

// Calls all functions and returns generated password.
var generatePassword = function() {
  getLength();
  getCriteria();
  passwordLoop();
  regexCheck(pass);
  return pass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

