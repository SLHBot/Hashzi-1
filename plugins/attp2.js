/* Codded by @Hirusha
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'public') {
    SlHackers.addCommand({ pattern: 'among ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('${Config.LOLSITE}api/amongus?apikey=https://github.com/BlackAmda&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.image, caption: Config.BOT_NAME })
    }));
    SlHackers.addCommand({ pattern: '2attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('${Config.LOLSITE}api/attp2?apikey=https://github.com/BlackAmda&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}
