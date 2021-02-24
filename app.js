const express = require('express');
const bodyParser = require('body-parser');
const config = require('./bin/config');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const nodemail = require('./src/services/nodemail');

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
app.get('/sendEmail', (req, res, next) => {
    console.log(req.body.data);
    // nodemail.emailSend(req.body);
    res.status(200).send("Chegou.");
});

module.exports = app;