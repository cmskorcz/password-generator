# Password Generator

## Purpose
The purpose of this project was to create a password generator that creates a random password from a range of specifications confirmed by the user.

## Implementation

### Password Length

This is acheived when a user clicks the generate password button. When clicked, the `generatePassword()` function is ran, and a prompt will display in the browser asking a user to input how many characters the password should consist of. This prompt accepts an integer between 8 and 128, and saves the integer to `passwordParam` object as `passwordParam.length`. When an integer is submitted to the prompt, it is first checked whether it is greater than or equal to 8, or less than or equal to 128. If the integer does not meet these specifications, the user is alerted, and `generatePassword()` function is returned to restart the function.

### Included Characters

If the input meets specifications, a user is then prompted with a total of 4 confirmation prompts on what type of characters should be included in the password. These types include: lower case, upper case, number, and special characters. If a user confirms to indlude a specific character type, the type's corresponding variable, i.e. `passwordParam.includeUpper` will have it's value changed to `true`. If not, the value is changed to `false`. If all values are `false`, and alert is presented to the user stating that one parameter must be selected in order for a password to be generated. The `generatePassword()` function is then returned and restarted.

### Generating the `newPassword` Array

After all 4 confirmations prompts have been answered, the values of `includeLower includeUpper includeNum includeSpecial` within the `passwordParam` object are by passed through a string of if/else statements. When the values are matched with their corresponding statement, a function is ran in order to generate an array containing the specified characters.

Characters are taken from their specified arrays: `alphabet numbers symbols`. When only a single character type is chosen, i.e. only letters, or only numbers, the corresponding array is mapped over via a for-loop with `passwordParam.length` being the terminator. For every pass through the loop, `Math.floor(Math.random() * array.length)`, where the `array.length` is the length of the corresponding character array, is saved as a variable. This varaible is then used as the index to select a character from the specified character array. The indexed character is then pushed onto the `newPassword` array.

If multiple character types are chosen, i.e. letters AND numbers, a for-loop is generated in similar fashion to single character types, but an if/else statement is introduced. For example, in the `alphaNum()` function, if `Math.random()` is less than 0.5, the `alphabet` array will be mapped and a single letter will be pushed to the `newPassword` array in a similar fashion to a single character type password functions. On the next pass through the loop, if `Math.random()` were to then be greater than or equal to 0.5, then the `numbers` array would be mapped, with the single indexed number being pushed onto the `newPassword` array. This loop continues until `passwordParam.length` is reached. 

The process is similar if all three character types are chosen with the if statement cut-offs being `if (Math.random() < (1/3))`, and `else if ((1/3) >= Math.random() < (2/3))`.

### Generating Password String

Once the `newPassword` array is completed, the array is passed to the `stringifyPassword()` function. The `.toString()` method is called on the array in order to convert the array into a string. The `.replace(/,/g, "")` method with the corresponding arguments is then called on the resulting string in order to replace all commas with empty space. This ensures the password does not contain any unwanted commas. Because this removes commas, and commas are included in the `symbol` array, this may result in commas being unable to be included in the final password. The result is saved at `newPassword`

### Letter Casing

#### Lower Case OR Upper Case Only

The value of `newPassword` after being returned from `stringifyPassword()` then has a method of either `.toLowerCase()` or `.toUpperCase()` called, depending on the user specification. The result is returned as the final `newPassword` and posted to the page.

#### Lower Case AND Upper Case
The value of the `newPassword` array, after being mapped from the specified character arrays, is then passed to the `mixedCase()` function. This function maps over the `newPassword` array with a for-loop with `newPassword.length` as the terminator. For each pass of the loop, an if/else conditional is used to determine if the letter should be lower or upper case using `Math.random() > 0.5`. The resulting character is first converted into a string via `.toString()`. This is done in case the indexed character is a number or special character. The methods `.toLowerCase()` or `to.UpperCase()` are then called on the resulting string depending on the result of `Math.random`. Because any number or special character was made into a string prior, the character will remain unchanged and pass through without issue. Because `mixedCase()` returns an array of strings, it must still be passed to `stringifyPassword()` afterwords in order to convert the `newPassword`.

## Deployed Project
