require('dotenv').config();
const { Client, IntentsBitField, Message, spoiler } = require('discord.js');
const showdownHandler = require('./showdownHandler.js');

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

client.on('messageCreate', (msg) => { // When a new message is posted in server
    if (msg.author.bot) { // Ignore message if author is bot
        return;
    };
    /*if (msg.content === 'beep') { // For testing
        msg.reply('boop');
        return;
    };*/
    if (msg.content.substring(0, 39) === 'https://play.pokemonshowdown.com/battle') { // If message is a valid showdown battle link
        msg.react('👀');
        const handler = new ShowdownHandler(msg.content);
        const result = spoiler(handler.joinGame()); // Calls join function in showdownHandler, spoilers result
        msg.reply(result); // Reply to message with spoilered result
        return;
    };
    if (msg.content.substring(0, 35) === 'https://replay.pokemonshowdown.com/') { // If message is a valid showdown replay link
        msg.react('🔎');
        const handler = new ShowdownHandler(msg.content);
        const result = spoiler(handler.watchReplay()); // Calls watch function in showdownHandler, spoilers result
        msg.reply(result); // Reply to message with spoilered result
        return;
    };
    
});

client.login(process.env.TOKEN);
