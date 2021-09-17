/* Copyright (C) 2021 TENUX-SLHackers.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
SLHACKERSX - CH-MOD
*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const YTV_DESC = "Youtube Video Downloader V2 ."
const YT_NEED = "*වචනයක් අවශ්‍යයි!.*"
const DWLOAD_VID = "*🎭ඔබේ වීඩියෝ බාගැනීම...*"
const YTV_UP = "*🚀ඔබේ වීඩියෝ පටය උඩුගත කිරීම...*"
const NO_RESULT = "*🌀කිසිවක් සොයා ගත නොහැක...*"


if (Config.WORKTYPE == 'private') {

  SlHackers.addCommand({ pattern: 'slmp4 ?(.*)', fromMe: true, desc: YTV_DESC, deleteCommand: false }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text)
    await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text, { quoted: message.data });
    await axios
      .get(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=${Config.ASENA_PLUG}&q=${link}`)
      .then(async (response) => {
        const {
          link,
        } = response.data.result

        const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, YTV_UP, MessageType.text, { quoted: message.data });
        await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAME, ptt: false })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
      )
  },
  )
}

else if (Config.WORKTYPE == 'public') {
  SlHackers.addCommand({ pattern: 'slmp4 ?(.*)', fromMe: false, desc: YTV_DESC }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text, { quoted: message.data })
    await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text)
    await axios
      .get(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=${Config.ASENA_PLUG}&q=${link}`)
      .then(async (response) => {
        const {
          link,
        } = response.data.result

        const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, YTV_UP, MessageType.text, { quoted: message.data });
        await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.document, { filename: 'SLHackers VideoHub', mimetype: Mimetype.mp4, ptt: false })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
      )
  },
  )
}
