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
var allCharactersSelected = "";


var length = "";
var lowerCaseConfirm = "";
var upperCaseConfirm = "";
var numericConfirm = "";
var specialConfirm = "";

var result = "";


var getUserInput = function () {
  length = parseInt(prompt("Please enter desired password length. Value must be between 8 and 128."));
    if (length >= 8 && length <=128) {
      console.log("Chosen password length is " + length + " .");
      console.log(length);
    } else if (Number.isNaN(length)) {
      alert("a numeric value must be entered");
      return null;
    }
    else {
      alert("Please enter a value between 8 and 128.")
      return null;
    }
  lowerCaseConfirm = confirm("Do you want to include lower case characters?");
    if (lowerCaseConfirm) {
      console.log("lower case characters will be used")
    } else {
      console.log("lower case characters will not be used.");
    }
  upperCaseConfirm = confirm("Do you want to include upper-case characters?");
    if (upperCaseConfirm) {
      console.log("Upper case characters will be used.");
    } else {
      console.log("upper case characters will not be used.");
    }
  numericConfirm = confirm("Do you want to include numeric characters?");
    if (numericConfirm) {
      console.log("Numeric characters will be used.");
    } else {
      console.log("Numeric characters will not be used.");
    }
  specialConfirm = confirm("Do you want to include special characters?");
    if (specialConfirm) {
      console.log("Special characters will be used.");
    } else {
      console.log("Special characters will not be used.")
    } 
  if (!lowerCaseConfirm && !upperCaseConfirm && !numericConfirm && !specialConfirm) {
    alert("You must use at least one type of character!")
    getUserInput();
  }
};

// user input values are now available globally
// create a function which uses the user's input to create a random character of all selected options for each location in the length
// the loop needs to identify what character types are confirmed / true.
// the loop needs to generate a random character from the confirmed characters arrays, for each character for length number of characters.

// generates a random lowercase password of input length.
var createPassword = function () {
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
  console.log(allCharactersSelected); 
  
  for (var i = 0; i < length; i++) {
    result = result.push(Math.floor(Math.random()*allCharactersSelected.length));
    console.log(result);
  }
};






var generatePassword = function() {
  debugger;
  getUserInput();
  createPassword();
  alert(result);
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

