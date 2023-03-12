import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cloudinary from 'cloudinary';

import { openAIRoute } from './routes/index.js';

config();

const app = express();

const PORT = process.env.PORT || 6000;
app.use(cors(), bodyParser.json());

app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

cloudinary.config({
    cloud_name: process.env.CLOUND_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {
//     public_id: 'olympic_flag',
// });

// res.then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
// }).catch((err) => {
//     console.log(err);
// });

connect(process.env.URL_MONGODB)
    .then(() => {
        console.log('MongoDB Connected!');
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });

app.use('/api/v1/openAI', openAIRoute);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Server is running',
    });
});