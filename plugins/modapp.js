/* created by HIRUSHA
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'moddd ?(.*)', fromMe: true, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.zeks.me/api/happymod?apikey=bimsaraapi&q=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[0].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[0].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[0].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[0].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[1].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[1].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[1].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[1].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[2].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[2].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[2].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[2].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[3].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[3].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[3].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[3].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[4].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[4].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[4].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[4].thumb + '```\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'moddd ?(.*)', fromMe: false, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.zeks.me/api/happymod?apikey=bimsaraapi&q=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[0].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[0].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[0].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[0].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[1].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[1].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[1].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[1].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[2].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[2].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[2].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[2].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[3].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[3].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[3].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[3].thumb + '```\n' +
                '*📕 ' + Lang.PHEAD + ':* ```' + json.result[4].title + '```\n' +
                '*📗 ' + Lang.LINK + ':* ```' + json.result[4].url + '```\n' +
                '*📘 ' + Lang.VIEWS + ':* ```' + json.result[4].VIEWS + '```\n' +
                '*📘 ' + Lang.PICT + ':* ```' + json.result[4].thumb + '```\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
    Asena.addCommand({ pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {

        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore SLHackers\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore SLHackers\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text, { quoted: message.data });

    }));
}
