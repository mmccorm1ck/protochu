require('dotenv').config();
const { Client, IntentsBitField, Message } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username}, I choose you!`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    };
    console.log(msg.content);
    if (msg.content === 'beep') {
        msg.reply('boop');
    };
});

client.login(process.env.TOKEN);