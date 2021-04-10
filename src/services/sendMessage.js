exports.messageSend = async (data, bot) => {
    const response = await bot.sendMessage(CHAT_ID, `
    Data: ${data.requestDate}
    Nome: ${data.name}
    Whatsapp: ${data.whats}
    E-mail: ${data.email}
    Descrição: ${data.description}
    `);
    return response;
};

