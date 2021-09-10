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
const PHN_PHN = "ශීර්ෂය:-"
const PHN_RDATE = "සබැඳිය:-"
const NOT_FOUND = "*කිසිවක් සොයා ගත නොහැක!.*"



if (Config.WORKTYPE == 'private') {

    hiru.addCommand({ pattern: 'hmod ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

        const pname = match[1]

        if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

        await message.sendMessage(infoMessage(LOADING))

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[0]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[2]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[3]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[4]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
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
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[0]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[2]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[3]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })

        await axios
            .get(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${pname}&apikey=dappakntlll`)
            .then(async (response) => {
                const {
                    judul,
                    link,
                } = response.result[4]

                const msg = `*${PHN_PHN}* ${judul}` + `\n\n` +
                    `*${PHN_RDATE}* ${link}`

                await message.client.sendMessage(message.jid, msg, MessageType.text, {
                    quoted: message.data,
                })
            })
            .catch(
                async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
            )
    },

    )
}
