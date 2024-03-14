// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from "../data/data";

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let usersWithLetter = [];
    for (let users of array) {
      for (let char of users.name) {
        if (char.toLowerCase() === letter){
          usersWithLetter.push(users.name);
        }
      }
    }
  return  usersWithLetter;
}
getClientsWithLetterInName(bankAccounts, 'c');

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
