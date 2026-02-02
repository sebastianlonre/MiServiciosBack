const validePassword = (password, register) => {
    if (password.length === 0) {
        return { "ok": false, "message": "El campo contraseña es obligatorio" }
    }

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[._\-,@])[A-Za-z\d._\-,@]{8,}$/

    if (!register || regex.test(password)) {
        return { "ok": true, "message": "contraseña validada correctamente" }
    } else {
        return { "ok": false, "message": "la contraseña no cumple con el formato, mínimo 8 caractes, 1 número y un simbolo entre (. _ - , @)" }
    }
}

module.exports = {
    validePassword
}