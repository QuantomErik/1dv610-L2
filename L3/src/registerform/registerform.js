/* import { PasswordValidator } from "../module-L2/PasswordValidator"
import { EmailValidator } from "../module-L2/EmailValidator"
import { NameValidator } from "../module-L2/NameValidator"
import { AgeValidator } from "../module-L2/AgeValidator" */

import { PasswordValidator } from "../module-L2/PasswordValidator.js"
import { EmailValidator } from "../module-L2/EmailValidator.js"
import { NameValidator } from "../module-L2/NameValidator.js"
import { AgeValidator } from "../module-L2/AgeValidator.js"


/* import { PasswordValidator } from '../../module-L2/PasswordValidator.js'
import { EmailValidator } from '../../module-L2/EmailValidator.js'
import { NameValidator } from '../../module-L2/NameValidator.js'
import { AgeValidator } from '../../module-L2/AgeValidator.js' */

/* import { PasswordValidator } from "/src/module-L2/PasswordValidator"
import { EmailValidator } from "/src/module-L2/EmailValidator"
import { NameValidator } from "/src/module-L2/NameValidator"
import { AgeValidator } from "/src//module-L2/AgeValidator" */


const passwordValidator = new PasswordValidator()
const emailValidator = new EmailValidator ()
const nameValidator = new NameValidator()
const ageValidator = new AgeValidator()

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value

    const passwordResult = passwordValidator.validate(password)
    const emailResult = emailValidator.validate(email)
    const nameResult = nameValidator.validate(name)
    const ageResult = ageValidator.validate(age)

    const passwordResultDiv = document.getElementById('passwordResultDiv')
    const emailResultDiv = document.getElementById('emailResultDiv')
    const nameResultDiv = document.getElementById('nameResultDiv')
    const ageResultDiv = document.getElementById('ageResultDiv')

    // Show validation result
    passwordResultDiv.textContent = passwordResult
    emailResultDiv.textContent = emailResult
    nameResultDiv.textContent = nameResult
    ageResultDiv.textContent = ageResult

    if (passwordResult === 'Password is valid') {
        passwordResultDiv.className = 'success'
    } else {
                passwordResultDiv.className = 'error'
    }

    if (emailResult === 'Email is valid') {
        emailResultDiv.className = 'success'
    } else {
        emailResultDiv.className = 'error'
    }

    if (nameResult === 'Name is valid') {
        nameResultDiv.className = 'success'
    } else {
        nameResultDiv.className = 'error'
    }

    if (ageResult === 'Age is valid') {
        ageResultDiv.className = 'success'
    } else {
        ageResultDiv.className = 'error'
    }


    if (
        passwordResult === 'Password is valid' &&
        emailResult === 'Email is valid' &&
        nameResult === 'Name is valid' &&
        ageResult === 'Age is valid'
    ) {
        // Save information to localStorage
    localStorage.setItem('registeredEmail', email)
    localStorage.setItem('registeredPassword', password)

    const registrationMessage = document.getElementById('registrationMessage')
    registrationMessage.textContent = "Registration successful!"
    registrationMessage.className = 'success'

    setTimeout(() => {
        window.location.href = '/src/login/login.html'
    }, 1000)
    } else {
        const registrationMessage = document.getElementById('registrationMessage')
        registrationMessage.textContent = 'Registration failed! Please correct the errors.'
        registrationMessage.className = 'error'
    }
})