import { EmailValidator } from '../../src/EmailValidator.js'
import { PasswordValidator } from '../../src/PasswordValidator.js'


const form = document.getElementById('form')
const resultDiv = document.getElementById('result')

const passwordValidator = new PasswordValidator()
passwordValidator.addRule(passwordValidator.hasDangerousChars)

const emailValidator = new EmailValidator()
emailValidator.addRule(emailValidator.hasAtSymbol)

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const password = document.getElementById('password').value
  const email = document.getElementById('email').value

  
  const passwordResult = passwordValidator.validate(password)

 
  const emailResult = emailValidator.validate(email)


  if (passwordResult === 'Password is valid.') {
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
  }
})
