require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


const uvrede = ['braaaavo majmune \:7190_linkpepehype:','aj cuti \:FeelsBanMan:','e aj samo ti ne seri \:PepeYikes:']



client.on('message', user => {
    if (user.author.username === 'Brle' || user.author.username === 'Dajnfehr' ) {
      const random = Math.floor(Math.random() * uvrede.length);
      user.reply(uvrede[random]);
    }
  });