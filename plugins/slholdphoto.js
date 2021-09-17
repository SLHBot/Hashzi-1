const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type picture url.*"

if (Config.WORKTYPE == 'private') {

  SlHackers.addCommand({ pattern: 'oldphoto ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=${match[1]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\nSLHackers Team' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  SlHackers.addCommand({ pattern: 'oldphoto ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=${match[1]}`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\nSLHackers Team' })

  }));

}
