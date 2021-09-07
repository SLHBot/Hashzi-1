/* created by HIRUSHA
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {


    Asena.addCommand({ pattern: 'modapp ?(.*)', fromMe: true, desc: 'get mod apk from happymod', dontAddCommandList: true }, async (message, match) => {
        if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
        const url = `https://api.zeks.me/api/happymod?apikey=bimsaraapi&q=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
                '*📕 ' + Lang.NAMEY + '* ```' + json.result[0].title + '```\n\n' +
                '*📘 ' + Lang.SIZE + '* ```' + json.result[0].rating + '```\n\n\n' +
                '*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
}

else if (Config.WORKTYPE == 'public') {


    Asena.addCommand({ pattern: 'modapp ?(.*)', fromMe: false, desc: 'get mod apk from happymod', dontAddCommandList: true }, async (message, match) => {
        if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
        const url = `https://api.zeks.me/api/happymod?apikey=bimsaraapi&q=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
                '*📕 ' + Lang.NAMEY + '* ```' + json.result[0].title + '```\n\n' +
                '*📘 ' + Lang.SIZE + '* ```' + json.result[0].rating + '```\n\n\n' +
                '*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
}
