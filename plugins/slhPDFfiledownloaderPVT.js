/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY Hirusha Dayarathne
Wa.me/+94755681782
*/

const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const PDF_D = "```PDF 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕𝕚𝕟𝕘...```"
const PDF_U = "```PDF 𝕌𝕡𝕝𝕠𝕒𝕕𝕚𝕟𝕘...```"
const NEED_WORD = "*ඔබ PDF URL ඇතුළත් කළ යුතුය*"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'pdf ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, PDF_D, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, PDF_U, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { filename: 'SLHackers.pdf', mimetype: Mimetype.pdf })

    }));

}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'pdf ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, PDF_D, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, PDF_U, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { filename: 'SLHackers.pdf', mimetype: Mimetype.pdf })

    }));

}