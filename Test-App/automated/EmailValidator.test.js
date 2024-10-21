import { EmailValidator } from '../../L3/src/module-L2/EmailValidator.js'

describe('EmailValidator', () => {
    let validator

    beforeEach(() => {
        validator = new EmailValidator()
    })

    test('should return valid for a correct email', () => {
        const result = validator.validate('test@example.com')
        expect(result).toBe('Email is valid')
    })

    test('should return invalid if the email does not contain @', () => {
        const result = validator.validate('testexample.com')
        expect(result).toBe('Email must contain the @ symbol')
    })

    test('should return invalid if the email does not contain a dot (.)', () => {
        const result = validator.validate('test@examplecom')
        expect(result).toBe('Email must contain the . symbol')
    })

    test('should return valid for an email that contains both @ and .', () => {
        const result = validator.validate('user@domain.com')
        expect(result).toBe('Email is valid')
    })

    test('should return invalid for an empty email', () => {
        const result = validator.validate('')
        expect(result).toBe('Email must contain the @ symbol')
    })
})
