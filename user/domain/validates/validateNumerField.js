const validateNumberField = (fieldName, dataField, minLenght, maxLenght, requierd) => {

    if(requierd && (!dataField || dataField.length === 0)) {
        return {"ok": false, "message": `El campo ${fieldName} es requerido`}
    }

    const regex = new RegExp(`^\\d{${minLenght},${maxLenght}}$`);

    if(!regex.test(dataField)) {
        return {"ok": false, "message": `El campo ${fieldName} no cumple con el formato, debe de ser un número entre ${minLenght} - ${maxLenght}`}
    }

    return {"ok": true, "message": `El campo ${fieldName} ha sido validado`}
}

module.exports = {
    validateNumberField
}