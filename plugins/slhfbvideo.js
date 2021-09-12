/* created by HIRUSHA
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'vfb ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4 })

    }));
}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'vfb ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4 })

    }));
}
