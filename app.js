const express = require('express');
const bodyParser = require('body-parser');
const config = require('./bin/config');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const telegramBot = require('./src/services/sendMessage');

app.use(bodyParser.json({
    limit: '15mb'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

// Habilita o CORS
app.use(cors());

// Define as Rotas
app.get('/', (req, res, next) => {
    res.status(200).send("API Ligada.");
});
app.post('/sendMessage', async (req, res, next) => {
    try {
        const response = telegramBot.messageSend(req.body);
        res.status(200).send({ status: 'OK', fail: false, data: response });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'Fail', fail: true, data: error });
    }
});

module.exports = app;