# Basic Banking System
## Introduction
Basic Banking System is a modular, Object-Oriented program that has basic functions from the previous program of **Bank Account** such as performing addition and subtraction on an account's balance. The program use classes to handle all of the operations. The main goal of the program is to provide a basic calculation by creating an account object, calling inherited functions to perform either depositing or withdrawing balance and sanitize input by handling common input errors.

## Functionality
The program has a main class of `DepositType` inherited from `BankAccount`. The main class provide a function for returning a current account's balance alongside its date of opening, interest rate and tenors while the inherited class provide functions for withdrawal and deposit of balance. The inherited functions also have input validations by using a custom error class named `AmountError` that will throw errors when the withdrawal exceeded the current account's balance or value inputted aren't valid numbers such as zero, negative or non numerical.

## Functions Flow
### Withdraw
When a user selected withdraw process, user will be prompted to input the amount of withdrawal. If the amount inputted is not a valid number (e.g. zero, negative or non numerical), user will be alerted with an error message that is suitable. If however the amount is valid, the account's balance will be subtracted and finally be displayed on the main page.

### Deposit
When a user selected withdraw process, user will be prompted to input the amount of deposit. If the amount inputted is not a valid number (e.g. zero, negative or non numerical), user will be alerted with an error message that is suitable. If however the amount is valid, the account's balance will be added and finally be displayed on the main page.

### Savings Information
When a user selected savings information, the page will display current account's savings information that has the following information: 
- Opening Date
- Type of Deposit
- Interest Rate
- Tenors
- Balance

## Tech Stack Used
The program only use a plain JavaScript and HTML for displaying the buttons and outputs.

## Setup
In order to do demo, clone the project by typing this command into the terminal: 
```
git clone https://github.com/L4rryToru4n/bankaccount-binar-academy-be-chapter-02.git
```
or download the project then extract the .zip file.

## Usage Instructions
After downloading or cloning the repository, open the directory project using a browser and type `index.html` to view the program. For performing a calculation, input any numbers in the input box then either click `Tambah Saldo` button or `Kurangi Saldo` button. The result should be then displayed above the input elements.
