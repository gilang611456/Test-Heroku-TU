const Discord = require('discord.js');
const client = new Discord.Client();
const timezone = require('moment-timezone');

function botStatus() {
  
  let waktu2 = client.channels.find('id', '663300346118012951')
  waktu2.setName(`${timezone().tz("Asia/Jakarta").format("🕰 HH:mm [WIB]") + " "}`)
  
  let waktu3 = client.channels.find('id', '703527155916865619')
  waktu3.setName(`${timezone().tz("Asia/Makassar").format("🕰 HH:mm [WITA]") + " "}`)
  
  let waktu4 = client.channels.find('id', '721075048642904128')
  waktu4.setName(`${timezone().tz("Asia/Jayapura").format("🕰 HH:mm [WIT]") + " "}`)
  
}; setInterval(botStatus, 10000)



client.on('ready' , () => {
  console.log(`${client.user.username} Siap!`);
  client.user.setActivity('Yotteno')
});


client.login(process.env.TOKEN)
