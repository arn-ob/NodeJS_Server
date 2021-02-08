const mongoose = require('mongoose');
const mongourl = process.env.MONGODB

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`)
    process.exit(-1);
});

const connect = () => {
    mongoose.connect(mongourl, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("mongo connected"))
    .catch(() => console.log("mongo not connected"));
    
    return mongoose.connection;
};

module.exports = connect