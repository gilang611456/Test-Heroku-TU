const Discord = require ('discord.js') ;
const Client = new Discord.Client();

Client.on('ready' , () => {
console.log('Nyala');
});

Client.login(process.env.BOT)
