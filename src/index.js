require('dotenv').config();
const { Client, IntentsBitField, Message } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
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
        return;
    };
    if (msg.content.substring(0, 39) === 'https://play.pokemonshowdown.com/battle') {
        msg.react('👀');
        return;
    };
    if (msg.content.substring(0, 35) === 'https://replay.pokemonshowdown.com/') {
        msg.react('🔎');
        return;
    };
    
});

client.login(process.env.TOKEN);
