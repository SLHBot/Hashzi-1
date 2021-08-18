/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&url=${match[1]}&width=1920&height=1080&full_page=true&extract_text=true&output=image&file_type=pdf&pdf_options%5Bformat%5D)=A4&pdf_options%5Bmedia%5D)=print&pdf_options%5Blandscape%5D)=false&pdf_options%5Bprint_background%5D)=false&block_ads=true&no_cookie_banners=true&lazy_load=true&dark_mode=true&block_tracking=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by *⚙ SLHackers Bot ⚙*' })

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&url=${match[1]}&width=1920&height=1080&full_page=true&extract_text=true&output=image&file_type=pdf&pdf_options%5Bformat%5D)=A4&pdf_options%5Bmedia%5D)=print&pdf_options%5Blandscape%5D)=false&pdf_options%5Bprint_background%5D)=false&block_ads=true&no_cookie_banners=true&lazy_load=true&dark_mode=true&block_tracking=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by *⚙ SLHackers Bot ⚙*' })

    }));
    Asena.addCommand({ pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&url=${match[1]}&width=1920&height=1080&full_page=true&extract_text=true&output=image&file_type=pdf&pdf_options%5Bformat%5D)=A4&pdf_options%5Bmedia%5D)=print&pdf_options%5Blandscape%5D)=false&pdf_options%5Bprint_background%5D)=false&block_ads=true&no_cookie_banners=true&lazy_load=true&dark_mode=true&block_tracking=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by *⚙ SLHackers Bot ⚙*' })

    }));
}

