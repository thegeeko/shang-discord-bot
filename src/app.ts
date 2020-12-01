import Discord from 'discord.js';
import path from 'path';
import fs from 'fs';
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

let msgs:any;

client.on('message', msg => {
  msgs = JSON.parse(fs.readFileSync(path.join(__dirname, "msgsreply.json"),'utf-8'));
  for(let key in msgs) {
    if (msg.content === key) {
      msg.reply(msgs[key]);
    }
  }
  
});



client.login('NzgzMjY1NDU4Mzc1NDkxNjE0.X8YOzQ.Ij3b9-JV4piaV-b08q9BTC-rouY');