export class AgeValidator {
    constructor() {
        this.rules = []
    }

    addrule(rule) {
        this.rules.push(rule)
    }

    validate(age) {
        for (const rule of this.rules) {
            const validationResult = rule(age)
            if (!validationResult.isValid) {
                return validationResult.message
            }
        }
        return 'Age is valid'
    }

    hasNumber = (age) => {
        const regex = /[0-9]/
        if (!regex.test(age)) {
            return {
                isValid: false,
                message: 'Age must include at least one number'
            }
        }
        return {
            isValid: true
        }
    }

    hasLetter = (age) => {
        const regex = /[a-z]/
        if (regex.test(age)) {
            return {
                isValid: false,
                message: 'Age cannot include letters'
            }
        }
        return {
            isValid: true
        }
    }

    isAgeLenghtValid = (age) => {
        if (age.length > 3) {
            return {
                isValid: false,
                message: 'Age cannot contain more than three numbers'
            }
        }
        return {
            isValid: true
        }
    }
}