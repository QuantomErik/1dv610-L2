import { PasswordValidator } from './PasswordValidator.js'

const validator = new PasswordValidator()

validator.addRule(validator.hasDangerousChars)

console.log(validator.validate('TestPassword1>'))