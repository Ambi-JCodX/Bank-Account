
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
let wrongBalanceAccounts = [];
  for (let i = 0; i < array.length; i++) {
    let sumDeposits = 0;
    let sumWithdrawals = 0;
      if (array[i].withdrawals && array[i].deposits) {
        for (let x = 0; x < array[i].deposits.length; x++) {
          sumDeposits += array[i].deposits[x];
        }
        for (let j = 0; j < array[i].withdrawals.length; j++) {
          sumWithdrawals += array[i].withdrawals[j];
        }
        let balances = sumDeposits - sumWithdrawals;
          if (array[i].balance !== balances) {
            wrongBalanceAccounts.push(array[i]);
          }
      }
    } 
  return wrongBalanceAccounts;
}
getClientsWithWrongBalance(bankAccounts);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
