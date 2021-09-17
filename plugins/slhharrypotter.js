const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum Eyuth muthe\n🙄🙄🙄"

if (Config.WORKTYPE == 'private') {

  SlHackers.addCommand({ pattern: 'harrypotter ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/harrypotter?apikey=${Config.LLHAPI}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Eva*' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  SlHackers.addCommand({ pattern: 'harrypotter ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/harrypotter?apikey=${Config.LLHAPI}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Eva*' })

  }));

}
