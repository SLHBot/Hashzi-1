/* created by HIRUSHA
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'grw ?(.*)', fromMe: true, desc: Lang.DESC }, (async (message, match) => {
        if (match[0].includes('install')) return;
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, { quoted: message.data });
        if (!match[1].includes('www.instagram.com')) return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, { quoted: message.data });

        let urls = `https://leyscoders-api.herokuapp.com/api/moddroid?q=${match[1]}&apikey=dappakntlll`
        let response
        try { response = await got(urls) } catch {
            return await message.client.sendMessage(message.jid, Lang.FİX, MessageType.text, { quoted: message.data });
        }
        const json = JSON.parse(response.body);

        if (json.status === false) return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text, { quoted: message.data });
        if (json.code === 403) return await message.client.sendMessage(message.jid, '```API Error!```', MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text, { quoted: message.data });

        let url = json.result[0].img;
        let status = json.status;
        await axios({ method: "get", url, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, responseType: 'arraybuffer' }).then(async (res) => {
            if (status === 'true') { return await message.sendMessage(Buffer(res.data), MessageType.image, { caption: '*' + Tlang.USERNAME + '* ' + json.result.username + '\n*' + Tlang.LİNK + '* ' + 'http://instagram.com/' + json.result.username + '\n*' + Tlang.CAPTİON + '* ' + json.result.caption }) } else {
                return await message.sendMessage(Buffer(res.data), MessageType.video, { caption: '*' + Tlang.USERNAME + '* ' + json.result.username + '\n*' + Tlang.LİNK + '* ' + 'http://instagram.com/' + json.result.username + '\n*' + Tlang.CAPTİON + '* ' + json.result.caption });
            }
        });

    }));
}

else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'grw ?(.*)', fromMe: false, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${match[1]}&apikey=dappakntlll`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (json.status === 'true') return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[0].judul + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[0].link + '```\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[1].judul + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[1].link + '```\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[2].judul + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[2].link + '```\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[3].judul + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[3].link + '```\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
    SlHackers.addCommand({ pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {

        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore SLHackers\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore SLHackers\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text, { quoted: message.data });

    }));
}
