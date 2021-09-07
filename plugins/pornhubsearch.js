/* created by HIRUSHA
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'infmediafire ?(.*)', fromMe: true, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.lolhuman.xyz/api/pornhubsearch?apikey=${Config.LLHAPI}&query=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[0].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[0].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[0].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[1].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[1].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[1].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[2].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[2].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[2].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[3].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[3].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[3].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[4].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[4].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[4].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[5].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[5].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[5].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[6].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[6].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[6].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[7].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[7].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[7].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[8].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[8].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[8].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[9].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[9].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[9].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[10].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[10].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[10].views + '```\n\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'infmediafire ?(.*)', fromMe: false, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.lolhuman.xyz/api/pornhubsearch?apikey=${Config.LLHAPI}&query=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[0].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[0].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[0].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[1].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[1].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[1].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[2].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[2].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[2].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[3].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[3].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[3].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[4].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[4].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[4].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[5].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[5].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[5].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[6].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[6].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[6].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[7].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[7].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[7].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[8].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[8].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[8].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[9].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[9].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[9].views + '```\n\n' +
                '*◼️ ' + Lang.PHEAD + ':* ```' + json.result[10].title + '```\n' +
                '*📰 ' + Lang.LINK + ':* ```' + json.result[10].link + '```\n' +
                '*👉 ' + Lang.VIEWS + ':* ```' + json.result[10].views + '```\n\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
    Asena.addCommand({ pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {

        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore SLHackers\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore SLHackers\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text, { quoted: message.data });

    }));
}
