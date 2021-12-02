require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB connection established.")
}).catch((e) => {
    console.log("Error while connecting to DB", e.message)
})
