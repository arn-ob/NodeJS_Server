const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')

// mongodb
if(process.env.MONGODB !== ""){
    config.mongodb()
} else {
    console.log("Mongo DB Not Connected")
}

// NOTE Config Server
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())


// NOTE Add Route
app.use(config.PATH, require('./routes'))


// NOTE Deploy Server
app.listen(config.PORT, () => {
    console.log(`Server Running at ${config.PORT}`)
});
