const valideEmail = ( email ) => {

    if(email.length === 0) {
        return {"ok": false, "message": "El campo email es obligatorio"}
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regex.test(email)) {
        return {"ok": false, "message": "El correo del formato no es correcto"}
    }

    return {"ok": true, "message": "Correo validado"}
}

module.exports = {
    valideEmail
}