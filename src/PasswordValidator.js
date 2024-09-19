export class PasswordValidator {
    constructor() {
        this.rules = []
    }


    addRule(rule) {
        this.rules.push(rule)
    }

    validate(password) {
        for (const rule of this.rules) {
            const validationResult = rule(password)
            if (!validationResult.isValid) {
                return validationResult.message
            }
        }
        return 'Password is valid'
    }

    hasDangerousChars = (password) => {
        const dangerousChars = ['<', '>', '/', '\\']
        const foundDangerousChars = []

        for (const char of dangerousChars) {
            if (password.includes(char)) {
                foundDangerousChars.push(char)
            }
        }

        if (foundDangerousChars.length > 0) {
            return {
                isValid: false,
                message: `Password contains the following dangerous characters: ${foundDangerousChars.join(', ')}`
            }
        }
        return { isValid: true }
    }

    isLongEnough = (password) => {
        if (password.length < 8) {
            return {
                isValid: false,
                message: 'Password is too short'
            }
        }
        return {
            isValid: true
        }
    }

    hasNumber = (password) => {
        const regex = /\d/
        if (!regex.test(password)) {
            return {
                isValid: false,
                message: 'The password must contain at least one number'
            }
        }
        return {
            isValid: true
        }
    }

    hasUpperCase = (password) => {
        const regex = /[A-Z]/
        if (!regex.test(password)) {
            return {
                isValid: false,
                message: 'The password must contain at least one uppercase letter'
            }
        }
        return {
            isValid: true
        }
    }


}


