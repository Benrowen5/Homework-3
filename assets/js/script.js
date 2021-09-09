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
// Password criteria selection variables
var getLength = "";
var lowerCase = "";
var upperCase = "";
var numbers = "";
var specialConfirm = "";

var getLength = function() { 
    while (length === "" || length === null) {
        length = prompt("How many characters would you like for your password to be? Please enter a value between 8 and 128.");
    }
    if (length >= 8 && length <= 128) {
      console.log("chosen password length is " + length);
      return length;
    }
    else {
      alert("Please enter a valid password length.")
      getLength();
    }  
};

var lowerCaseConfirm = function() {
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
  
    while (specialConfirm === "" || specialConfirm === null) {
      specialConfirm = confirm("Do you want to include special characters?");
      return specialConfirm;
    }

};  

var generatePassword = function() {
  // debugger;  
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
