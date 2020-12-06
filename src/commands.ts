import path from 'path'
import Discord from 'discord.js';
import ShangBot from './functions';
import {functionsObject} from './types/types'

const commands:functionsObject = {
  screenshot: (msg:Discord.Message)=>{
    let link = msg.content.split('screenshot')[1].replace(' ', '');
    console.log(link);
    ShangBot.screenshot(link).then(screenshotName => {
      let screenshotImage = path.join('screenshots',screenshotName);
      console.log(screenshotImage);
      msg.reply("here u go bb",{files:[screenshotImage]});
    });
  },
  speedtest: (msg:Discord.Message)=> {
    let length = msg.content.split('speedtest')[1].replace(' ', '')
    ShangBot.speedTest(Number(length)).then((img) => {
      let imgBuffer = Buffer.from(img.replace('data:image/png;base64,',''), 'base64')
      msg.reply('write this',{files:[imgBuffer]}).catch(err => console.log(err));
    })
  }
}

export default commands; 
//add command and add function for it 
