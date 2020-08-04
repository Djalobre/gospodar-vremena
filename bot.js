require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


const uvrede = ['braaaavo majmune <:PepeYikes:637575565528006656>','aj cuti <:pepeGun:501928360914452511>','e aj samo ti ne seri <:PeepoPing:637575565574144011>']



client.on('message', user => {
    if (user.author.username === 'Brle' || user.author.username === 'Dajnfehr' || user.author.username === 'bno2' ) {
      const random = Math.floor(Math.random() * uvrede.length);
      user.reply(uvrede[random]);
    }
  });