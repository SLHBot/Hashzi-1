const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type picture url.*"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'affect ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`${Config.LYCODESITE}api/img/affect?url=${encodeURIComponent(match[1])}&apikey=${Config.LYCODEAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Hiruwa*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'affect ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`${Config.LYCODESITE}api/img/affect?url=${encodeURIComponent(match[1])}&apikey=${Config.LYCODEAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Hiruwa*' })

    }));

}
