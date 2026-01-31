const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Router del usuario")
})

module.exports = router