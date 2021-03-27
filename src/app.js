const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const cors = require('cors');
const telegramBot = require('./services/sendMessage');

router.get('/', (req, res, next) => {
    res.status(200).send("API Ligada.");
});
router.post('/sendMessage', async (req, res, next) => {
    try {
        const response = telegramBot.messageSend(req.body);
        res.status(200).send({ status: 'OK', fail: false, data: response });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'Fail', fail: true, data: error });
    }
});

// Habilita o CORS
app.use(cors());

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);