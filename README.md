# Password Generator

## Purpose
The purpose of this project was to create a password generator that creates a random password from a range of specifications confirmed by the user.

## Implementation

### Password Length

This is acheived when a user clicks the generate password button. When clicked, the `generatePassword()` function is ran, and a prompt will display in the browser asking a user to input how many characters the password should consist of. This prompt accepts an integer between 8 and 128, and saves the integer to `passwordParam` object as `passwordParam.length`. When an integer is submitted to the prompt, it is first checked whether it is greater than or equal to 8, or less than or equal to 128. If the integer does not meet these specifications, the user is alerted, and `generatePassword()` function is returned to restart the function.

### Included Characters

If the input meets specifications, a user is then prompted with a total of 4 confirmation prompts on what type of characters should be included in the password. These types include: lower case, upper case, number, and special characters. If a user confirms to indlude a specific character type, the type's corresponding variable, i.e. `passwordParam.includeUpper` will have it's value changed to `true`. If not, the value is changed to `false`.

### Generating the `newPassword` Array

After all 4 confirmations prompts have been answered, the values of `includeLower includeUpper includeNum includeSpecial` within the `passwordParam` object are by passed through a string of if/else statements. When the values are matched with their corresponding statement, a function is ran in order to generate an array containing the specified characters.

Characters are taken from their specified arrays: `alphabet numbers symbols`. When only a single character type is choses, i.e. only letters, or only numbers, the corresponding array is mapped over via a for-loop with `passwordParam.length` being the terminator.  