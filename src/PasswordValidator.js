export class PasswordValidator {
    constructor() {
        this.rules = []
    }


    addRule(rule) {
        this.rules.push(rule)
    }

    validate(password) {
        for (const rule of this.rules) {
            const validationRersult = rule(password)
            if (!validationRersult.isValid) {
                return validationRersult.message
            }
        }
        return 'Password is valid.'
    }

    hasDangerousChars = (password) => {
        const dangerousChars = ['<', '>', '/', '\\']
        for (const char of dangerousChars) {
            if (password.includes(char)) {
                return {
                    isValid: false,
                    message: `Password contains dangerous character: ${char}`
                }
            }
        }
        return { isValid: true }
    }


}


