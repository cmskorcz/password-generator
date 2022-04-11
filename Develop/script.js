// Assignment code here

// Set up array of alphabet and numbers
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

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
function mixedCase(array) {
  let mixedArray = array.map((letter) => {
    if (Math.random() > 0.5) {
      return letter.toString().toUpperCase();
    } else {
      return letter.toString().toLowerCase();
    }
  });
  return mixedArray;
}

  // Map over alphabet array using length as limit
function mapAlphabet(array) {
  for (let i = 0; i < passwordParam.length; i++) {

    // Pushes random letter from alphabet array to newPassword array with each loop
    let letter = Math.floor(Math.random() * 26);
    array.push(alphabet[letter]);
  };
  return array;
}

// Map over number array using length as limit
function mapNumber(array) {
  for (let i = 0; i < passwordParam.length; i++) {
    let num = Math.floor(Math.random() * 10);
    array.push(numbers[num]);
  }
  return array;
}

// Map over symbol array
function mapSymbol(array) {
  for (let i = 0; i < passwordParam.length; i++) {
    let sym = Math.floor(Math.random() * symbols.length);
    array.push(symbols[sym]);
  }
  return array;
}

// Map randomly over number and alphabet array
function alphNum(array) {
  for (let i = 0; i < passwordParam.length; i++) {
    if (Math.random() < 0.5) {
      let letter = Math.floor(Math.random() * 26);
      array.push(alphabet[letter]);
    } else {
      let num = Math.floor(Math.random() * 10);
      array.push(numbers[num]);
    }
  }
  return array;
}

// Map randomly over symbols and alphabet array
function symAlpha(array) {
  for (let i = 0; i < passwordParam.length; i++) {
    if (Math.random() < 0.5) {
      let letter = Math.floor(Math.random() * 26);
      array.push(alphabet[letter]);
    } else {
      let sym = Math.floor(Math.random() * symbols.length);
      array.push(symbols[sym]);
    }
  }
  return array;
}

// Map randomly over symbols and number array
function symNum(array) {
  for (let i = 0; i < passwordParam.length; i++) {
    if (Math.random() < 0.5) {
      let num = Math.floor(Math.random() * 10);
      array.push(numbers[num]);
    } else {
      let sym = Math.floor(Math.random() * symbols.length);
      array.push(symbols[sym]);
    }
  }
  return array;
}

// Map over all character arrays
function allChars(array) {
  for (let i = 0; i < passwordParam.length; i++) {
    if (Math.random() < (1/3)) {
      let letter = Math.floor(Math.random() * alphabet.length);
      array.push(alphabet[letter]);
    } else if ((1/3) <= Math.random() < (2/3)) {
      let num = Math.floor(Math.random() * numbers.length);
      array.push(numbers[num]);
    } else {
      let sym = Math.floor(Math.random() * symbols.length);
      array.push(symbols[sym]);
    }
  }
  return array;
}

// Generate Password
function generatePassword() {

  // Reset newPassword array and passwordParam
  newPassword = [];
  passwordParam.length = "";
  passwordParam.includeLower = true;
  passwordParam.includeUpper = false;
  passwordParam.includeNum = false;

  // Specify character length of password
  passwordParam.length = prompt("Enter how many characters you would like your password to be. Length must be between 8 and 128 characters.")

  // Check if prompt value is a number between 8 and 128
  if (parseInt(passwordParam.length) >= 8 && parseInt(passwordParam.length) <= 128) {

    // Confirm Lower Case
    passwordParam.includeLower = confirm("Would you like your password to contain lowercase letters?");
    
    // Confirm Upper Case
    passwordParam.includeUpper = confirm("Would you like your password to contain uppercase letters?");

    // Confirm Numbers
    passwordParam.includeNum = confirm("Would you like your password to contain numbers?");

    // Confirm Symbols
    passwordParam.includeSpecial = confirm("Would you like your password to contain special symbols?");

  } else {
    // If valid num not entered, alert user and restart function
    alert("Please enter a valid length")
    generatePassword();

  };

  // newPassword is converted to string and commas are removed, string is then adjusted for case

  // Upper, Lower, and Numbers
  if (passwordParam.includeLower && passwordParam.includeUpper && passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mixedCase(alphNum(newPassword)));
    return newPassword;
  
  // Upper and Lower Case
  } else if (passwordParam.includeLower && passwordParam.includeUpper && !passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mixedCase(mapAlphabet(newPassword)));
    return newPassword;

  // Lower Case Only
  } else if (passwordParam.includeLower && !passwordParam.includeUpper && !passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mapAlphabet(newPassword));
    return newPassword.toLowerCase();

  // Lower Case and Numbers
  } else if (passwordParam.includeLower && !passwordParam.includeUpper && passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(alphNum(newPassword));
    return newPassword.toLowerCase();
  
  // Upper Case Only
  } else if (!passwordParam.includeLower && passwordParam.includeUpper && !passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mapAlphabet(newPassword));
    return newPassword.toUpperCase();
  
  // Upper Case and Numbers
  } else if (!passwordParam.includeLower && passwordParam.includeUpper && passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(alphNum(newPassword));
    return newPassword.toUpperCase();
  
  // Numbers Only
  } else if (!passwordParam.includeLower && !passwordParam.includeUpper && passwordParam.includeNum && !passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mapNumber(newPassword));
    return newPassword;

  // Symbols Only
  } else if (!passwordParam.includeLower && !passwordParam.includeUpper && !passwordParam.includeNum && passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mapSymbol(newPassword));
    return newPassword;

  // Symbols and Lower
  } else if (passwordParam.includeLower && !passwordParam.includeUpper && !passwordParam.includeNum && passwordParam.includeSpecial) {
    newPassword = stringifyPassword(symAlpha(newPassword));
    return newPassword.toLowerCase();

  // Symbols and Upper
  } else if (!passwordParam.includeLower && passwordParam.includeUpper && !passwordParam.includeNum && passwordParam.includeSpecial) {
    newPassword = stringifyPassword(symAlpha(newPassword));
    return newPassword.toUpperCase();

  // Symbols, Upper, and Lower
  } else if (passwordParam.includeLower && passwordParam.includeUpper && !passwordParam.includeNum && passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mixedCase(symAlpha(newPassword)));
    return newPassword;

  // Symbols and Numbers
  } else if (!passwordParam.includeLower && !passwordParam.includeUpper && passwordParam.includeNum && passwordParam.includeSpecial) {
    newPassword = stringifyPassword(symNum(newPassword));
    return newPassword;

  // Symbols, Lower, Number

  // Symbols, Upper, Number

  // Symbols, Upper, Lower, Numbers
  } else if (passwordParam.includeLower && passwordParam.includeUpper && passwordParam.includeNum && passwordParam.includeSpecial) {
    newPassword = stringifyPassword(mixedCase(allChars(newPassword)));
    return newPassword;
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
