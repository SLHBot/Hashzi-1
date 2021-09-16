const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {

    SlHackers.addCMD({ pattern: 'mmpack', fromMe: true, }, (async (message, match) => {

        var r_text = new Array();

        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";

        var i = Math.floor(06 * Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '   *╔═════◉SLHαƈƙҽɾʂ Tҽαɱ Bσƚ◉═════╗*\n           🔰SLHαcĸerѕ Teαм Boт🔰\n*❖═මීම් ලැයිස්තුව═❖*\n\n*🔖.yasai       ❴your text❵*\n*🔖.uddika    ❴your text❵*\n*🔖.aah          ❴your text❵*\n*🔖.sir            ❴your text❵*\n*🔖.my3         ❴your text❵*\n*🔖.fuck         ❴your text❵*\n*🔖.hii             ❴your text❵*\n*🔖.asai          ❴your text❵*\n*🔖.hapoi       ❴your text❵*\n*🔖.anura       ❴your text❵*\n*🔖.gemba       ❴your text❵*\n*🔖.wow       ❴your text❵*\n*🔖.hapo       ❴your text❵*\n*🔖.babah       ❴your text❵*\n*🔖.macn       ❴your text❵*\n*🔖.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: Hirusha Dayarathne* ' })
    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCMD({ pattern: 'mmpack', fromMe: false, }, (async (message, match) => {

        var r_text = new Array();

        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";

        var i = Math.floor(06 * Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' *╔═════◉SLHαƈƙҽɾʂ Tҽαɱ Bσƚ◉═════╗*\n           🔰SLHαcĸerѕ Teαм Boт🔰\n*❖═මීම් ලැයිස්තුව═❖*\n\n*🔖.yasai       ❴your text❵*\n*🔖.uddika    ❴your text❵*\n*🔖.aah          ❴your text❵*\n*🔖.sir            ❴your text❵*\n*🔖.my3         ❴your text❵*\n*🔖.fuck         ❴your text❵*\n*🔖.hii             ❴your text❵*\n*🔖.asai          ❴your text❵*\n*🔖.hapoi       ❴your text❵*\n*🔖.anura       ❴your text❵*\n*🔖.gemba       ❴your text❵*\n*🔖.wow       ❴your text❵*\n*🔖.hapo       ❴your text❵*\n*🔖.babah       ❴your text❵*\n*🔖.macn       ❴your text❵*\n*🔖.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: Hirusha Dayarathne* ' })
    }));
}
