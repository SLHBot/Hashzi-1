/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY teenuX
Wa.me/+94755681782
*/

const Asena = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇Downloading Your Video*"
const NEED_WORD = "*ඔබ URL ඇතුළත් කළ යුතුය*"

if (Config.NEOA == 'bimsaraapi') {

    Asena.addCommand({ pattern: 'VIDEO ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XN_D, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { filename: 'SLHackers.mp4', mimetype: Mimetype.mp4 })

    }));

}
