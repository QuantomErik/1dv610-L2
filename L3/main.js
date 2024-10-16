import { PasswordValidator } from './src/module-L2/PasswordValidator'

const passwordValidator = new PasswordValidator()

passwordValidator.addRule(passwordValidator.containsDangerousCharactersInPassword)



document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault()

  const password = document.getElementById('password').value
  
})
