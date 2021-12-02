require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const db = require('./db/db')
const SchemaOne = require('./models/schemaOne')
const SchemaTwo = require('./models/schemaTwo')
const routes = require('./routes/getRoute')
const app = express()

app.use(routes)

app.set('view engine', 'ejs')
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})