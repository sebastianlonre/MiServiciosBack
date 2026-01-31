const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, ()=>{
    console.log(`Servidor Escuchando en la ruta http://localhost:${PORT}`)
})