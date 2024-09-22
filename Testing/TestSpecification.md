## Test Specification Document
### Introduction
This document outlines the test scenarios for the Validator module, focusing on password validation, name validation, email validation and age validation. It is designed to ensure the module meets all functional requirements and handles edge cases gracefully.

### Test Environment
- Hardware Requirements: No specific hardware requirements; tests can be run on any standard computer.
- Software Requirements: Web browser (e.g., Chrome, Firefox), internet access.
<!-- - Tools: Jest for automated testing, Postman for API testing. -->

# Test Cases

## Test Suite: Password validation

### Test Case 1.1: Successful Password Validation
- Objective: Verify that a valid password passes all validation rules.
- Input: Enter password: "ValidPass1!"
- Expected Output: The password should pass all validation checks (minimum length, includes a number, uppercase, lowercase, and special character).
  Result: "Password is valid"

### Test Case 1.2: Failed Validation - Password Too Short
- Objective: Ensure the system detects passwords that are too short.
- Input: Enter password: "Pass1!"
- Expected Output: The password should fail the length check (less than 8 characters).
  Result: "Password must be at least eight characters long"

### Test Case 1.3: Failed Validation - No Number
- Objective: Ensure the system detects passwords without a number.
- Input: Enter password: "Password!"
- Expected Output: The password should fail the check for at least one digit.
  Result: "The password must contain at least one number"

### Test Case 1.4: Failed Validation - No Uppercase Letter
- Objective: Ensure the system detects passwords without an uppercase letter.
- Input: Enter password: "password1!"
- Expected Output: The password should fail the check for at least one uppercase letter.
  Result: "The password must contain at least one uppercase letter"

### Test Case 1.5: Failed Validation - No Lowercase Letter
- Objective: Ensure the system detects passwords without a lowercase letter.
- Input: Enter password: "PASSWORD1!"
- Expected Output: The password should fail the check for at least one uppercase letter.
  Result: "The password must contain at least one uppercase letter"

### Test Case 1.6: Failed Validation - No Special Character
- Objective: Ensure the system detects passwords without a special character.
- Input: Enter password: "Password1"
- Expected Output: The password should fail the check for at least one special character.
  Result: "The password must contain at least one special character"

### Test Case 1.7: Failed Validation - Dangerous Characters
- Objective: Ensure the system detects passwords that contain dangerous characters.
- Input: Enter password: "Password1<>"
- Expected Output: The password should fail the check for dangerous characters.
  Result: "Password contains the following dangerous characters: <, >"



## Test Suite: Email validation

### Test Case 2.1: Successful Email Validation
- Objective: Verify that a valid email passes the validation rules.
- Input: Enter email: "erik@example.com"
- Expected Output: The email should pass all validation checks (contains "@" and ".").
  Result: "Email is valid"

### Test Case 2.2: Failed Validation - Missing "@" Symbol
- Objective: Ensure the system detects missing "@" in the email.
- Input: Enter email: "erikexample.com"
- Expected Output: The email should fail the "@" symbol check.
  Result: "Email must contain the @ symbol"

### Test Case 2.3: Failed Validation - Missing "." Symbol
- Objective: Ensure the system detects missing "." in the email.
- Input: Enter email: "erik@examplecom"
- Expected Output: The email should fail the "." symbol check.
  Result: "Email must contain the . symbol"





## Test Suite: Name validation

### Test Case 3.1: Successful Name Validation
- Objective: Verify that a valid name passes the validation rules.
- Input: Enter name: "Erik"
- Expected Output: The name should pass all validation checks (minimum length, no numbers, no special characters).
  Result: "Name is valid"

### Test Case 3.2: Failed Validation - Name Too Short
- Objective: Ensure the system detects when the name is too short.
- Input: Enter name: "E"
- Expected Output: The name should fail the length check (less than 2 characters).
  Result: "Name is too short"

### Test Case 3.3: Failed Validation - Name Contains Number
- Objective: Ensure the system detects numbers in the name.
- Input: Enter name: "Erik123"
- Expected Output: The name should fail the number check.
  Result: "Name cannot include numbers"

### Test Case 3.4: Failed Validation - Name Contains Special Character
- Objective: Ensure the system detects special characters in the name.
- Input: Enter name: "Erik!@#"
- Expected Output: The name should fail the special character check.
  Result: "Name cannot include special characters"




## Test Suite: Age validation

### Test Case 4.1: Successful Age Validation
- Objective: Verify that a valid age passes the validation rules.
- Input: Enter age: "25"
- Expected Output: The age should pass all validation checks (only numbers, no letters, max three digits).
  Result: "Age is valid"

### Test Case 4.2: Failed Validation - Age Contains Letters
- Objective: Ensure the system detects letters in the age input.
- Input: Enter age: "25a"
- Expected Output: The age should fail the check for letters.
  Result: "Age cannot include letters"

### Test Case 4.3: Failed Validation - Age Contains No Numbers
- Objective: Ensure the system detects when there are no numbers in the input.
- Input: Enter age: "abc"
- Expected Output: The age should fail the check for numbers.
  Result: "Age must include at least one number"

### Test Case 4.4: Failed Validation - Age Contains More Than Three Digits
- Objective: Ensure the system detects when the age input has more than three digits.
- Input: Enter age: "1234"
- Expected Output: The age should fail the check for length.
  Result: Result: "Age cannot contain more than three numbers"