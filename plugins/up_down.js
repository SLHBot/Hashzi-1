/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne


const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const got = require('got')
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('up_down');

Asena.addCommand({pattern: 'download ?(.*)', fromMe: true, desc: Lang.MEMES_DESC, usage: 'meme top;bottom'}, (async (message, match) => {
    if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);

}));
*/
