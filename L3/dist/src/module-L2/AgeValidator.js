export class AgeValidator {
    constructor() {
        this.rules = []

        // Add all rules on initialization
        this.addrule(this.hasNumber)
        this.addrule(this.hasLetter)
        this.addrule(this.isAgeLenghtValid)
    }

    addrule(rule) {
        this.rules.push(rule)
    }

    validate(age) {
        try {
        for (const rule of this.rules) {
            const validationResult = rule(age)
            if (!validationResult.isValid) {
                throw new Error(validationResult.message)
            }
        }
        return 'Age is valid'
    } catch (error) {
        return error.message
    }
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