require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


const uvrede = ['braaaavo majmune <:PepeYikes:637575565528006656>','aj cuti <:PepeYikes:637575565528006656>','e aj samo ti ne seri <:PepeYikes:637575565528006656>']



client.on('message', user => {
    if (user.author.username === 'Brle' || user.author.username === 'djalobre' ) {
      const random = Math.floor(Math.random() * uvrede.length);
      user.reply(uvrede[random]);
    }
  });