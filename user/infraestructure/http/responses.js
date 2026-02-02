const okReponse = (response, statusCode, message) => {
    return response.status(statusCode).json({
        status: true,
        message: message
    })
}

const errorResponse = (response, statusCode, message) => {
    return response.status(statusCode).json({
        status: false,
        message: message
    })
}

module.exports = {
    okReponse,
    errorResponse
}