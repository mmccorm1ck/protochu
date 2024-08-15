require('dotenv').config();
const { Client, IntentsBitField, Message } = require('discord.js');
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

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    };
    if (msg.content === 'beep') {
        msg.reply('boop');
        return;
    };
    if (msg.content.substring(0, 39) === 'https://play.pokemonshowdown.com/battle') {
        msg.react('👀');
        const result = showdownHandler.joinGame(msg.content);
        let chans = {};
        msg.guild.channels.fetch().then(fetchedChannels => {chans = fetchedChannels});
        console.log(chans);
        for (let i = 0; i < chans.length; i++) {
          console.log(chans[i].name);
          if (chans[i].name.includes('match-results')) {
            chans[i].send(result);
            return;
          }
          
        }
        console.log('Could not find match-results');
          /*if (c.name.includes('match-results')) {
            let channel = c;
          }
        }
        if (channel){
          channel.send(result);**/
        return;
    };
    if (msg.content.substring(0, 35) === 'https://replay.pokemonshowdown.com/') {
        msg.react('🔎');
        console.log(showdownHandler.watchReplay(msg.content));
        return;
    };
    
});

client.login(process.env.TOKEN);
