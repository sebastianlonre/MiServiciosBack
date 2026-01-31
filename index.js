const express = require('express')
const mainRouter = require('./router')
const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api', mainRouter)

app.listen(PORT, ()=>{
    console.log(`Servidor Escuchando en la ruta http://localhost:${PORT}`)
})