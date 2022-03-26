// Assignment code here

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "\"", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "\\",";", ":", "\'", "<", ">", ",", ".", "/", "?", "~", "`" ]

function passwordLength() {
  //Ask how many characters the user wants
  var length = parseInt(prompt("Passwords must be between 8 and 128 characters. How many characters would you like?"));
  //Check to make sure user met required length and ask again if requirement is not met
  while (length < 8 || length > 128 || length == !"" || length === null || undefined) {
    length = parseInt(prompt("Please reenter desired password length"))
  }
};

// passwordLength();

function characterCriteria() {
  //Ask how many characters the user wants
  var length = parseInt(prompt("Passwords must be between 8 and 128 characters. How many characters would you like?"));
  //Check to make sure user met required length and ask again if requirement is not met
  while (length < 8 || length > 128 || length === "" || length === null) {
    length = parseInt(prompt("Please reenter desired password length"))
  }
  //Confirm uppercase letters
  var upperCaseLetters = window.confirm("Click OK if you would like to include uppercase letters")
  console.log(upperCaseLetters);
  //Confirm lowercase letters
  var lowerCaseLetters = window.confirm("Click OK if you would like to include lowercase letters")
  console.log(lowerCaseLetters);
  //Confirm numbers
  var numerals = window.confirm("Click OK if you would like to include numbers")
  console.log(numerals);
  //Confirm special characters
  var specialCharacters = window.confirm("Click OK if you would like to include special characters")
  console.log(specialCharacters);

  while (upperCaseLetters === false && lowerCaseLetters === false && numerals === false && specialCharacters === false) {
    alert("You must click OK on at least one of the following: uppercase letters, lowercase letters, numerals, special characters");
    upperCaseLetters = window.confirm("Click OK if you would like to include uppercase letters")
    lowerCaseLetters = window.confirm("Click OK if you would like to include lowercase letters")
    numerals = window.confirm("Click OK if you would like to include numbers")
    specialCharacters = window.confirm("Click OK if you would like to include special characters")
  }
  //Created variable and assigned object to it to hold user response
  var userCriteria = {
    lengthSelection: length,
    uppercaseSelection: upperCaseLetters,
    lowercaseSelection: lowerCaseLetters,
    numberSelection: numerals,
    specialSelection: specialCharacters
  }
  return userCriteria;
}

//Function to randomly get an index from an array
function randomGetter(arr1){
  var randomNum = Math.floor(Math.random() * arr1.length)
  var randomElement = arr1[randomNum]
  return randomElement;
};


function generatePassword() {
  //Created variable to hold all the responses from user about criteria
  var criteria = characterCriteria();
  console.log(criteria);
  var finalResult = [ ]
  var gauranteeCharacters = [ ]
  var possibleCharacters = [ ]
  if (criteria.uppercaseSelection) {
    possibleCharacters = possibleCharacters.concat(uppercase)
    gauranteeCharacters.push(randomGetter(uppercase))
  }
  if (criteria.lowercaseSelection) {
    possibleCharacters = possibleCharacters.concat(lowercase)
    gauranteeCharacters.push(randomGetter(lowercase))
  }
  if (criteria.numberSelection) {
    possibleCharacters = possibleCharacters.concat(numbers)
    gauranteeCharacters.push(randomGetter(numbers))
  }
  if (criteria.specialSelection) {
    possibleCharacters = possibleCharacters.concat(special) 
      gauranteeCharacters.push(randomGetter(special))
    }

    for (var i = 0; i < criteria.lengthSelection; i++) {
      var possibleCharacter = randomGetter(possibleCharacters)
      finalResult.push(possibleCharacter)
    }
    for (var i = 0; i < gauranteeCharacters.length; i++) {
      finalResult[i] = gauranteeCharacters[i]
    }
    return finalResult.join("")
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