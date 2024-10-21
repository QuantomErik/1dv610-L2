import { AgeValidator } from '../../L3/src/module-L2/AgeValidator.js'

describe('AgeValidator', () => {
    let validator

    beforeEach(() => {
        validator = new AgeValidator()
    })

    test('should return valid for a correct age', () => {
        const result = validator.validate('25')
        expect(result).toBe('Age is valid')
    })

    test('should return invalid if the age contains letters', () => {
        const result = validator.validate('25a')
        expect(result).toBe('Age cannot include letters')
    })

    test('should return invalid if the age contains more than three digits', () => {
        const result = validator.validate('1000')
        expect(result).toBe('Age cannot contain more than three numbers')
    })

    test('should return valid if the age is exactly three digits', () => {
        const result = validator.validate('999')
        expect(result).toBe('Age is valid')
    })

    test('should return invalid if the age does not contain any numbers', () => {
        const result = validator.validate('abc')
        expect(result).toBe('Age must include at least one number')
    })

    test('should return invalid for an empty string', () => {
        const result = validator.validate('')
        expect(result).toBe('Age must include at least one number')
    })
})
