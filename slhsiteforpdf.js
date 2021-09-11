/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY Hirusha Dayarathne
Wa.me/+94755681782
*/

const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const SPDF_DESC = "Converts a Site into PDF"
const SPDF_LINK = "*You Must Enter a URL*"
const SPDF_PROC = "```Converting Site into PDF```"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'spdf ?(.*)', fromMe: true, desc: SPDF_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(SPDF_LINK);

        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, SPDF_PROC, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-site-to-pdf.pdf' })

    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'spdf ?(.*)', fromMe: false, desc: SPDF_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(SPDF_LINK);

        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, SPDF_PROC, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-site-to-pdf.pdf' })

    }));
}
