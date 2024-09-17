export class EmailValidator {
    constructor() {
        this.rules = []
    }

    addRule(rule) {
        this.rules.push(rule)
    }

    validate(email) {
        for (const rule of this.rules) {
            const validationResult = rule(email)
            if (!validationResult.isValid) {
                return validationResult.message
            }
        }
        return 'Email is valid.'
    }

    hasAtSymbol = (email) => {
        if (!email.includes('@')) {
            return {
                isValid: false,
                message: 'Email must contain the @ symbol.'
            }
        }
        return { isValid: true }
    }
    


}