const mongoose = require("mongoose");
const dbConfig = require("../config/db");

const connectDB = () => {
    return mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: dbConfig.user,
        pass: dbConfig.pwd,
        dbName: dbConfig.dbName,
    })
    .then(() => console.log("データベースに接続中・・・"))
    .catch((err) => console.log(err));
};

module.exports = connectDB