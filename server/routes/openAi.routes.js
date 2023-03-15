import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ data: `data:image/jpeg;base64,${image}`, status: 'SUCCESS' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'ERROR',
            message: error?.response.data.error.message || 'Something went wrong',
        });
    }
});

export default router;
