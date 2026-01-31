

const getUserData = async ( request, response ) => {

    const { userTag } = request.params

    response.send(userTag)
}

module.exports = getUserData