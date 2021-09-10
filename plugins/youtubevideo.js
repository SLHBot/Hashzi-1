

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const got = require('got');
const Config = require('../config');
const Language = require('../language');

const Lang = Language.getString('instagram');
const Tlang = Language.getString('tiktok');
const YTV_DESC = "යූටියුබ් වීඩියෝ බාගැනීම් V2 ."
const YT_NEED = "*URL අවශ්‍යයි!.*"
const DWLOAD_VID = "*⌛ඔබේ වීඩියෝ බාගැනීම...*"
const YTV_UP = "*📬ඔබේ වීඩියෝ පටය උඩුගත කිරීම...*"
const NO_RESULT = "*🌀කිසිවක් සොයා ගත නොහැක...*"
const PHN_DU = "කාල සීමාව:-"
const PHN_RDATE = "ශීර්ෂය:-"
const PHN_UP = "හිමිකරු :-"
const PHN_VIEW = "බැලීම් :-"
const PHN_CHAN = "අනුගමනය කරන්න:-"
const PHN_RES = "Resolution :-"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'vyt ?(.*)', fromMe: true, desc: YTV_DESC, deleteCommand: false }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text)
        await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text);
        await axios
            .get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    link,
                    resolution,

                } = response.data.result.link

                const {
                    title,
                    duration,
                    uploader,
                    img,
                    view,

                } = response.data.result

                const www = `*${PHN_RDATE}* ${title}` + `\n\n` +
                    `*${PHN_CHAN}* ${channel}` + `\n\n` +
                    `*${PHN_VIEW}* ${view}` + `\n\n` +
                    `*${PHN_DU}* ${duration}`

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    quoted: message.data,
                    caption: www + '\n' + '*🚀slhackers-bot*'
                })

                const msg = `*${PHN_RDATE}* ${title}` + `\n\n` +
                    `*${PHN_UP}* ${uploader}` + `\n\n` +
                    `*${PHN_RES}* ${resolution}` + `\n\n` +
                    `*${PHN_DU}* ${duration}`

                const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, YTV_UP, MessageType.text);
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { quoted: message.data, filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: msg, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
            )
    },
    )
}

else if (Config.WORKTYPE == 'public') {
    SlHackers.addCommand({ pattern: 'vyt ?(.*)', fromMe: false, desc: YTV_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text)
        await axios
            .get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    link,
                    resolution,

                } = response.data.result.link

                const {
                    title,
                    duration,
                    uploader,
                    img,
                    view,

                } = response.data.result

                const www = `*${PHN_RDATE}* ${title}` + `\n\n` +
                    `*${PHN_CHAN}* ${channel}` + `\n\n` +
                    `*${PHN_VIEW}* ${view}` + `\n\n` +
                    `*${PHN_DU}* ${duration}`

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    quoted: message.data,
                    caption: www + '\n' + '*🚀slhackers-bot*'
                })

                const msg = `*${PHN_RDATE}* ${title}` + `\n\n` +
                    `*${PHN_UP}* ${uploader}` + `\n\n` +
                    `*${PHN_RES}* ${resolution}` + `\n\n` +
                    `*${PHN_DU}* ${duration}`

                const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, YTV_UP, MessageType.text);
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { quoted: message.data, filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: msg, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
            )
    },
    )
}
