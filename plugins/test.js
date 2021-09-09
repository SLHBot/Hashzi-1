const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type picture url."

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'grw', fromMe: true, dontAddCommandList: true }, async (message, match) => {

        var usppUrl = await message.client.getProfilePicture(message.jid)

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=` + usppUrl, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\nSLHackers Team' })

    });
}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'oldphoto ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var usppUrl = await message.client.getProfilePicture(message.jid)

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=` + usppUrl, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\nSLHackers Team' })

    }));

}
