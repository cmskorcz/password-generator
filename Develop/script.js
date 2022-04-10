// Assignment code here

// Set up array of alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Initialize empty newPassword array and characterLength
let newPassword = [];
let characterLength = ""

let passwordParam = {
  length: 8,
  includeLower: false,
  includeUpper: false,
  includeNum: false,
  includeSpecial: false
};

// Generate Password
function generatePassword() {

  // Reset newPassword array and characterLength
  newPassword = [];
  characterLength = ""

  // Specify character length of password
  characterLength = prompt("Enter how many characters you would like your password to be. Length must be between 8 and 128 characters.")

  // Check if prompt value is a number between 8 and 128
  if (parseInt(characterLength) >= 8 && parseInt(characterLength) <= 128) {
    
    // Map over alphabet array using characterLength as limit
    for (let i = 0; i < characterLength; i++) {

      // Pushes random letter from alphabet array to newPassword array with each loop
      let letter = Math.floor(Math.random() * 27);
      newPassword.push(alphabet[letter]);
    };

  } else {
    
    // If valid num not entered, alert user and restart function
    alert("Please enter a valid length")
    generatePassword();
  };

  // newPassword is converted to string and commas are removed, then value returned
  return newPassword.toString().replace(/,/g, "");
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
