

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const got = require('got');
const Config = require('../config');
const Language = require('../language');

const Lang = Language.getString('instagram');
const Tlang = Language.getString('tiktok');
const YTV_DESC = "Youtube Video Downloader V2 ."
const YT_NEED = "*URL අවශ්‍යයි!.*"
const DWLOAD_VID = "*🎭ඔබේ වීඩියෝ බාගැනීම...*"
const YTV_UP = "*🚀ඔබේ වීඩියෝ පටය උඩුගත කිරීම...*"
const NO_RESULT = "*🌀කිසිවක් සොයා ගත නොහැක...*"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'Vfb ?(.*)', fromMe: true, desc: YTV_DESC, deleteCommand: false }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text)
        await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text);
        await axios
            .get(`${Config.LOLSITE}api/facebook2?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    result,
                } = response.data

                const videoBuffer = await axios.get(result, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, YTV_UP, MessageType.text);
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAME, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
            )
    },
    )
}

else if (Config.WORKTYPE == 'public') {
    SlHackers.addCommand({ pattern: 'Vfb ?(.*)', fromMe: false, desc: YTV_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text)
        await axios
            .get(`${Config.LOLSITE}api/facebook2?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    result,
                } = response.data

                const videoBuffer = await axios.get(result, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, YTV_UP, MessageType.text, { quoted: message.data });
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAME, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
            )
    },
    )
}
