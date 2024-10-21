import { PasswordValidator } from '../../L3/src/module-L2/PasswordValidator.js'

describe('PasswordValidator', () => {
  let validator

  // This will run before each test to create a new instance of PasswordValidator
  beforeEach(() => {
    validator = new PasswordValidator()
  })

  test('should return valid for a strong password', () => {
    const result = validator.validate('StrongPass1!')
    expect(result).toBe('Password is valid')
  })

  test('should return invalid if the password is too short', () => {
    const result = validator.validate('abc')
    expect(result).toBe('Password must be at least eight characters long')
  })

  test('should return invalid if the password does not contain a number', () => {
    const result = validator.validate('StrongPass!')
    expect(result).toBe('The password must contain at least one number')
  })

  test('should return invalid if the password does not contain a lowercase letter', () => {
    const result = validator.validate('STRONGPASS1!')
    expect(result).toBe('The password must contain at least one lowercase letter')
  })

  test('should return invalid if the password does not contain an uppercase letter', () => {
    const result = validator.validate('strongpass1!')
    expect(result).toBe('The password must contain at least one uppercase letter')
  })

  test('should return invalid if the password does not contain a special character', () => {
    const result = validator.validate('StrongPass1')
    expect(result).toBe('The password must contain at least one special character')
  })

  test('should return invalid if the password contains dangerous characters', () => {
    const result = validator.validate('Strong<Pass1>')
    expect(result).toBe('Password contains the following dangerous characters: <, >')
  })

  test('should return valid if the password contains special characters that are not dangerous', () => {
    const result = validator.validate('StrongPass1!@#')
    expect(result).toBe('Password is valid')
  })

  test('should return invalid for a password that contains multiple dangerous characters', () => {
    const result = validator.validate('Weak/Pass<1>')
    expect(result).toBe('Password contains the following dangerous characters: <, >, /')
  })

  test('should validate if the password meets all criteria', () => {
    const result = validator.validate('Valid1Password!')
    expect(result).toBe('Password is valid')
  })
})
