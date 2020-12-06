import commands from './commands'
import Discord from 'discord.js'
import dotenv from 'dotenv'
import msgs from'./msgsreply'
import './functions'

dotenv.config();
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('message', (msg) => {
	//speed test check 
	if (msg.content == process.env.testText) {
		let testTextLength:number = process.env.testText.length;
		let testEndTime:number = Date.now();
		let testStartTime:number = Number(process.env.testStartTime)
		let testTime:number = (testEndTime - testStartTime)/1000;
		msg.reply(`u typed it on ${testTime} secs .. u did well it's like ${testTextLength / testTime} letter per sec`)
		return;
	}

	if (msg.content.split('/')[0] == 'g') {
		let command:string = msg.content.split('/')[1].split(' ')[0];
		console.log(command)
		commands[command](msg);
	} else {
		for (let key in msgs) {
			if (msg.content.includes(key) && !msg.author.bot) {
				msg.reply(msgs[key]);
			}
		}
	}
});

client.login(process.env.API_KEY).catch(err => console.log(err));
export default client;