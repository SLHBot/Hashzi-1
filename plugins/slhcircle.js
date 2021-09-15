
/* Copyright (C) 2021 HIRUSHA.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
SLHackers Team Bot*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type picture url.*"

if (Config.WORKTYPE == 'private') {

    SlHackers.addCMD({ pattern: 'circle(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`${Config.LYCODESITE}api/img/circle?url=${encodeURIComponent(match[1])}&apikey=${Config.LYCODEAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAME })

    }));
}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCMD({ pattern: 'circle(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`${Config.LYCODESITE}api/img/circle?url=${encodeURIComponent(match[1])}&apikey=${Config.LYCODEAPI}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAME })

    }));

}
