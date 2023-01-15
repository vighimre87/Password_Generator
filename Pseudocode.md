# Password generator

1. Ask the user how many characters (min. 10 - max. 64) they want in their password and save it in a variable -> validate user input

2. Ask the user if they want to include lower case letters and save it in a variable

3. Ask the user if they want to include upper case letters and save it in a variable

4. Ask the user if they want to include numeric characters and save it in a variable

5. Ask the user if they want to include special characters and save it in a variable

6. The user should choose at least one character type -> at least one of the userchoice should be true and the length of the caharcters should not be less than 10 or greater than 64 -> input validation

7. We need to save user choices in an array and return from the function

8. We need to create a function to get a random element from an array

9. Inside the generatePassword() method we need to create an empty string for the password and call the getRandom(randomArray) in order to select a random element from one of the array

Test cases:
lowercase, uppercase, numeric, special
lowercase
uppercase
numeric
special
lowercase, uppercase
lowercase, numeric
lowercase, special
uppercase, numeric
uppercase, special
numeric, special
lowercase, uppercase, numeric
lowercase, uppercase,
special
lowercase, numeric, special
uppercase, numeric, special
none