const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const PB_DESC = "PHUB වීඩියෝ බාගත කරයි"
const PB_NEED = "*Link අවශ්‍යයි!*"
const PB_D = "*🙇ඔබේ වීඩියෝ බාගැනීම*"
const PB_UP = "*🔞ඔබේ වීඩියෝ පටය උඩුගත කිරීම*"
const PB_NO = "*කණගාටුයි හමු නොවීය...*"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'phub ?(.*)', fromMe: true, desc: PB_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, PB_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, PB_D, MessageType.text)
        await axios
            .get(`${Config.LOLSITE}api/facebook2?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    result,
                } = response.data.result

                const videoBuffer = await axios.get(result, { responseType: 'arraybuffer' })

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

    SlHackers.addCommand({ pattern: 'phub ?(.*)', fromMe: false, desc: PB_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, PB_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, PB_D, MessageType.text)
        await axios
            .get(`${Config.LOLSITE}api/facebook2?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    result,
                } = response.data.result

                const videoBuffer = await axios.get(result, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, PB_UP, MessageType.text, { quoted: message.data });
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { mimetype: Mimetype.mp4, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, PB_NO, MessageType.text, { quoted: message.data }),
            )
    },
    )
}
