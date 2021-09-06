// Assignment code here

var getLength = function() { 
    var length = "";
    while (length === "" || length === null) {
        length = prompt("How many characters would you like for your password to be? Please enter a value between 8 and 128.");
    }
    if (length >= 8 && length <= 128) {
      console.log("chosen password length is " + length);
      return length;
    }
    else {
      alert("Please enter a valid password length.")
      getPasswordLength();
    }  
};

var lowerCaseConfirm = function() {
  var lowerCase = "";
    while (lowerCase === "" || lowerCase === null) {
      lowerCase = confirm("Do you want to include lower case characters?");
    }
    if (lowerCase) {
        console.log("lower case characters will be used.");
        return lowerCase;
    } else {
      console.log("lower case characters will not be used.");
    }
};
    
    
var upperCaseConfirm = function() {
  var upperCase = "";
    while (upperCase === "" || upperCase === null) {
      upperCase = confirm("Do you want to include upper-case characters?");
    }
    if (upperCase) {
        console.log("Upper case characters will be used.");
        return upperCase;
    } else {
      console.log("upper case characters will not be used.");
    }
};

var numericConfirm = function(){
  var numerics = "";
    while (numerics === "" || numerics === null) {
      numerics = confirm("Do you want to include numeric characters?");
    }
    if (numerics) {
        console.log("Numeric characters will be used.");
        return numerics;
    } else {
      console.log("Numeric characters will not be used.");
    }
};
    
var specialConfirm = function() {
  var specialConfirm = "";
    while (specialConfirm === "" || specialConfirm === null) {
      specialConfirm = confirm("Do you want to include numeric characters?");
    }
    if (specialConfirm) {
        console.log("Special characters will be used.");
        return specialConfirm;
    } else {
      console.log("Special characters will not be used.");
    }
};  

var generatePassword = function() {
  debugger;  
  getLength();
  lowerCaseConfirm();
  upperCaseConfirm();
  numericConfirm();
  specialConfirm();
}

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
