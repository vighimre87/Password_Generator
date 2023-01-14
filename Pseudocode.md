# Password generator

1. Ask the user how many characters (min. 10 - max. 64) they want in their password and save it in a variable -> validate user input
2. Ask the user how many lowercase letters they want to include and save it in a variable -> validate user input and parse it to a number
3. Ask the user how many uppercase letters they want to include and save it in a variable -> validate user input parse it to a number
4. Ask the user how many numeric characters they want to include and save it in a variable -> validate user input parse it to a number
5. Ask the user how many special characters they want to include and save it in a variable -> validate user input parse it to a number
6. The user should choose at least one character type -> at least one of the userchoice should be more than 0;
7. We need to declare an empty array for user password and a variable to store the length of the user password
8. We need to create a random number between 0 and the length of userchoice, excluding the length of userchoice
