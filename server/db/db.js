const mongoose = require('mongoose');

const db = process.env.mongoURI;

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
};

module.exports = connectDB;