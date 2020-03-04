const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("684713817951043604")
setInterval(function() {
channel.send(`ممنوع السبام لول ممنوع السبام لول ممنوع السبام لول`);
}, 30)
})

client.login(process.env.BOT_TOKEN);