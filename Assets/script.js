// Global Variable
var newParameter = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password into a parameter
function generatePassword () {
  var password = [];
  getParameters();  
  // add 1 random character to password
  for (var i = 0; i <length; i++) {
    var pickParameter = [];
    pickParameter = newParameter[Math.floor(Math.random() * newParameter.length)];
    password.push(pickParameter);
  }
  var passwordString;
  passwordString = password.join("");
  document.getElementById("password").textContent = passwordString;
  return passwordString;
}

// get parameters from user
function getParameters() {
  var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
  var availableChar = [];
  // set length via prompt
  var length = Number(window.prompt("Input length of the password?", ""));
  if (!length || length == null) {
    alert("Wrong format!");
    return;
  }

  if (length < 8 || length > 128) {
    alert("The length must be at least 8 characters and no more than 128 characters!");
  } else {
    var inputLow = window.confirm("Do you want to include lowercase?");
    var inputUpper = window.confirm("Do you want to include uppercase?");
    var inputNum = window.confirm("Do you want to include numeric?");
    var inputSpecial = window.confirm("Do you want to include special characters?");
    if(inputLow) {
      availableChar = availableChar.concat(lowerChar);
    }
    if(inputUpper) {
      availableChar = availableChar.concat(upperChar);
    }
    if(inputNum) {
      availableChar = availableChar.concat(numberChar);
    }
    if(inputSpecial) {
      availableChar = availableChar.concat(specialChar);
    }
    if (!inputLow && !inputUpper && !inputNum && !inputSpecial)
    {
      alert("You must include one character type!");
      return;
    }
  }  
    newParameter = availableChar;
    return availableChar;
}