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

    SlHackers.addCommand({ pattern: '🚀', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        await axios
            .get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${Config.LLHAPI}&url=${msg}`)
            .then(async (response) => {
                const {
                    link,
                    resolution,

                } = response.data.result.link

                const {
                    thumbnail,
                    title,
                    duration,
                    uploader,
                    channel,
                    view,
                    like,
                    dislike,

                } = response.data.result

                const thumbnailBuffer = await axios.get(thumbnail, { responseType: 'arraybuffer' })

                const slh = `*${PHN_RDATE}* ${title}` + `\n\n` +
                    `*${PHN_CHAN}* ${channel}` + `\n\n` +
                    `*${PHN_VIEW}* ${view}` + `\n\n` +
                    `*${PHN_LIKE}* ${like}` + `\n\n` +
                    `*${PHN_DISLIKE}* ${dislike}` + `\n\n` +
                    `*${PHN_DU}* ${duration}` + `\n\n` +
                    `${PHN_HELPER}`

                await message.client.sendMessage(message.jid, Buffer.from(thumbnailBuffer.data), MessageType.image, { quoted: message.data, caption: slh });

                const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n\n` +
                    `*${PHN_UP}* ${uploader}` + `\n\n` +
                    `*${PHN_RES}* ${resolution}` + `\n\n` +
                    `*${PHN_DU}* ${duration}` + `\n\n` +
                    `${PHN_HELPER}`

                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { quoted: message.data, filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: msg, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, '👍🏻👍👍🏻👍👍🏻👍', MessageType.text, { quoted: message.data }),
            )
    }));
}


else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: '🚀', fromMe: false, desc: Lang.NEKO_DESC }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        const msg = message.reply_message.text

        var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=${Config.ASENA_PLUG}&text=${msg}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCommand({ pattern: 'necto', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        const msg = message.reply_message.text

        var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=${Config.ASENA_PLUG}&text=${msg}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));
}
