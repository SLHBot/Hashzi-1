const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'public') {

    SlHackers.addCMD({ pattern: 'glitch ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=${Config.ASENA_PLUG}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'freefire ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey${Config.ASENA_PLUG}=&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'cfire ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'light ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'cslogo ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 's3d ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nlogo ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'blackpink ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'neonlight ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'pornhub ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=${Config.ASENA_PLUG}&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'blood ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAAAAME })

    }));

    SlHackers.addCMD({ pattern: '3dtext ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'nfire ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'ninjalogo ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'nglow ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nleaves ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nsky ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'buttonyt ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'bcwall ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=${Config.ASENA_PLUG}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'anony ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${Config.LLHAPI}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by*:\n⚡𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅⚡' })

    }));

    SlHackers.addCMD({ pattern: 'ptext ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'colortext ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'emoji ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var uri = encodeURI(match[1])

        var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=${Config.ASENA_PLUG}&emoji=' + uri, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nsky ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/skytext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'silk ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/silktext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'sand ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/sandw?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'glowtext ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/glowtext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'flametext ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/flametext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'flowertext ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/flowertext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'blood ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'luxury ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/luxury?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'xmas ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/xmas?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'toxic ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/toxic?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'njoker ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/joker?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'glossy ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/glossy-carbon?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nethu ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'metald ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/metal-dark?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'marvel ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/marvel?text1=${topText}&text2=${bottomText}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'space3d ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/space-3d?text1=${topText}&text2=${bottomText}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'horror ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/horror?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'dgold ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/deluxe-gold?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nwolf ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/wolf?text1=Neotrox&text2=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nxwolf ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/wolf2?text1=Neotrox&text2=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'nxninja ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/ninja?text1=${match[1]}&text2=Neotrox&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    //============================================================I Edited logo====================================================================================
    SlHackers.addCMD({ pattern: 'smoke ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoke?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'candy ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/candy?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'gradientavatar ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'fur ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'flaming ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'bevel ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'lolcover ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'dota2avatar ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'crossfire ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/crossfire?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'warfacecover ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warfacecover?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'aov ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'pokemon ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/pokemon?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'kopi2 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'underwebmatrix ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'watermelon ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/watermelon?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'rock ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*⚜SLHackers Bot Pro⚜*' })

    }));

    SlHackers.addCMD({ pattern: 'lion ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/lionlogomascot?text=${topText}&text2=${bottomText}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Produced by :```\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    SlHackers.addCMD({ pattern: 'ultragloss ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'denim ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'rph ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.xteam.xyz/quotemaker?text=${topText}&wm=${bottomText}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Produced by :```\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    SlHackers.addCMD({ pattern: 'write ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText, thirdText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            thirdText = split[2];
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis?nama=${topText}&kelas=${bottomText}&text=${thirdText}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Produced by :```\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    SlHackers.addCMD({ pattern: 'write1 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis1?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'write2 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis2?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'write3 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis3?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'write4 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis4?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'write5 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis5?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCMD({ pattern: 'write6 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/magernulis6?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++My Video+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    SlHackers.addCMD({ pattern: 'vtext1 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/shaunthesheep?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'vtext2 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'vtext3 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/bold?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'vtext4 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/glowing?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'vtext5 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'vtext6 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/army?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

    SlHackers.addCMD({ pattern: 'vtext7 ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAME })

    }));

}
