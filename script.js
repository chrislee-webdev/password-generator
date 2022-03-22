// Assignment code here
var upperCase = ["A", "B", "C" ,"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar = ["!", "@", "#", "$", "%", "^","&", "*", "(", ")", "-", "_", "=", "+","[", "]", "{", "}", "|", ";", ":", "<", ">", ",", ".", "/", "?", "`", "~"];

function criteria() {
  var length = parseInt(window.prompt("Enter your desired password length?"));
    if (length < 8 || length > 128) {
      window.prompt("Password must be bewteen 8 and 128 characters long. Please try again.")
    }

  var upperCaseLetters = window.confirm("Do you want to include capital letters?");

  var lowerCaseLetters = window.confirm("Do you want to include lower case letters?");

  var specialCharacters = window.confirm("Do you want to include special characters?");
};

criteria();
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
