import { PasswordValidator } from './src/module-L2/PasswordValidator'
import { EmailValidator } from './src/module-L2/EmailValidator'
import { NameValidator } from './src/module-L2/NameValidator'
import { AgeValidator } from './src/module-L2/AgeValidator'

const passwordValidator = new PasswordValidator()
const emailValidator = new EmailValidator ()
const nameValidator = new NameValidator
const ageValidator = new AgeValidator



document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault()


  const password = document.getElementById('password').value
  const passwordResult = passwordValidator.validate(password)
  const passwordResultDiv = document.getElementById('passwordResultDiv')
  passwordResultDiv.textContent = passwordResult

  if (passwordResult === 'Password is valid') {
    passwordResultDiv.className = 'success'
  } else {
    passwordResultDiv.className = 'error'
  }



  const email = document.getElementById('email').value
  const emailResult = emailValidator.validate(email)
  const emailResultDiv = document.getElementById('emailResultDiv')
  emailResultDiv.textContent = emailResult

  if (emailResult === 'Email is valid') {
    emailResultDiv.className = 'success'
  } else {
    emailResultDiv.className = 'error'
  }



  const name = document.getElementById('name').value
  const nameResult = nameValidator.validate(name)
  const nameResultDiv = document.getElementById('nameResultDiv')
  nameResultDiv.textContent = nameResult

  if (nameResult === 'Name is valid') {
    nameResultDiv.className = 'success'
  } else {
    nameResultDiv.className = 'error'
  }


  const age = document.getElementById('age').value
  const ageResult = ageValidator.validate(age)
  const ageResultDiv = document.getElementById('ageResultDiv')
  ageResultDiv.textContent = ageResult

  if (ageResult === 'Age is valid') {
    ageResultDiv.className = 'success'
  } else {
    ageResultDiv.className = 'error'
  }

  /* if (
    passwordResult === 'Password is valid' &&
    emailResult === 'Email is valid' &&
    nameResult === 'Name is valid' &&
    ageResult === 'Age is valid'
  ) {
    localStorage.setItem('registeredEmail', email)
    localStorage.setItem('registeredPassword', password)

    const registrationMessage = document.getElementById('registrationMessage')
    registrationMessage.textContent = "Registration successful!"
    registrationMessage.className = 'success'

    setTimeout(() => {
      window.location.href = '/src/login/login.html';
    }, 2000)
  } */

  
})
