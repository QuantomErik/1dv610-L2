export class EmailValidator {
    constructor() {
        this.rules = []

        // Add all rules on initialization
        this.addRule(this.hasAtSymbol)
        this.addRule(this.hasDotSymbol)
    }

    addRule(rule) {
        this.rules.push(rule)
    }

    validate(email) {
        try {
            for (const rule of this.rules) {
                const validationResult = rule(email)
                if (!validationResult.isValid) {
                    throw new Error(validationResult.message)
                }
            }
            return 'Email is valid'
        } catch (error) {
            return error.message
        }
    }

    hasAtSymbol = (email) => {
        if (!email.includes('@')) {
            return {
                isValid: false,
                message: 'Email must contain the @ symbol'
            }
        }
        return {
            isValid: true }
    }

    hasDotSymbol = (email) => {
        if (!email.includes('.')) {
            return {
                isValid: false,
                message: 'Email must contain the . symbol'
            }
        }
        return {
            isValid: true
        }
    }



}