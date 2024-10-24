## Test Specification Document
### Introduction
This document outlines the test scenarios for the Web App, focusing on homepage navigation, user registration, login functionality, and the to-do list. It is designed to ensure the app meets all functional requirements and handles edge cases gracefully.

### Test Environment
- Hardware Requirements: No specific hardware requirements; tests can be run on any standard computer.
- Software Requirements: Web browser (e.g., Chrome, Firefox), internet access.
  

# Test Cases

## Test Suite: Homepage

### Test Case 1.1: Verify Homepage Loads Correctly
- Objective: Ensure the homepage loads without errors.
- Input: Navigate to the homepage URL.
- Expected Output: The homepage should display with two buttons: "Login" and "Register".
  Result: The homepage loads with both buttons visible.

### Test 1.2: Register Button Click Navigation
- Objective: Ensure the register button redirects to the registration form.
- Input: Click the "Register" button.
- Expected Output: The page should redirect to the registration form.
  Result: Successful redirection to the registration form.

### Test Case 1.3:  Login Button Click Navigation
- Objective: Ensure the login button redirects to the login form.
- Input: Click the "Login" button.
- Expected Output: The page should redirect to login form.
  Result: Successful redirection to the login form.




## Test Suite: User Registration

### Test Case 2.1: Successful Registration
- Objective: Verify that valid user inputs pass all validation rules and register successfully.
- Input: Enter valid values:
  Email: "erik@example.com"
  Password: "ValidPass1!"
  Name: "Erik"
  Age: "25"
- Expected Output: All validation checks should pass, and the user should be successfully registered. Message: "Registration successful!"
  Result: User registered and redirected to login page.

### Test Case 2.2: Failed Registration - Invalid Email
- Objective: Ensure invalid email format is detected.
- Input: Enter invalid email: "erikexample.com"
- Expected Output: The email should fail validation with the message: "Email must contain the @ symbol."
- Result: Registration fails, showing appropriate error message.


### Test Case 2.3: Failed Registration - Weak Password
- Objective: Ensure a weak password fails validation.
- Input: Enter a weak password: "pass"
- Expected Output: Password fails the validation with the message: "Password must be at least eight characters long."
- Result: Registration fails, showing appropriate error message.

### Test Case 2.4: Failed Registration - Invalid Name
- Objective: Ensure invalid names are detected.
- Input: Enter a name with special characters: "Erik!@#"
- Expected Output: The name should fail validation with the message: "Name cannot include special characters."
- Result: Registration fails, showing appropriate error message.

### Test Case 2.5: Failed Registration - Invalid Age
- Objective: Ensure age validation detects letters in the input.
- Input: Enter age: "25a"
- Expected Output: The age should fail validation with the message: "Age cannot include letters."
- Result: Registration fails, showing appropriate error message.




## Test Suite: User Login

### Test Case 3.1: Successful Login
- Objective: Verify that valid credentials allow the user to log in.
- Input: Enter valid credentials (email and password) matching those in local storage.
- Expected Output: The login should be successful, and the user should be redirected to the user page. Message: "Login successful!"
- Result: Successful login and redirection to userpage.html.

### Test Case 3.2: Failed Login - Incorrect Password
- Objective: Ensure the system detects incorrect passwords.
- Input: Enter correct email but incorrect password.
- Expected Output: Login should fail with the message: "Invalid email or password."
- Result: Failed login with an error message.

### Test Case 3.3: Failed Login - Unregistered Email
- Objective: Ensure the system detects unregistered email addresses.
- Input: Enter an email not present in local storage.
- Expected Output: Login should fail with the message: "Invalid email or password."
- Result: Failed login with an error message.




## Test Suite: To-Do List

### Test Case 4.1: Add Task
- Objective: Verify that tasks can be added to the to-do list.
- Input: Enter a task in the input field and click "Add Task".
- Expected Output: The task should be added to the to-do list and displayed.
- Result: Task is successfully added and displayed on the page.

### Test Case 4.2: Edit Task
- Objective: Verify that tasks can be edited.
- Input: Click the "Edit" button next to a task, modify the task, and save changes.
- Expected Output: The task should be updated in the list.
- Result: Task is successfully edited and displayed with the changes.

### Test Case 4.3: Delete Task
- Objective: Verify that tasks can be deleted.
- Input: Click the "Delete" button next to a task.
- Expected Output: The task should be removed from the list.
- Result: Task is successfully deleted from the page.
### Test Case 4.4: Save Tasks to Local Storage
- Objective: Verify that tasks are saved to local storage.
- Input: Add a task and reload the page.
- Expected Output: The task should still be present in the to-do list after the page reloads.
- Result: Task persists after page reload, confirming successful local storage save.

### Test Case 4.5: Edit and Save Task to Local Storage
- Objective: Verify that edited tasks are updated in local storage.
- Input: Edit an existing task and reload the page.
- Expected Output: The edited task should still be present with the changes after the page reloads.
- Result: Task is successfully updated in local storage and displayed after reload.

### Test Case 4.6: Delete Task from Local Storage
- Objective: Verify that deleted tasks are removed from local storage.
- Input: Delete a task and reload the page.
- Expected Output: The task should no longer appear in the list after the page reloads.
- Result: Task is successfully deleted from local storage.