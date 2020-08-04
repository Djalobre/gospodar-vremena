require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


const uvrede = ['braaaavo majmune <:PepeYikes:590208727479746573>','aj cuti <:PepeYikes:590208727479746573>','e aj samo ti ne seri <:PepeYikes:590208727479746573>']



client.on('message', user => {
    if (user.author.username === 'Brle' || user.author.username === 'djalobre' ) {
      const random = Math.floor(Math.random() * uvrede.length);
      user.reply(uvrede[random]);
    }
  });