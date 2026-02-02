const { valideEmail, validePassword } = require("../../domain/validates")


const valideDataLogin = (userEmail, userPassword) => {

    emailValited = valideEmail(userEmail)
    passwordValited = validePassword(userPassword, false)

    if (!emailValited.ok) {
        return (emailValited)
    }
    if (!passwordValited.ok) {
        return (passwordValited)
    }
    return { "ok": true, "message": "Información validada" }
}

module.exports = {
    valideDataLogin
}