import { EmailValidator } from '../../src/EmailValidator.js'
import { PasswordValidator } from '../../src/PasswordValidator.js'
import { NameValidator } from '../../src/NameValidator.js'
import { AgeValidator } from '../../src/AgeValidator.js'


const form = document.getElementById('form')
/* const resultDiv = document.getElementById('result') */

/* const passwordResultDiv = document.createElement('div') */
const passwordResultDiv = document.getElementById('passwordResultDiv')
/* const emailResultDiv = document.createElement('div') */
const emailResultDiv = document.getElementById('emailResultDiv')
const nameResultDiv = document.getElementById('nameResultDiv')
const ageResultDiv = document.getElementById('ageResultDiv')
/* resultDiv.appendChild(passwordResultDiv)
resultDiv.appendChild(emailResultDiv) */

const passwordValidator = new PasswordValidator()
passwordValidator.addRule(passwordValidator.hasDangerousChars)
passwordValidator.addRule(passwordValidator.isLongEnough)
passwordValidator.addRule(passwordValidator.hasNumber)
passwordValidator.addRule(passwordValidator.hasLowerCase)
passwordValidator.addRule(passwordValidator.hasUpperCase)
passwordValidator.addRule(passwordValidator.hasSpecialChar)




const emailValidator = new EmailValidator()
emailValidator.addRule(emailValidator.hasAtSymbol)
emailValidator.addRule(emailValidator.hasDotSymbol)


const nameValidator = new NameValidator()
nameValidator.addrule(nameValidator.isLongEnough)
nameValidator.addrule(nameValidator.hasNumber)
nameValidator.addrule(nameValidator.hasSpecialChar)

const ageValidator = new AgeValidator()
ageValidator.addrule(ageValidator.hasNumber)
ageValidator.addrule(ageValidator.hasLetter)
ageValidator.addrule(ageValidator.isAgeLenghtValid)



form.addEventListener('submit', function(event) {
  event.preventDefault()

  const password = document.getElementById('password').value.trim()
  const email = document.getElementById('email').value.trim()
  const name = document.getElementById('name').value.trim()
  const age = document.getElementById('age').value.trim()

  //Clear previous validation results
  passwordResultDiv.textContent = ''
  passwordResultDiv.className = ''

  emailResultDiv.textContent = ''
  emailResultDiv.className = ''

  nameResultDiv.textContent = ''
  nameResultDiv.className = ''

  ageResultDiv.textContent = ''
  ageResultDiv.className = ''

  
  
  

  

  if (password !== '') {
    const passwordResult = passwordValidator.validate(password)
    passwordResultDiv.textContent = passwordResult
    if (passwordResult === 'Password is valid') {
      passwordResultDiv.className = 'success'
    } else {
      passwordResultDiv.className = 'error'
    }
  }

  if (email !== '') {
    const emailResult = emailValidator.validate(email)
    emailResultDiv.textContent = emailResult
    if (emailResult === 'Email is valid') {
      emailResultDiv.className = 'success'
    } else {
      emailResultDiv.className = 'error'
    }
  }

  if (name !== '') {
    const nameResult = nameValidator.validate(name)
    nameResultDiv.textContent = nameResult
    if (nameResult === 'Name is valid') {
      nameResultDiv.className = 'success'
    } else {
      nameResultDiv.className = 'error'
    }
  }

  if (age !== '') {
    const ageResult = ageValidator.validate(age)
    ageResultDiv.textContent = ageResult
    if (ageResult === 'Age is valid') {
      ageResultDiv.className = 'success'
    } else {
      ageResultDiv.className = 'error'
    }
  }

  

  /* const passwordResult = passwordValidator.validate(password) */

 
  /* const emailResult = emailValidator.validate(email) */


 /*  if (passwordResult === 'Password is valid.') {
    resultDiv.textContent = passwordResult
    resultDiv.className = 'success'
  } else {
    resultDiv.textContent = passwordResult
    resultDiv.className = 'error'
  }

  if (emailResult === 'Email is valid') {
    resultDiv.textContent = emailResult
    resultDiv.className = 'success'
  } else {
    resultDiv.textContent = emailResult
    resultDiv.className = 'error'
  } */
})
