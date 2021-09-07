const Asena = require('../events');
const { MessageType, mimetype, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const capt = "🎭 *SLHackers Mediafire Downloader* 🕊\n    🌀  ```CODED BY Hirusha```  🚀"

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'bimsara ?(.*)', fromMe: false }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

        await message.sendMessage('👻 *Mediafire Documents Downloader* 🕊 \n' + Lang.DOWNLOADING_VIDEO)

        await axios
            .get(`https://docs-jojo.herokuapp.com/api/mediafire?url=${link}`)
            .then(async (response) => {
                const {
                    url
                } = response.data.result

                const linkdata = await axios.get(url, {
                    responseType: 'arraybuffer'
                })

                await message.sendMessage(Buffer.from(linkdata.data), MessageType.document, { mimetype: Mimetype.zip })
                    .catch(
                        async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
                    )
            })

    }) //pattern close

    Asena.addCommand({ pattern: 'bimsara ?(.*)', fromMe: true }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

        await message.sendMessage('👻 *Mediafire Documents Downloader* 🕊 \n' + Lang.DOWNLOADING_VIDEO)

        await axios
            .get(`https://docs-jojo.herokuapp.com/api/mediafire?url=${link}`)
            .then(async (response) => {
                const {
                    url
                } = response.data.result

                const linkdata = await axios.get(url, {
                    responseType: 'arraybuffer'
                })

                await message.sendMessage(Buffer.from(linkdata.data), MessageType.document, { mimetype: Mimetype.zip })
                    .catch(
                        async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
                    )
            })

    }) //pattern close

} /* public close*/

else if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'bimsara ?(.*)', fromMe: true }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

        await message.sendMessage('👻 *Mediafire Documents Downloader* 🕊 \n' + Lang.DOWNLOADING_VIDEO)

        await axios
            .get(`https://docs-jojo.herokuapp.com/api/mediafire?url=${link}`)
            .then(async (response) => {
                const {
                    url
                } = response.data.result

                const linkdata = await axios.get(url, {
                    responseType: 'arraybuffer'
                })

                await message.sendMessage(Buffer.from(linkdata.data), MessageType.document, { mimetype: Mimetype.zip })
                    .catch(
                        async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
                    )
            })

    }) //pattern close

} /* private close*/