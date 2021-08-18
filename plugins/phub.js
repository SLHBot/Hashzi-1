const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const PB_DESC = "NSFU වීඩියෝ බාගත කරයි"
const PB_NEED = "*Link අවශ්‍යයි!*"
const PB_D = "*🙇Downloading Your Video*"
const PB_UP = "*🔞Uploading Your Video*"
const PB_NO = "*කණගාටුයි හමු නොවීය...*"


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'phbsltb ?(.*)', fromMe: true, desc: PB_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, PB_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, PB_D, MessageType.text)
        await axios
            .get(`https://api.lolhuman.xyz/api/pornhub?apikey=03ffdf45513a71ed7e669db1&url=${link}`)
            .then(async (response) => {
                const {
                    url,
                } = response.data.result

                const videoBuffer = await axios.get(url, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, PB_UP, MessageType.text, { quoted: message.data });
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { mimetype: Mimetype.mp4, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, PB_NO, MessageType.text, { quoted: message.data }),
            )
    },
    )
}

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'phbsltb ?(.*)', fromMe: true, desc: PB_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, PB_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, PB_D, MessageType.text)
        await axios
            .get(`https://api.lolhuman.xyz/api/pornhub?apikey=03ffdf45513a71ed7e669db1&url=${link}`)
            .then(async (response) => {
                const {
                    url,
                } = response.data.result

                const videoBuffer = await axios.get(url, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, PB_UP, MessageType.text, { quoted: message.data });
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { mimetype: Mimetype.mp4, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, PB_NO, MessageType.text, { quoted: message.data }),
            )
    },
    )
}
