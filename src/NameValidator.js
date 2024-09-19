export class NameValidator {
    constructor() {
        this.rules = []
    }

    addrule(rule) {
        this.rules.push(rule)
    }

    validate(name) {
        for (const rule of this.rules) {
            const validationResult = rule(name)
            if (!validationResult.isValid) {
                return validationResult.message
            }
        }
        return 'Name is valid'
    }

    isLongEnough = (name) => {
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
}