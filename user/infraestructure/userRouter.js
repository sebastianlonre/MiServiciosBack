const express = require("express")
const getUserData = require("./profile/profileAdapter")
const { authUser, authUserGoogle, registerUser } = require("./auth/authAdapter")
const router = express.Router()

router.get("/:userTag", getUserData)
router.post("/auth", authUser)
router.post("/authGoogle", authUserGoogle)
router.post("/register", registerUser)

module.exports = router