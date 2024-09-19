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
        if (name.lenght < 2) {
            return {
                isValid: false,
                message: 'Name is too short'
            }
        }
        return {
            isValid: true
        }
    }
}