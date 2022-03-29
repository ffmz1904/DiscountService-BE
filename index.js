const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.use('/', router);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, async () => {
            console.log('Database connected successfully!');
        });

        app.listen(PORT, () => {
            console.log(`Server has been started on localhost:${PORT}`);
        });
    } catch (e) {
        console.log('Error! Server is not running!');
        console.log('Message =>' + e.message);
    }
}

start();