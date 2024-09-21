# Test Report for Validator Module

### Test Environment
- **Development Tools:** VSCode
- **Browser:** Google Chrome
- **Framework:** [HTML, JavaScript, Vite]

### Test Suite: Password Validation

#### Test Case 1.1: Successful Password Validation
**Objective:** Verify that a valid password passes all validation rules.
- **Input:** Enter password: "ValidPass1!"
- **Expected Output:** Password passes all validation checks (minimum length, includes a number, uppercase, lowercase, and special character). Message: "Password is valid".
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.1.png)

#### Test Case 1.2: Failed Validation - Password Too Short
**Objective:** Ensure the system detects passwords that are too short.
- **Input:** Enter password: "Pass1!"
- **Expected Output:** Password fails the length check (less than 8 characters). Message: "Password must be at least eight characters long"
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.2.png)

#### Test Case 1.3: Failed Validation - No Number
**Objective:** Ensure the system detects passwords without a number.
- **Input:** Enter password: "Password!"
- **Expected Output:** Password fails the number check. Message: "The password must contain at least one number"
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.3.png)

#### Test Case 1.4: Failed Validation - No Uppercase Letter
**Objective:** Ensure the system detects passwords without an uppercase letter.
- **Input:** Enter password: "password1!"
- **Expected Output:** Password fails the uppercase letter check. Message: "The password must contain at least one uppercase letter"
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.4.png)

#### Test Case 1.5: Failed Validation - No Lowercase Letter
**Objective:** Ensure the system detects passwords without a lowercase letter.
- **Input:** Enter password: "PASSWORD1!"
- **Expected Output:** Password fails the lowercase letter check. Message: "The password must contain at least one lowercase letter"
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.5.png)

#### Test Case 1.6: Failed Validation - No Special Character
**Objective:** Ensure the system detects passwords without a special character.
- **Input:** Enter password: "Password1"
- **Expected Output:** Password fails the special character check. Message: "The password must contain at least one special character"
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.6.png)

#### Test Case 1.7: Failed Validation - Dangerous Characters
**Objective:** Ensure the system detects passwords that contain dangerous characters.
- **Input:** Enter password: "Password1<>"
- **Expected Output:** Password fails the dangerous characters check. Message: "Password contains the following dangerous characters: <, >"
- **Result:** [Pass]
- **Screenshots:** ![Local Image](./screenshots/1.7.png)



### Summary
- **Overall Success Rate:** [ 7 out of 7]
- **General Comments:** The password validation rules are working as expected. All test cases passed.