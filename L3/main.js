import { PasswordValidator } from './src/module-L2/PasswordValidator'
import { EmailValidator } from './src/module-L2/EmailValidator'

const passwordValidator = new PasswordValidator()
const emailValidator = new EmailValidator ()



emailValidator.addRule





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
})
