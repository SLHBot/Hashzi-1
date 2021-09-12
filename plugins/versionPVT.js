/*Codded by @Hirusha
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');
const fs = require("fs")
const slhb = fs.readFileSync('./media/bot.mp3')

SlHackers.addCommand({ pattern: 'version', fromMe: true }, (async (message, match) => {

    await message.client.sendMessage(message.jid, slhb, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
    await message.sendMessage("*⚜SLHACKERS VERSION CHECKER🙇*\n\n*🧚‍♂️SLHackers ▻5.5.4*\n*Global Stable*");

}));
