// Assignment code here

let passwordParam = {
  length: 8,
  includeLower: false,
  includeUpper: false,
  includeNum: false,
  includeSpecial: false
};

function generatePassword() {
  let characterLength = prompt("Enter how many characters you would like your password to be. Length must be between 8 and 128 characters.")

  if (parseInt(characterLength) >= 8 && parseInt(characterLength) <= 128) {
    console.log(characterLength);
  } else {
    alert("Please enter a valid length")
    generatePassword();
  }
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
