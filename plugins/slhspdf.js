/*
Nekobin for SLHackers - Hiirusha

Licensed under the GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command enthelum perupara nenba"

const Language = require('../language');
const Lang = Language.getString('nekobin');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: '🤝🤝🤝', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D5FHWDB-RDS42AX-MRESW75-K0FS7Z5&url=${msg}&width=1980&height=1080&output=image&file_type=pdf&pdf_options%5Bformat%5D)=A3&pdf_options%5Bmedia%5D)=print&pdf_options%5Blandscape%5D)=true&pdf_options%5Bprint_background%5D)=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-spdf.pdf' })

    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: '🤝🤝🤝', fromMe: false, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D5FHWDB-RDS42AX-MRESW75-K0FS7Z5&url=${msg}&width=1980&height=1080&output=image&file_type=pdf&pdf_options%5Bformat%5D)=A3&pdf_options%5Bmedia%5D)=print&pdf_options%5Blandscape%5D)=true&pdf_options%5Bprint_background%5D)=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-spdf.pdf' })

    }));

    SlHackers.addCommand({ pattern: '🤝🤝🤝', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D5FHWDB-RDS42AX-MRESW75-K0FS7Z5&url=${msg}&width=1980&height=1080&output=image&file_type=pdf&pdf_options%5Bformat%5D)=A3&pdf_options%5Bmedia%5D)=print&pdf_options%5Blandscape%5D)=true&pdf_options%5Bprint_background%5D)=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-spdf.pdf' })

    }));
}
