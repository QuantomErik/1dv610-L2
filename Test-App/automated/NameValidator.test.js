import { NameValidator } from '../../L3/src/module-L2/NameValidator.js'

describe('NameValidator', () => {
    let validator

    beforeEach(() => {
        validator = new NameValidator()
    })

    test('should return valid for a correct name', () => {
        const result = validator.validate('John')
        expect(result).toBe('Name is valid')
    })

    test('should return invalid if the name is too short', () => {
        const result = validator.validate('J')
        expect(result).toBe('Name is too short')
    })

    test('should return invalid if the name contains a number', () => {
        const result = validator.validate('John123')
        expect(result).toBe('Name cannot include numbers')
    })

    test('should return invalid if the name contains a special character', () => {
        const result = validator.validate('John!')
        expect(result).toBe('Name cannot include special characters')
    })

    test('should return valid for a name that is long enough and contains no numbers or special characters', () => {
        const result = validator.validate('Alice')
        expect(result).toBe('Name is valid')
    })

    test('should return invalid for an empty name', () => {
        const result = validator.validate('')
        expect(result).toBe('Name is too short')
    })
})
