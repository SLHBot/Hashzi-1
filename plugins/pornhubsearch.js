/* created by HIRUSHA
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'sphub ?(.*)', fromMe: true, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.lolhuman.xyz/api/pornhubsearch?apikey=${Config.LLHAPI}&query=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[0].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[0].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[0].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[0].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[0].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[0].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[0].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[1].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[1].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[1].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[1].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[1].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[1].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[1].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[2].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[2].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[2].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[2].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[2].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[2].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[2].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[3].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[3].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[3].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[3].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[3].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[3].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[3].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[4].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[4].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[4].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[4].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[4].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[4].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[4].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[5].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[5].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[5].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[5].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[5].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[5].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[5].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[6].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[6].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[6].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[6].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[6].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[6].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[6].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[7].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[7].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[7].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[7].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[7].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[7].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[7].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[8].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[8].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[8].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[8].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[8].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[8].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[8].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[9].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[9].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[9].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[9].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[9].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[9].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[9].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[10].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[10].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[10].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[10].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[10].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[10].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[10].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[11].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[11].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[11].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[11].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[11].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[11].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[11].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[12].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[12].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[12].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[12].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[12].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[12].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[12].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[13].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[13].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[13].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[13].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[13].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[13].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[13].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[14].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[14].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[14].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[14].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[14].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[14].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[14].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[15].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[15].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[15].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[15].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[15].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[15].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[15].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[16].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[16].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[16].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[16].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[16].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[16].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[16].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[17].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[17].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[17].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[17].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[17].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[17].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[17].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[18].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[18].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[18].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[18].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[18].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[18].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[18].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[19].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[19].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[19].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[19].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[19].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[19].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[19].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[20].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[20].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[20].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[20].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[20].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[20].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[20].added + '```\n\n\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'sphub ?(.*)', fromMe: false, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.lolhuman.xyz/api/pornhubsearch?apikey=${Config.LLHAPI}&query=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY + ':* ```' + match[1] + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[0].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[0].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[0].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[0].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[0].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[0].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[0].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[1].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[1].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[1].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[1].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[1].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[1].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[1].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[2].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[2].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[2].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[2].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[2].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[2].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[2].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[3].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[3].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[3].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[3].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[3].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[3].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[3].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[4].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[4].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[4].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[4].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[4].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[4].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[4].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[5].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[5].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[5].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[5].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[5].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[5].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[5].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[6].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[6].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[6].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[6].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[6].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[6].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[6].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[7].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[7].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[7].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[7].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[7].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[7].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[7].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[8].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[8].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[8].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[8].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[8].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[8].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[8].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[9].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[9].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[9].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[9].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[9].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[9].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[9].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[10].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[10].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[10].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[10].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[10].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[10].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[10].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[11].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[11].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[11].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[11].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[11].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[11].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[11].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[12].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[12].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[12].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[12].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[12].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[12].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[12].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[13].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[13].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[13].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[13].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[13].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[13].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[13].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[14].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[14].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[14].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[14].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[14].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[14].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[14].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[15].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[15].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[15].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[15].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[15].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[15].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[15].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[16].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[16].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[16].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[16].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[16].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[16].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[16].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[17].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[17].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[17].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[17].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[17].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[17].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[17].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[18].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[18].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[18].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[18].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[18].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[18].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[18].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[19].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[19].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[19].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[19].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[19].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[19].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[19].added + '```\n\n\n' +
                '*🔘 ' + Lang.PHEAD + ':* ```' + json.result[20].title + '```\n' +
                '*🔗 ' + Lang.LINK + ':* ```' + json.result[20].link + '```\n' +
                '*🚉 ' + Lang.DURAT + ':* ```' + json.result[20].duration + '```\n' +
                '*🔼 ' + Lang.UPLOADER + ':* ```' + json.result[20].uploader + '```\n' +
                '*📺 ' + Lang.VIEWS + ':* ```' + json.result[20].views + '```\n' +
                '*💹 ' + Lang.RATING + ':* ```' + json.result[20].rating + '```\n' +
                '*📅 ' + Lang.ADDDATE + ':* ```' + json.result[20].added + '```\n\n\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
    Asena.addCommand({ pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {

        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore SLHackers\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore SLHackers\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text, { quoted: message.data });

    }));
}
