const Discord = require('discord.js');
const client = new Discord.Client();
const timezone = require('moment-timezone');

function botStatus() {
  
  let waktu2 = client.channels.find('id', '706519225119932507')
  waktu2.setName(`${timezone().tz("Asia/Jakarta").format("🕰 HH:mm [WIB]") + " "}`)
  
  let waktu3 = client.channels.find('id', '706519263514722344')
  waktu3.setName(`${timezone().tz("Asia/Makassar").format("🕰 HH:mm [WITA]") + " "}`)
  
  let waktu4 = client.channels.find('id', '706519293365321728')
  waktu4.setName(`${timezone().tz("Asia/Jayapura").format("🕰 HH:mm [WIT]") + " "}`)
  
}; setInterval(botStatus, 10000)



client.on('ready' , () => {
  console.log(`${client.user.username} Siap!`);
  client.user.setActivity('Yotteno')
});


client.login(process.env.TOKEN)
