const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
const PORT = 5001;
app.use(express.json());

app.use("/api/v1/tasks", taskRoute);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, console.log("サーバーが起動しました！"));
    } catch (err) {
        console.log(err);
    }
};

start();