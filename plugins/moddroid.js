const hiru = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const { errorMessage, infoMessage } = require('../helpers');
const Language = require('../language');
const PHONEDE_DESC = "එය මොඩ්ඩ්‍රොයිඩ් යෙදුම් දත්ත යවයි."
const NEED_WORDC = "කරුණාකර APP නමක් ඇතුළත් කරන්න"
const USAGE = "..."
const LOADING = "Fetching User Data"
const PHN_PHN = "App Name:-"
const PHN_RDATE = "බගතකරගන්නා Url:-"
const NOT_FOUND = "*Can't Find Anything!.*"



if (Config.WORKTYPE == 'private') {

    hiru.addCommand({ pattern: 'hmod ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

        const pname = match[1]

        if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

        await message.sendMessage(infoMessage(LOADING))

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[0]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[1]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[2]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[3]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })
            .catch(
                async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
            )
    },

    )
}

if (Config.WORKTYPE == 'public') {

    hiru.addCommand({ pattern: 'hmod ?(.*)', fromMe: false, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

        const pname = match[1]

        if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

        await message.sendMessage(infoMessage(LOADING))

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[0]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[1]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[2]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,

                } = response.data.result[3]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_RDATE}* ${title}` + `\n` +
                    `*${PHN_PHN}* ${url}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀slhackers-bot*'
                })
            })
            .catch(
                async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
            )
    },

    )
}
