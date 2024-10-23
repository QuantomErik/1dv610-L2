export class NameValidator {
    constructor() {
        this.rules = []

        // Add all rules on initialization
        this.addrule(this.isNameLongEnough)
        this.addrule(this.hasNumber)
        this.addrule(this.hasSpecialChar)
    }

    addrule(rule) {
        this.rules.push(rule)
    }

    validate(name) {
        try {
            for (const rule of this.rules) {
                const validationResult = rule(name)
                if (!validationResult.isValid) {
                    throw new Error(validationResult.message)
                }
            }
            return 'Name is valid'
        } catch (error) {
            return error.message
        }
    }

    isNameLongEnough = (name) => {
        if (name.length < 2) {
            return {
                isValid: false,
                message: 'Name is too short'
            }
        }
        return {
            isValid: true
        }
    }

    hasNumber = (name) => {
        const regex = /[0-9]/
        if (regex.test(name)){
            return {
                isValid: false,
                message: 'Name cannot include numbers'
            }
        }
        return {
            isValid: true
        }
    }

    hasSpecialChar = (name) => {
        const regex = /[-!@#$%^&*()_+=[\]{}|;:,.?~\\^%]/
        if (regex.test(name)) {
            return {
                isValid: false,
                message: 'Name cannot include special characters'
            }
        }
        return {
            isValid: true
        }
    }
}