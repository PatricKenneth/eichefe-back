const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const cors = require('cors');
const TelegramBot = require(`node-telegram-bot-api`);
const bodyParser = require('body-parser');
const telegramBotService = require('./services/sendMessage');

// const TOKEN = '1652801314:AAE_XRZdfDBa0r4hp2kiyAnZi_puP_r-F8g';
// const CHAT_ID = 1094771835
const TOKEN = '1629311094:AAH7Ml3KPT4xRiZ17lzGzodVEQpiYte2n7c';
const CHAT_ID = 1609702003;
const bot = new TelegramBot(TOKEN, {polling: true});

router.get('/', (req, res, next) => {
    res.status(200).send("API Ligada.");
});
router.post('/sendMessage', async (req, res, next) => {
    try {
        const response = telegramBotService.messageSend(req.body, bot);
        res.status(200).send({ status: 'OK', fail: false, data: response });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'Fail', fail: true, data: error });
    }
});

app.use(cors());
app.use(bodyParser.json({
    limit: '15mb'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);