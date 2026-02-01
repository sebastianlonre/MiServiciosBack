

const authUser = async (request, response) => {

    const { userEmail, userPassword } = request.body

    response.send(userEmail + " " + userPassword)
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
        location
    } = request.body

    response.send(userTag + " registrado con exito")
}


module.exports = {
    authUser,
    registerUser,
    authUserGoogle
}