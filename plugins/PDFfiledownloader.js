/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY Hirusha Dayarathne
Wa.me/+94755681782
*/

const Asena = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_N = "```PDF 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕𝕚𝕟𝕘...```"
const XN_D = "```PDF 𝕌𝕡𝕝𝕠𝕒𝕕𝕚𝕟𝕘...```"
const NEED_WORD = "*ඔබ PDF URL ඇතුළත් කළ යුතුය*"

if (Config.NEOA == 'bimsaraapi') {

    Asena.addCommand({ pattern: 'pdf ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XN_N, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, XN_D, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { filename: 'SLHackers.pdf', mimetype: Mimetype.pdf })

    }));

}
