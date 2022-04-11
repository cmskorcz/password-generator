// Assignment code here

// Set up array of alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Initialize empty newPassword array and passwordParam
let newPassword = [];

let passwordParam = {
  length: "",
  includeLower: true,
  includeUpper: false,
  includeNum: false,
  includeSpecial: false
};

// Turns array into string, removing commas
function stringifyPassword(pass) {
  return pass.toString().replace(/,/g, "");
}

// Maps over array and then randomly assigns the letter with either upper or lower case. Returns a new array containing variations.
function mixedCase(pass) {
  let mixedArray = pass.map((letter) => {
    if (Math.random() > 0.5) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  return mixedArray;
}

// Generate Password
function generatePassword() {

  // Reset newPassword array and passwordParam
  newPassword = [];
  passwordParam.length = "";
  passwordParam.includeLower = true;
  passwordParam.includeUpper = false;

  // Specify character length of password
  passwordParam.length = prompt("Enter how many characters you would like your password to be. Length must be between 8 and 128 characters.")

  // Check if prompt value is a number between 8 and 128
  if (parseInt(passwordParam.length) >= 8 && parseInt(passwordParam.length) <= 128) {

    // Confirm Lower Case
    passwordParam.includeLower = confirm("Would you like your password to contain lowercase letters?");
    
    // Confirm Upper Case
    passwordParam.includeUpper = confirm("Would you like your password to contain uppercase letters?");

    // Map over alphabet array using length as limit
    for (let i = 0; i < passwordParam.length; i++) {

      // Pushes random letter from alphabet array to newPassword array with each loop
      let letter = Math.floor(Math.random() * 26);
      newPassword.push(alphabet[letter]);
    };

  } else {
    
    // If valid num not entered, alert user and restart function
    alert("Please enter a valid length")
    generatePassword();
  };

  // newPassword is converted to string and commas are removed, string is then adjusted for case

  // Both Upper and Lower Case
  if (passwordParam.includeLower && passwordParam.includeUpper) {
    newPassword = stringifyPassword(mixedCase(newPassword));
    return newPassword;

  // Lower Case Only
  } else if (passwordParam.includeLower && !passwordParam.includeUpper) {
    newPassword = stringifyPassword(newPassword);
    return newPassword.toLowerCase();

  // Upper Case Only
  } else if (!passwordParam.includeLower && passwordParam.includeUpper) {
    newPassword = stringifyPassword(newPassword);
    return newPassword.toUpperCase();
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
