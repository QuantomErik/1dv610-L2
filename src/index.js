import { PasswordValidator } from './PasswordValidator.js'
import { EmailValidator } from './EmailValidator.js'

const passwordValidator = new PasswordValidator()

const emailValidator = new EmailValidator()

passwordValidator.addRule(passwordValidator.hasDangerousChars)
emailValidator.addRule(emailValidator.hasAtSymbol)


console.log(passwordValidator.validate('TestPassword1>/<'))
console.log(emailValidator.validate('erik@hotmail.com'))