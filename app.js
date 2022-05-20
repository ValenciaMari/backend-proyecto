const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get('/', (req, res) => {
  res.send('hiiii!')
})
app.post('/register', (req, res) => {
  let name = req.body.name;
  let apellido = req.body.apellido;
  let edad = req.body.edad;
  let ciudad = req.body.ciudad;
  let id = req.body.id;
  let password = req.body.password;

  res.send(`el registro de sus datos hasido exitoso. su nombre completo es ${name} ${apellido} , su edad es: ${edad}, su ciudad es ${ciudad}, su id es ${id},su contraseña es ${password}`)
})
app.post('/login', (req, res) => {
  let id = req.body.id;
  let password = req.body.password;
  res.send(`su documento es ${id}, su contraseña es ${password}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
