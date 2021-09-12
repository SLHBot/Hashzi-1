const SlHackers = require('../events');
const { MessageType, mimetype, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const capt = "🎭 *SLHackers Tiktok Downloader* 🕊\n    🌀  ```CODED BY Hirusha```  🚀"

if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'ttv ?(.*)', fromMe: false }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

        await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n' + Lang.DOWNLOADING_VIDEO)

        await axios
            .get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=bimsaraapi`)
            .then(async (response) => {
                const {
                    nowatermark
                } = response.data.result

                const linkdata = await axios.get(nowatermark, {
                    responseType: 'arraybuffer'
                })

                await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
                    caption: capt,
                })
                    .catch(
                        async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
                    )
            })

    }) //pattern close

    SlHackers.addCommand({ pattern: 'ttv ?(.*)', fromMe: true }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

        await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n' + Lang.DOWNLOADING_VIDEO)

        await axios
            .get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=bimsaraapi`)
            .then(async (response) => {
                const {
                    nowatermark
                } = response.data.result

                const linkdata = await axios.get(nowatermark, {
                    responseType: 'arraybuffer'
                })

                await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
                    caption: capt,
                })
                    .catch(
                        async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
                    )
            })

    }) //pattern close

} /* public close*/

else if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'ttv ?(.*)', fromMe: true }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

        await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n' + Lang.DOWNLOADING_VIDEO)

        await axios
            .get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=bimsaraapi`)
            .then(async (response) => {
                const {
                    nowatermark
                } = response.data.result

                const linkdata = await axios.get(nowatermark, {
                    responseType: 'arraybuffer'
                })

                await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
                    caption: capt,
                })
                    .catch(
                        async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
                    )
            })

    }) //pattern close

} /* private close*/