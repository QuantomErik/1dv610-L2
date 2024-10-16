export class PasswordValidator {
    constructor() {
        this.rules = []

        this.addRule(this.containsDangerousCharactersInPassword)
        this.addRule(this.isPasswordLongEnough)
        this.addRule(this.hasNumber)
        this.addRule(this.hasLowerCase)
        this.addRule(this.hasUpperCase)
        this.addRule(this.hasSpecialChar)

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

    #containsDangerousCharactersInPassword = (password) => {
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

    containsDangerousCharactersInPassword = (password) => {
        return this.#containsDangerousCharactersInPassword(password)
    }

    #isPasswordLongEnough = (password) => {
        if (password.length < 8) {
            return {
                isValid: false,
                message: 'Password must be at least eight characters long'
            }
        }
        return {
            isValid: true
        }
    }

    isPasswordLongEnough = (password) => {
        return this.#isPasswordLongEnough(password)
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

    hasLowerCase = (password) => {
        const regex = /[a-z]/
        if (!regex.test(password)) {
            return {
                isValid: false,
                message: 'The password must contain at least one lowercase letter'
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

    #hasSpecialChar = (password) => {
        const regex = /[-!@#$%^&*()_+=[\]{}|;:,.?~\\^%]/
        if (!regex.test(password)) {
            return {
                isValid: false,
                message: 'The password must contain at least one special character'
            }
        }
        return {
            isValid: true
        }
    }

    hasSpecialChar = (password) => {
        return this.#hasSpecialChar(password)
    }


}


