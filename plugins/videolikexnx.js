const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇Downloading Your Video*"
const XN_UP = "*🔞Uploading Your Video*"
const XN_NO = "*කණගාටුයි හමු නොවීය...*"


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'allvideo ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var webimage = await axios.get(`https://duckduckgo.com/?q=${match[1]}&atb=v284-2`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XN_D, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { filename: 'SLHackers.mp4', mimetype: Mimetype.mp4 })

    }));
}

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'allvideo ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var webimage = await axios.get(`https://duckduckgo.com/?q=${match[1]}&atb=v284-2`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XN_D, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { filename: 'SLHackers.mp4', mimetype: Mimetype.mp4 })

    }));
}
