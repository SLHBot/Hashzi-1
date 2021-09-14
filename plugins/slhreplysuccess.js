/*
Nekobin for SLHackers - Hiirusha

Licensed under the GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command enthelum perupara nenba"

const Language = require('../language');
const Lang = Language.getString('nekobin');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: '✋', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D5FHWDB-RDS42AX-MRESW75-K0FS7Z5&url=${msg}&full_page=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&dark_mode=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: '✋', fromMe: false, desc: Lang.NEKO_DESC }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D5FHWDB-RDS42AX-MRESW75-K0FS7Z5&url=${msg}&full_page=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&dark_mode=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCommand({ pattern: '✋', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D5FHWDB-RDS42AX-MRESW75-K0FS7Z5&url=${msg}&full_page=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&dark_mode=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));
}
