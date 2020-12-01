import Discord from 'discord.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client?.user?.tag}!`);
});

let msgs: any;

client.on('message', (msg) => {
	if (msg.content.split('/')[0] == 'g') {
    
	} else {
		msgs = JSON.parse(fs.readFileSync(path.join(__dirname, 'msgsreply.json'), 'utf-8'));
		for (let key in msgs) {
			if (msg.content === key) {
				msg.reply(msgs[key]);
			}
		}
	}
});

console.log(process.env.API_KEY)

client.login(process.env.API_KEY).catch(err => console.log(err));
