<!-- [![BCH compliance](https://bettercodehub.com/edge/badge/Carlton7/Bank_Tech_Test?branch=master)](https://bettercodehub.com/) -->

FPL
=================

## Description
* Calculate fpl scores on a weekly basis

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```


## My approach

#### Pre-code:
* I set up the project using Jasmine from the beginning for best practices purposes. I refered to my thermostat project to get me started.

Regarding the development process, I tried to stick to this flow as much as possible:
* Unit Tests
* Implementation
* Refactoring

#### Development:
git log commit history:

1. adding Jasmine/javascript framework and also tests and code for balance + deposit

2. adding test and code for withdraw method

3. added statement variable and tests. changed the deposit function to send a record to this to keep a log

4. adding ability for withdraw to add to the transactions record, updated tests

5. refactored code, added two decimal points to money and balance

6. further refactoring and using jslint on the code, date variable changed

7. refactored and renamed certain files, added detail to the readme and an images folder

## Edge Cases:
* Customer can withdraw more money than is available in the current account. I did not fix this as it was not stated, but mainly because an account can go into overdraft.

## Next focus:
* I would've liked to spend some more time on refactoring and thinking about other edge cases, like raising an exception if the amount passed is NaN.
* Test coverage would have been nice as well.

## How to run
To run this app - open the SpecRunner.html file or in the terminal and look at the console (under develop tab or right click page and inspect) in your browser. See image below for a demo on how to deposit/withdraw and check your statement.

## How to run the tests
Everything required to run Jasmine is within the lib folder. You just need to open ```SpecRunner.html``` in your browser to run the tests.

## Screenshots
### Account & Statement:
------

![Account & Statement](/images/account.png)

## Technologies used
* JSLint
* Jasmine
* Javascript