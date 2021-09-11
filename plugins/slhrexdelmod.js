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
const PHN_TITLE = "App Name:-"
const PHN_URL = "බගතකරගන්නා Url:-"
const PHN_UP = "Update_On:-"
const PHN_DESC = "Description:-"
const NOT_FOUND = "*කිසිවක් සොයා ගත නොහැක!.*"



if (Config.WORKTYPE == 'private') {

    hiru.addCommand({ pattern: 'rexdl ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

        const pname = match[1]

        if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

        await message.sendMessage(infoMessage(LOADING))

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[0]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[1]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[2]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[3]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })
            .catch(
                async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
            )
    },

    )
}

if (Config.WORKTYPE == 'public') {

    hiru.addCommand({ pattern: 'rexdl ?(.*)', fromMe: false, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

        const pname = match[1]

        if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

        await message.sendMessage(infoMessage(LOADING))

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[0]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[1]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[2]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    url,
                    title,
                    img,
                    update_on,
                    desc,

                } = response.data.result[3]

                const profileBuffer = await axios.get(img, { responseType: 'arraybuffer' })

                const msg = `*${PHN_TITLE}* ${title}` + `\n` +
                    `*${PHN_UP}* ${update_on}` + `\n\n` +
                    `*${PHN_URL}* ${url}` + `\n\n` +
                    `*${PHN_DESC}* ${desc}`

                await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
                    caption: msg + '\n' + '*🚀SLHackers Team Bot*'
                })
            })
            .catch(
                async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
            )
    },

    )
}
