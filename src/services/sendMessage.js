const TelegramBot = require(`node-telegram-bot-api`);

// const TOKEN = '1652801314:AAE_XRZdfDBa0r4hp2kiyAnZi_puP_r-F8g';
// const CHAT_ID = 1094771835
const TOKEN = '1629311094:AAH7Ml3KPT4xRiZ17lzGzodVEQpiYte2n7c';
const CHAT_ID = 1609702003;

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
    console.log(msg);
});

exports.messageSend = async (data) => {
    const response = await bot.sendMessage(CHAT_ID, `
    Data: ${data.requestDate}
    Nome: ${data.name}
    Whatsapp: ${data.whats}
    E-mail: ${data.email}
    Descrição: ${data.description}
    `);
    return response;
};

