
/* Copyright (C) 2021 HIRUSHA.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command enthelum perupara nenba"
let wk = conf.WORKTYPE == 'public' ? false : true

SlHackers.addCommand({ on: 'text', fromMe: wk, dontaddCommandList: true, deleteCommand: false }, (async (message, match) => {
    if (message.message.startsWith('betta')) {

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/cartoongravity?apikey=${Config.LLHAPI}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAME })

    }
}));