const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  ENTHEKILUM EZHUTH NENBA"

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'barcode ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by SLHackers' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'barcode ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${match[1]}`, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by SLHackers' })

    }));

}
