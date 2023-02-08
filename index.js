const express = require('express')
const mysql = require('mysql2');
const {connection} = require('./db')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine", "pug");

app.get('/', async (req, res) => {
  const connect = await connection()
  const [characters, _] = await connect.query('SELECT * FROM hp_characters')
  console.log(characters)
  res.render('home', {characters});
})

app.get('/characters/:id', async (req, res) => {
  const connect = await connection()
  const [characters, _] = await connect.execute(
    `SELECT * FROM hp_characters WHERE id = ?`,
    [req.params.id]
  )
  console.log(characters)

  res.render('character', { selectedCharacter: characters[0] });
})

app.post('/character-delete', async (req, res) => {
  const connect = await connection()
  await connect.execute(
    `DELETE FROM hp_characters WHERE id = ?`,
    [req.body.id]
  )

  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})