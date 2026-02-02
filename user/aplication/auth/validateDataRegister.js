const { validateNumberField } = require("../../domain/validates")


const validateDataRegister = (codeCountry) => {
    validatedCodeCountry = validateNumberField("identificador del país", codeCountry, 1, 2, true)
    return validatedCodeCountry
}

module.exports = {
    validateDataRegister
}