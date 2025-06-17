import express from 'express';
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 7777;
const DB_USER = `mongodb+srv://aidar:0711@cluster0.y3ihgiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

app.use(express.json());

app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_USER, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();