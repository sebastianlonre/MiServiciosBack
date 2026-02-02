const { valideDataLogin, validateDataRegister } = require("../../aplication/auth")
const { okReponse, errorResponse } = require("../http/responses")

const authUser = async (request, response) => {

    const { userEmail, userPassword } = request.body

    dataValidated = valideDataLogin(userEmail, userPassword)

    if (dataValidated.ok) {
        okReponse(response, 200, dataValidated.message)
    } else {
        errorResponse(response, 400, dataValidated.message)
    }

}

const authUserGoogle = async (request, response) => {

}

const registerUser = async (request, response) => {
    const {
        userTag,
        typeProfile,
        firstName,
        secondName,
        lastName,
        secondLastName,
        companyName,
        userEmail,
        codeCountry,
        phoneNumber,
        location,
        userPassword
    } = request.body

    dataValidated = validateDataRegister(codeCountry)

    if (dataValidated.ok) {
        okReponse(response, 200, dataValidated.message)
    } else {
        errorResponse(response, 400, dataValidated.message)
    }
}


module.exports = {
    authUser,
    registerUser,
    authUserGoogle
}